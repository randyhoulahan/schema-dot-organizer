import fs   from 'fs-extra'
import path from 'path'

import { getConfig, config  } from './util/config.mjs'
import { metaIsA } from '../index.mjs'


export const createdProps = new Set([ '_id', 'url', 'sameAs', 'name', 'additionalType', 'alternateName', 'context', 'description', 'identifier', 'mainEntityOfPage', 'image', 'disambiguatingDescription' ])

export const createProp = async (prop) => {
  
  const { propsWritePath } = await getConfig()

  if(createdProps.has(prop.name)) return

  fs.writeFileSync(`${propsWritePath}/${prop.name}.mjs`, `export default ${propTemplate(prop)}`)

  createdProps.add(prop.name)
}

function propTemplate  (prop){
  const { propsId, knownArrays } = config
  const { name, description }      = prop
  const   rangeIncludes            = prop['https://schema.org/rangeIncludes']
  const   ranges                   = []

  if(!rangeIncludes) throw new Error('No rangeIncludes found on property')
  
  if(Array.isArray(rangeIncludes))
    for (const range of rangeIncludes)
      ranges.push(`{ $ref: ${extractRange(range)} }`)
    
  else ranges.push(`{ $ref: ${extractRange(rangeIncludes)} }`)

  const arrayPortion = `  
  type           : 'array',
  minItems       : 1,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    anyOf: [ ${ranges.join(', ')} ]
  }`

  const defaultPortion = `
  oneOf : [ ${ranges.join(', ')} ]
  `

  return `{
  $id            : '${propsId}/${name}.mjs',
  $source        : 'https://schema.org/${name}',
  name           : '${name}',
  title          : '${name}',
  description    : '${description}',
  ${knownArrays.includes(name)? arrayPortion : defaultPortion}
}
`
}

// function hasClassesOrTypes (rangeIncludes){
//   const has = { hasClasses: false, hasTypes: false }

//   if(Array.isArray(rangeIncludes)){
//     for (const range of rangeIncludes){
//       const rangeItemName = range['@id'].replace('https://schema.org/', '')

//       if(metaIsA(rangeItemName) === 'Class') has.hasClasses = true
//       if(metaIsA(rangeItemName) === 'Data') has.hasTypes = true
//     }
//   }
//   else {
//     const rangeItemName = rangeIncludes['@id'].replace('https://schema.org/', '')

//     if(metaIsA(rangeItemName) === 'Class') has.hasClasses = true
//     if(metaIsA(rangeItemName) === 'Data') has.hasTypes = true
//   }

//   return has
// }

function extractRange(range){
  const { typesId, classesId, enumClassesId } = config
  const   rangeItemName        = range['@id'].replace('https://schema.org/', '')
  const   metaType             = metaIsA(rangeItemName)

  if(metaType  === 'Data') return `'${typesId}/${rangeItemName}.mjs'`
  if(metaType  === 'Class') return `'${classesId}/${rangeItemName}.mjs'`
  if(metaType  === 'Enum') return `'${enumClassesId}/${rangeItemName}.mjs'`
}