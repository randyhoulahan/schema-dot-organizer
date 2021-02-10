import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default  {
  $id            : `${propsId}/identifier.mjs`,
  $source        : 'https://schema.org/identifier',
  title          : 'identifier',
  description    : 'The identifier property represents any kind of identifier for any kind of <a class="localLink" href="http://schema.org/Thing">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href="/docs/datamodel.html#identifierBg">background notes</a> for more details.',
  type           : 'array',
  minItems       : 0,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    title      : 'PropertyValue',
    description: 'A property-value pair, e.g. representing a feature of a product or place. Use the \'name\' property for the name of the property. If there is an additional human-readable version of the value, put that into the \'description\' property.<br/><br/>Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.',
    type       : 'object',
    properties : {
      '@context': { const: 'https://schema.org', default: 'https://schema.org' },
      '@type'   : { const: 'PropertyValue', default: 'PropertyValue' },
      propertyID: { $ref: `${typesId}/Text.mjs` },
      value     : {
        anyOf: [
          { $ref: `${typesId}/Text.mjs` },
          { $ref: `${typesId}/Number.mjs` },
          { $ref: `${typesId}/HexId.mjs` }
        ]
      }
    },
    additionalProperties: false,
    required            : [ 'propertyID', 'value' ]
  }
}