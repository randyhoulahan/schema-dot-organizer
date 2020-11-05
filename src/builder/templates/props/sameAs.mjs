import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id            : `${propsId}/sameAs.mjs`,
  $source        : 'http://schema.org/sameAs',
  title          : 'sameAs',
  description    : 'URL of a reference Web page that unambiguously indicates the item\'s identity. E.g. the URL of the item\'s Wikipedia page, Wikidata entry, or official website.',
  type           : 'array',
  minItems       : 1,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    anyOf: [ { $ref: `${typesId}/URL.mjs` } ]
  }
}
