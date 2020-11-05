import { config } from '../../util/config.mjs'

const { typesId } = config

export default  {
  $id        : `${typesId}/LangString.mjs`,
  title      : 'LangString',
  description: 'Language string in an LString object with very large size to accommodate pages of text',
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ],
  minLength  : 1,
  maxLength  : 5000
}