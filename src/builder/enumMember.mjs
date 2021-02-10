import fs   from 'fs-extra'

import { getConfig, config  } from './util/config.mjs'

export const createdEnumMembers = new Map()

export const createEnumMember = async (enumMember) => {
  const { name                 } = enumMember
  const { enumMembersWritePath } = await getConfig ()

  fs.mkdirpSync(enumMembersWritePath)

  if(createdEnumMembers.has(name)) return

  fs.ensureFileSync(`${enumMembersWritePath}/${name}.mjs`)
  fs.writeFileSync(`${enumMembersWritePath}/${name}.mjs`, `export default ${enumMemberTemplate(enumMember)}`)

  createdEnumMembers.set(name, enumMember)
}

function enumMemberTemplate (enumMember){
  const { enumMembersId              } = config
  const { name         , description } = enumMember

  return `{
  $id            : '${enumMembersId}/${name}.mjs',
  $source        : 'https://schema.org/${name}',
  name           : '${name}',
  title          : '${name}',
  description    : '${description}',
  type           : 'string',
  const      : '${name}'
}
`
}