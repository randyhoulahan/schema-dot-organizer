import   fs                  from 'fs-extra'
import   path                from 'path'

import { getConfig, config } from './util/config.mjs'
import { getEnumClass  } from '../index.mjs'
import { createEnumMember        } from './enumMember.mjs'


export const enumClassMap = new Map()

export const createdEnumClasses = () => new Set(enumClassMap.keys())


export const createEnumClass = async (className) => {
  const { enumClassesWritePath } = await getConfig()

  if(createdEnumClasses().has(className)) return
  fs.mkdirp(enumClassesWritePath)
  fs.writeFileSync(`${enumClassesWritePath}/${className}.mjs`, `export default ${await enumClassTemplate(className)}` )

  const renderedClass = (await import(`${enumClassesWritePath}/${className}.mjs`)).default;
  
  enumClassMap.set(className, renderedClass)

}

async function enumClassTemplate(className){
  const { enumMembersId, enumClassesId } = config
  const { name, description, members }   = getEnumClass(className)
  const   memberArr                      = []

  for (const [ memberName, member ] of members){
    memberArr.push(`  { $ref: '${enumMembersId}/${memberName}.mjs' },\n`)

    await createEnumMember(member)
  }

  const template = `{
  $id                 : '${enumClassesId}/${name}.mjs',
  $source             : 'https://schema.org/${name}',
  title               : '${name}',
  description         : '${description}',
  type                : 'string',
  anyOf: [
    ${memberArr.join('')}]
}`

  return template
}