import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${classesId}/Email.mjs`,
  $source    : 'http://schema.org/Email',
  title      : 'Email address',
  description: 'email address, min length 3 char and max 254',
  type       : 'object',
  properties : {
    '@context': { const: 'https://schema.org', default: 'https://schema.org' },
    '@type'   : { const: 'Email', default: 'Email' },
    '@value'  : {
      format   : 'email',
      minLength: 3,
      maxLength: 254,
      type     : 'string'
    },
    _id       : { $ref: `${propsId}/_id.mjs` },
    identifier: { $ref: `${propsId}/identifier.mjs` }
  },
  additionalProperties: false,
  required            : [ '@value' ]
}