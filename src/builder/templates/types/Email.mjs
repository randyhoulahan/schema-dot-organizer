import { config } from '../../util/config.mjs'

const { typesId } = config

export default {
  $id        : `${typesId}/Email.mjs`,
  title      : 'Email address',
  description: 'email address, min length 3 char and max 254',
  format     : 'email',
  minLength  : 3,
  maxLength  : 254,
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ]
}