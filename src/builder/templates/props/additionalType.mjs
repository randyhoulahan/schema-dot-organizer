import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id            : `${propsId}/additionalType.mjs`,
  $source        : 'http://schema.org/additionalType',
  title          : 'additionalType',
  description    : 'An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the \'typeof\' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.',
  type           : 'array',
  minItems       : 1,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    anyOf: [ { $ref: `${typesId}/URL.mjs` } ]
  }
}
