import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${classesId}/URL.mjs`,
  $source    : 'http://schema.org/URL',
  title      : 'URL',
  description: 'Data type: URL.',
  type       : 'object',
  properties : {
    '@context': { const: 'https://schema.org', default: 'https://schema.org' },
    '@type'   : { const: 'URL', default: 'URL' },
    '@value'  : {
      format   : 'uri',
      maxLength: 2083,
      minLength: 4,
      type     : 'string'
    },
    _id       : { $ref: `${propsId}/_id.mjs` },
    identifier: { $ref: `${propsId}/identifier.mjs` }
  },
  additionalProperties: false,
  required            : [ '@value' ]
}