import fs   from 'fs-extra'

import { getConfig, config  } from './util/config.mjs'

export const createdEnumMembers = new Set()

export const createEnumMember = async (enumMember) => {
  
  const { enumMembersWritePath } = await getConfig()

  if(createdEnumMembers.has(enumMember.name)) return
  fs.mkdirp(enumMembersWritePath)
  fs.writeFileSync(`${enumMembersWritePath}/${enumMember.name}.mjs`, `export default ${enumMemberTemplate(enumMember)}`)

  createdEnumMembers.add(enumMember.name)
}

function enumMemberTemplate (enumMember){
  const { enumMemberId }         = config
  const { name, description }    = enumMember


  return `{
  $id            : '${enumMemberId}/${name}.mjs',
  $source        : 'https://schema.org/${name}',
  name           : '${name}',
  title          : '${name}',
  description    : '${description}',
  type           : 'string',
  const      : '${name}',
  default    : '${name}'
}
`
}