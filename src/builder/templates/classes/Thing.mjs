import { config } from '../../util/config.mjs'

const { propsId, classesId } = config

export default {
  $id                 : `${classesId}/Thing.mjs`,
  $source             : 'http://schema.org/Thing',
  title               : 'Thing',
  description         : 'The most generic type of item.',
  type                : 'object',
  additionalProperties: false,
  properties          : {
    _id       : { $ref: `${propsId}/_id.mjs` },
    '@context': { $ref: `${propsId}/context.mjs` },
    '@type'   : { const: 'Thing', default: 'Thing' },
    
    identifier      : { $ref: `${propsId}/identifier.mjs` },
    name            : { $ref: `${propsId}/name.mjs` },
    alternateName   : { $ref: `${propsId}/alternateName.mjs` },
    description     : { $ref: `${propsId}/description.mjs` },
    url             : { $ref: `${propsId}/url.mjs` },
    sameAs          : { $ref: `${propsId}/sameAs.mjs` },
    image           : { $ref: `${propsId}/image.mjs` },
    mainEntityOfPage: { $ref: `${propsId}/mainEntityOfPage.mjs` },
    additionalType  : { $ref: `${propsId}/additionalType.mjs` }
  },
  required: [ 'identifier', 'name' ]
}

