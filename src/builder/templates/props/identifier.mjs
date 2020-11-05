import { config } from '../../util/config.mjs'

const { typesId, propsId, classesId } = config

export default  {
  $id            : `${propsId}/identifier.mjs`,
  $source        : 'http://schema.org/identifier',
  title          : 'identifier',
  description    : 'The identifier property represents any kind of identifier for any kind of <a class="localLink" href="http://schema.org/Thing">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href="/docs/datamodel.html#identifierBg">background notes</a> for more details.',
  type           : 'array',
  minItems       : 1,
  maxItems       : 50,
  additionalItems: false,
  items          : {
    anyOf: [
      {
        $ref: `${classesId }/PropertyValue.mjs`
      },
      {
        $ref: `${typesId}/URL.mjs`
      },
      {
        $ref: `${typesId}/Text.mjs`
      }
    ]
  }
}
