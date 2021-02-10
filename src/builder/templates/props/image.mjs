import { config } from '../../util/config.mjs'

const { propsId, classesId  } = config

export default {
  $id        : `${propsId}/image.mjs`,
  $source    : 'https://schema.org/image',
  title      : 'image',
  description: 'An image of the item. This can be a <a class="localLink" href="https://schema.org/URL">URL</a> or a fully described <a class="localLink" href="https://schema.org/ImageObject">ImageObject</a>.',
  oneOf      : [
    { $ref: `${classesId}/Ref.mjs` },
    { oneOf: [ { $ref: `${classesId}/URL.mjs` }, { $ref: `${classesId }/ImageObject.mjs` } ] },
    {
      type           : 'array',
      minItems       : 1,
      maxItems       : 100,
      additionalItems: false,
      uniqueItems    : true,
      items          : {
        anyOf: [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/URL.mjs` }, { $ref: `${classesId }/ImageObject.mjs` } ]
      }
    }
  ]
}
