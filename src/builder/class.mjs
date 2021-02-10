import fs   from 'fs-extra'

import { getConfig       , config } from './util/config.mjs'
import { createProp               } from './prop.mjs'
import { createEnumClass          } from './enumClass.mjs'
import   vocab                      from './templates/vocab/schema-dot-organizer-vocab.mjs'

import   consola from 'consola'

const regEx = new RegExp('(schema:)|((https:|http:)\/\/schema\.org)', 'gm')

export const classMap = new Map()

export const  init = () => {
  for (const aSchema of vocab['@graph'])
    classMap.set(aSchema['rdfs:label'], aSchema)
}

init()

export const createdClasses = () => new Set(classMap.keys())

export const createClass = async (sdo, className) => {
  const { classesWritePath } = await getConfig()

  await importTemplateClass('Ref')
  await importTemplateClass('Thing')
  await importTemplateClass('URL')
  await importTemplateClass('Email')

  if(createdClasses().has(className)) return

// consola.log('CLass.createClass.className', className)
// consola.log('CLass.createClass.isEnumClassWithMembers()', isEnumClassWithMembers(sdo, className))

  if(isEnumClassWithMembers(sdo, className)) {
    createEnumClass(sdo, className)
    return createParent(sdo, className)
  }
  
  fs.writeFileSync(`${classesWritePath}/${className}.mjs`, `export default ${await classTemplate(sdo, className)}` )

  const renderedClass = (await import(`${classesWritePath}/${className}.mjs`)).default;
  
  classMap.set(className, renderedClass)

  createParent(sdo, className)
  createPropertyClasses(sdo, className)
}

function isEnumClassWithMembers(sdo, className){
  const enumClass = sdo.getEnumClass(className)
  
  if(!enumClass) return false

  if(!enumClass.members) false

  if(enumClass.members && enumClass.members.size) return true

  return false
}

async function importThing(){
  if(classMap.has('Thing')) return classMap.get('Thing')

  const Thing = (await import('./templates/classes/Thing.mjs')).default

  classMap.set('Thing', Thing)
}

async function importTemplateClass(name){
  if(classMap.has(name)) return classMap.get(name)

  const aCLass = (await import(`./templates/classes/${name}.mjs`)).default

  classMap.set(name, aCLass)
}

async function createPropertyClasses(sdo, className){
  const { classes } = config
  const { _props } = sdo.getClass(className)
  
  for (const [ propName, prop ] of _props || new Map()){
    if((!classes[className] || !classes[className].props || !classes[className].props.includes(propName))) continue

    const createClasses = getRangeIncludesClasses(sdo, prop)
    
    for (const className of createClasses)
      await createClass(sdo, className)
  }
}

function createParent(sdo, className){
  const { _parent } = sdo.getClass(className)

  if(!_parent) return

  const [ parentName ] = Array.from(_parent.keys())

  return createClass(sdo, parentName)
}

async function classTemplate (sdo, className){
 
  const { propsId, classesId, classes, anyOf, mongo } = config
  const { name, description, _props, _parents }    = sdo.getClass(className)
  const   propsArr                    = []
  const   contextualProps             = []
  
  if( _parents &&  _parents.size)
  for (const [ parentName, parent ] of _parents){
    for (const [ propName, prop ] of parent._props || new Map()){
      const isSchema = (prop['@id'].match(regEx) || {})[0]

      if((!classes[parentName] || !classes[parentName].props || !classes[parentName].props.includes(propName))) continue
  
      propsArr.push(`,\n    ${propName}     : { $ref: '${propsId}/${propName}.mjs' }`)
      if(!isSchema) contextualProps.push(`  ${propName}: { const: '${prop['@id']}', default: '${prop['@id']}' }, \n`)

      // await createProp(sdo, prop)
    }
  }

  for (const [ propName, prop ] of _props || new Map()){

    if((!classes[className] || !classes[className].props || !classes[className].props.includes(propName))) continue
    const isSchema = (prop['@id'].match(regEx) || {})[0]

    propsArr.push(`,\n    ${propName}     : { $ref: '${propsId}/${propName}.mjs' }`)
    if(!isSchema) contextualProps.push(` ${propName}: { const: '${prop['@id']}', default: '${prop['@id']}' }, \n`)

    // await createProp(sdo, prop)
  }

  const context       = getContext(sdo.getClass(className), contextualProps) 
  const classRequired = (classes[className] && classes[className].anyOf)? classes[className].anyOf: anyOf
  const mongoId       = mongo? `\n    _id       : { $ref: '${propsId}/_id.mjs' },`: ''

  const defaultType = (classes[className]||{}).noDefaultType? '' : `, default: '${name}'`

  const template = `{
  $id                 : '${classesId}/${name}.mjs',
  title               : '${name}',
  description         : '${description}',
  type                : 'object',
  properties          : {
    ${context}
    '@type'   : { const: '${name}'${defaultType} }${propsArr.join('')},
    ${mongoId}
  },
  additionalProperties: false,
  anyOf: ${JSON.stringify(classRequired )}
}`

  return template
}

function getContext({ name, '@id': atId }, props=[]){
  const isSchema = (atId.match(regEx) || {})[0]


  if(isSchema && !props.length) return `     '@context'   : { const: 'https://schema.org', default: 'https://schema.org' },`

  const type = !isSchema? `${name} : { const: '${atId}', default: '${atId}' },\n` : ''

  return `  '@context'   : {
                              type      : 'object',
                              properties: {
                                '@vocab': { const: 'https://schema.org', default: 'https://schema.org' },
                                ${type}${props.join('')}
                              }
                            },`
}

function getRangeIncludesClasses(sdo, prop){
  const rangeIncludes = prop['https://schema.org/rangeIncludes'] || prop['schema:rangeIncludes']
  const classNames = []


  if(Array.isArray(rangeIncludes))
    for (const range of rangeIncludes){
      const rangePropName = range['@id'].replace(regEx, '')
      
      if(sdo.isClass(rangePropName)) classNames.push(rangePropName)
    }
  else sdo.isClass(rangeIncludes['@id'].replace(regEx, ''))? classNames.push(rangeIncludes['@id'].replace(regEx, '')) : classNames
    
  return classNames
}