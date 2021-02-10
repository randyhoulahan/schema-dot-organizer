import { config } from '../../util/config.mjs'

const { propsId, classesId } = config

export default {
  $id        : `${classesId}/Thing.mjs`,
  title      : 'Thing',
  description: 'The most generic type of item.',
  type       : 'object',
  properties : {
    _id             : { $ref: `${propsId}/_id.mjs` },
    '@context'      : { const: 'https://schema.org', default: 'https://schema.org' },
    '@type'         : { const: 'Thing', default: 'Thing' },
    identifier      : { $ref: `${propsId}/identifier.mjs` },
    name            : { $ref: `${propsId}/name.mjs` },
    alternateName   : { $ref: `${propsId}/alternateName.mjs` },
    description     : { $ref: `${propsId}/description.mjs` },
    disambiguatingDescription: { $ref: `${propsId}/disambiguatingDescription.mjs` },
    url             : { $ref: `${propsId}/url.mjs` },
    sameAs          : { $ref: `${propsId}/sameAs.mjs` },
    image           : { $ref: `${propsId}/image.mjs` },
    mainEntityOfPage: { $ref: `${propsId}/mainEntityOfPage.mjs` },
    additionalType  : { $ref: `${propsId}/additionalType.mjs` },
    potentialAction : { $ref: `${propsId}/potentialAction.mjs` },
    subjectOf : { $ref: `${propsId}/subjectOf.mjs` }
  },
  additionalProperties: false,
  required            : [ 'name' ]
}

