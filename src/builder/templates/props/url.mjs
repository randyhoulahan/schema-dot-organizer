import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/url.mjs`,
  $source    : 'https://schema.org/url',
  title      : 'url',
  description: 'URL of the item.',
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
