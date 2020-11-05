import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/url.mjs`,
  $source    : 'http://schema.org/url',
  title      : 'url',
  description: 'URL of the item.',
  oneOf      : [ { $ref: `${typesId}/URL.mjs` } ]
}
