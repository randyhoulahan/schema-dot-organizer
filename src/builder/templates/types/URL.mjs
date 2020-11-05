import { config } from '../../util/config.mjs'

const { typesId } = config

export default {
  $id        : `${typesId}/URL.mjs`,
  $source    : 'http://schema.org/URL',
  title      : 'URL',
  description: 'Data type: URL.',
  format     : 'uri',
  maxLength  : 2083,
  minLength  : 4,
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ]
}
