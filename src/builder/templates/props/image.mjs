import { config } from '../../util/config.mjs'

const { typesId, propsId, classesId  } = config

export default {
  $id            : `${propsId}/image.mjs`,
  $source        : 'http://schema.org/image',
  title          : 'image',
  description    : 'An image of the item. This can be a <a class="localLink" href="https://schema.org/URL">URL</a> or a fully described <a class="localLink" href="https://schema.org/ImageObject">ImageObject</a>.',
  type           : 'array',
  minItems       : 1,
  maxItems       : 100,
  additionalItems: false,
  items          : {
    anyOf: [ { $ref: `${typesId}/URL.mjs` }, { $ref: `${classesId }/ImageObject.mjs` } ]
  }
}
