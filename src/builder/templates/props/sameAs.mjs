import { config } from '../../util/config.mjs'

const { typesId, propsId, classesId } = config

export default {
  $id        : `${propsId}/sameAs.mjs`,
  $source    : 'https://schema.org/sameAs',
  title      : 'sameAs',
  description: 'URL of a reference Web page that unambiguously indicates the item\'s identity. E.g. the URL of the item\'s Wikipedia page, Wikidata entry, or official website.',
  oneOf      : [
    { $ref: `${classesId}/Ref.mjs` },
    { $ref: `${classesId}/URL.mjs` },
    {
      type           : 'array',
      minItems       : 1,
      maxItems       : 100,
      additionalItems: false,
      uniqueItems    : true,
      items          : {
        anyOf: [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/URL.mjs` } ]
      }
    }
  ]
}
