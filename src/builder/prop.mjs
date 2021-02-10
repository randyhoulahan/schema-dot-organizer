
import consolaGlobalInstance from 'consola'
import fs   from 'fs-extra'
import consola from 'consola'
import { getConfig, config  } from './util/config.mjs'
// 'mainEntityOfPage','potentialAction', 'subjectOf',
export const createdProps = new Set([ '_id',  'email', 'url', 'sameAs', 'name', 'additionalType', 'alternateName', 'description', 'identifier',  'image', 'disambiguatingDescription', 'text', 'caption' ])

export const createProp = async (sdo, prop, classMap, aClass) => {
  
  // consola.error('aClass.name',aClass.name)
  const { propsWritePath } = await getConfig()

  if(createdProps.has(prop.name)) return

  fs.writeFileSync(`${propsWritePath}/${prop.name}.mjs`, `export default ${propTemplate(sdo, prop, classMap, aClass)}`)

  createdProps.add(prop.name)
}

export const createAllProps = async (sdo, classMap) => {
  const { classes } = config

  for (const [className, aClass] of classMap) {
    const { _props, _parents } = sdo.getClass(className) || {}

    

    if(!_props && !_parents) continue

    if( _parents &&  _parents.size)
      for (const [ parentName,parent ] of _parents)
        for (const [ propName, prop ] of parent._props || new Map()){


          if((!classes[parentName] || !classes[parentName].props || !classes[parentName].props.includes(propName))) continue
          else
            await createProp(sdo, prop, classMap, parent)
        }
    
    if(_props && _props.size)
    for (const [ propName, prop ] of _props || new Map()){
      
      if((!classes[className] || !classes[className].props || !classes[className].props.includes(propName))) continue
      else
        await createProp(sdo, prop, classMap, aClass)
    }
  }
}

function propHasClasses(propName, theClass ){
  const { _propsWithClasses= new Map() } = theClass

  const hasC = Array.from(_propsWithClasses.keys()).includes(propName)


  return hasC
}

function propTemplate  (sdo, prop, classMap, theClass){
  const hasClasses = propHasClasses(prop.name, sdo.getClass(theClass.name || theClass.title))

  const { propsId, knownArrays, classesId } = config
  const { name, description }      = prop
  const   rangeIncludes            = addChildrenToRanges(sdo, JSON.parse(JSON.stringify(prop['https://schema.org/rangeIncludes']||prop['schema:rangeIncludes'])), classMap)
  const   ranges                   = []

  if(!rangeIncludes) throw new Error('No rangeIncludes found on property')

  if(Array.isArray(rangeIncludes))
    for (const range of rangeIncludes)
      ranges.push(`{ $ref: ${extractRange(sdo, range, classMap)} }`)
  else ranges.push(`{ $ref: ${extractRange(sdo, rangeIncludes, classMap)} }`)

  const ref = hasClasses? `{ $ref: '${classesId}/Ref.mjs' },\n` : '';


  const arrayPortion = `  
  type           : 'array',
  minItems       : 1,
  maxItems       : 1000,
  additionalItems: false,
  items          : {
    anyOf: [ 
      ${ref}${ranges.join(',\n      ')}
    ]
  }`

  const defaultPortion = `
  anyOf : [ 
          ${ref}${ranges.join(',\n           ')} 
          ]
  `

  return `{
  $id            : '${propsId}/${name}.mjs',
  name           : '${name}',
  title          : '${name}',
  description    : '${description}',
  ${knownArrays.includes(name)? arrayPortion : defaultPortion}
}
`
}

function addChildrenToRanges(sdo, rangeIncludes, classMap){
  const regexLastPath  = new RegExp     ('[^\\\/]+$', 'gm'   )
  const classNameRegex = new RegExp     ('(.*)\.[^.]+$', 'gm')
  const classNames     =     Array .from(classMap.keys()     )

  // if(!rangeIncludes) return rangeIncludes
  const newRange = []
  if(Array.isArray(rangeIncludes))
    for (const range of rangeIncludes) {
      const className =  (range['@id'].replace('schema:', '')).match(regexLastPath)[0].match(classNameRegex)[0]

      if(range['@id']) newRange.push(range)
      if(!classNames.includes(className)) continue

      const children = (sdo.getClass(className) || {})._allChildren

      if(!children) continue

      for (const [name, aChild] of children) {
        if(!classNames.includes(name)) continue
        else if(aChild['@id']) newRange.push({ '@id': aChild['@id']})
      }
    }
  else{
    const className = (rangeIncludes['@id'].replace('schema:', '')).match(regexLastPath)[0].match(classNameRegex)[0]

    if(rangeIncludes['@id'])newRange.push(rangeIncludes)
    if(!classNames.includes(className)) return newRange

    const children = (sdo.getClass(className) || {})._allChildren

    if(!children) return newRange

    for (const [name, aChild] of children)
      if(!classNames.includes(name)) continue
      else if(aChild['@id']) newRange.push({ '@id': aChild['@id']})
  }
  return newRange.filter((v) => v)
}

function extractRange(sdo, range, classMap){
  const { typesId, classesId, enumClassesId } = config
  const   rangeItemName        = getClassName(range['@id'])
  const   metaType             = sdo.metaIsA(rangeItemName)
  const   classNames           = Array.from(classMap.keys())

  if(metaType  === 'Data') return `'${typesId}/${rangeItemName}.mjs'`
  if(metaType  === 'Class') return `'${classesId}/${rangeItemName}.mjs'`
  if(metaType  === 'Enum') return `'${enumClassesId}/${rangeItemName}.mjs'`
  if(classNames.includes(rangeItemName)) return `'${classesId}/${rangeItemName}.mjs'`
  
  throw new Error('extractRange: type of range not found')
}

function getClassName(url){
  if(url.includes('schema:')) return (url.replace('schema:', '')).replace('.mjs', '')
  
  const regexLastPath = new RegExp('[^\\\/]+$', 'gm')
  const classNameRegex = new RegExp('(.*)\.[^.]+$', 'gm')

  const withExt = url.match(regexLastPath)[0]

  return withExt.replace('.mjs', '')
}