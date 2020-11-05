import { config } from '../../util/config.mjs'

const { typesId } = config

const langString = { $ref: `${typesId}/LangString60.mjs` }

export default  {
  $id        : `${typesId}/LString60.mjs`,
  title      : 'LString60',
  description: 'SCBD lang mapped string object max length 60 chars',
  type       : 'object',
  properties : {
    ar: langString,
    en: langString,
    es: langString,
    fr: langString,
    ru: langString,
    zh: langString
  },
  additionalProperties: false
}