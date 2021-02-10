import { config } from '../../util/config.mjs'

const { typesId } = config

export default  {
  $id        : `${typesId}/LangString60.mjs`,
  title      : 'LangString60',
  description: 'Language string in an LString object with the recommended name/title size from google based on indexation and mobile view.',
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ],
  minLength  : 1,
  maxLength  : 200
}