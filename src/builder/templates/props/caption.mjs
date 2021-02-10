import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/caption.mjs`,
  $source    : 'https://schema.org/caption',
  title      : 'caption',
  description: 'The caption of the item.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString160.mjs` } ]
}