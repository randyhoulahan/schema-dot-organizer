import   fs                  from 'fs-extra'

import { getConfig       , config } from './util/config.mjs'
import { createEnumMember         } from './enumMember.mjs'


export const enumClassMap = new Map()

export const createdEnumClasses = () => new Set(enumClassMap.keys())


export const createEnumClass = async (sdo, className) => {
  const { enumClassesWritePath } = await getConfig()

  fs.mkdirpSync(enumClassesWritePath)
  
  if(createdEnumClasses().has(className)) return

  fs.ensureFileSync(`${enumClassesWritePath}/${className}.mjs`)
  fs.writeFileSync(`${enumClassesWritePath}/${className}.mjs`, `export default ${await enumClassTemplate(sdo, className)}` )

  const renderedClass = (await import(`${enumClassesWritePath}/${className}.mjs`)).default;
  
  enumClassMap.set(className, renderedClass)
  createParent(sdo, className)
}

function createParent(sdo, className){
  const { _parent } = sdo.getClass(className)

  if(!_parent) return

  const [ parentName ] = Array.from(_parent.keys())

  return createEnumClass(sdo, parentName)
}

async function enumClassTemplate(sdo, className){

  const { enumMembersId, enumClassesId } = config
  const { name, description, members }   = sdo.getEnumClass(className) || sdo.getClass(className)
  const   memberArr                      = []

  if(members){
    for (const [ memberName, member ] of members){
      memberArr.push(`  { $ref: '${enumMembersId}/${memberName}.mjs' },\n`)

      await createEnumMember(member)
    }
  }

  const anyOf = memberArr.length? `anyOf: [${memberArr.join('')}]` : ``
  const template = `{
  $id                 : '${enumClassesId}/${name}.mjs',
  $source             : 'https://schema.org/${name}',
  title               : '${name}',
  description         : '${description}',
  type                : 'string',
  ${anyOf}
}`

  return template
}