import { config } from '../../util/config.mjs'

const { typesId } = config

export default  {
  $id        : `${typesId}/LangString160.mjs`,
  title      : 'LangString160',
  description: 'Language string in an LString object with the recommended description size from google based on indexation and mobile view.',
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ],
  minLength  : 1,
  maxLength  : 160
}