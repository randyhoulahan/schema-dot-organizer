import { config } from '../../util/config.mjs'

const { typesId } = config

const langString  = { $ref: `${typesId}/LangString.mjs` }

export default  {
  $id        : `${typesId}/LString.mjs`,
  title      : 'LString',
  description: 'SCBD lang mapped string object',
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