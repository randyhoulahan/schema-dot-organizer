import { config } from '../../util/config.mjs'

const { typesId } = config

const langString = { $ref: `${typesId}/LangString160.mjs` }

export default  {
  $id        : `${typesId}/LString160.mjs`,
  title      : 'LString160',
  description: 'SCBD lang mapped string object max length 160',
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