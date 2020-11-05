import   fs                  from 'fs-extra'
import   path                from 'path'

import { getConfig, config } from './util/config.mjs'
import { getClass, isClass, getEnumClass } from '../index.mjs'
import { createProp        } from './prop.mjs'
import { createEnumClass        } from './enumClass.mjs'

export const classMap = new Map()

export const createdClasses = () => new Set(classMap.keys())


export const createClass = async (className) => {
  const { classesWritePath } = await getConfig()

  await importThing()

  if(createdClasses().has(className)) return

  if(isEnumClassWithMembers(className)) {
    createEnumClass(className)
    return createParent(className)
  }
  fs.writeFileSync(`${classesWritePath}/${className}.mjs`, `export default ${await classTemplate(className)}` )

  const renderedClass = (await import(`${classesWritePath}/${className}.mjs`)).default;
  
  classMap.set(className, renderedClass)

  createParent(className)
  createPropertyClasses(className)
}

function isEnumClassWithMembers(className){
  const enumClass = getEnumClass(className)

  if(!enumClass) return false

  if(!enumClass.members) false

  if(enumClass.members && enumClass.members.size) return true

  return false
}

async function importThing(){
  //import   Thing               from './templates/classes/Thing.mjs'
  if(classMap.has('Thing')) return classMap.get('Thing')

  const Thing = (await import('./templates/classes/Thing.mjs')).default

  classMap.set('Thing', Thing)
}

async function createPropertyClasses(className){

  const { classes } = config
  const { _props } = getClass(className)
  
  for (const [ propName, prop ] of _props){
    if((!classes[className] || !classes[className].props.includes(propName))) continue

    const createClasses = getRangeIncludesClasses(prop)
    
    for (const className of createClasses)
      await createClass(className)
  }
}

function createParent(className){
  const { _parent } = getClass(className)

  if(!_parent) return

  const [ parentName ] = Array.from(_parent.keys())

  return createClass(parentName)
}

async function classTemplate (className){
  const { propsId, classesId, classes } = config
  const { name, description, _props, _parent } = getClass(className)
  const   propsArr                    = []

  const allOf = _parent? `\n  allOf               : [ { $ref: '${classesId}/${Array.from(_parent.keys())[0]}.mjs' } ],` : ''

  for (const [ propName, prop ] of _props){
    if((!classes[className] || !classes[className].props.includes(propName))) continue

    propsArr.push(`,\n    ${propName}     : { $ref: '${propsId}/${propName}.mjs' }`)

    await createProp(prop)
  }

  const template = `{
  $id                 : '${classesId}/${name}.mjs',
  $source             : 'https://schema.org/${name}',
  title               : '${name}',
  description         : '${description}',
  type                : 'object',
  additionalProperties: false,${allOf}
  properties          : {
    '@type'   : { const: '${name}', default: '${name}' }${propsArr.join('')}
  }
}`

  return template
}



function getRangeIncludesClasses(prop){
  const rangeIncludes = prop['https://schema.org/rangeIncludes']
  const classNames = []
  
  if(Array.isArray(rangeIncludes))
    for (const range of rangeIncludes){
      const rangePropName = range['@id'].replace('https://schema.org/', '')
      
      if(isClass(rangePropName)) classNames.push(rangePropName)
    }
  else isClass(rangeIncludes['@id'].replace('https://schema.org/', ''))? classNames.push(rangeIncludes['@id'].replace('https://schema.org/', '')) : classNames
    
  return classNames
}