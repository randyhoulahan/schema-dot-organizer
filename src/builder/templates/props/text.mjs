import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/text.mjs`,
  $source    : 'https://schema.org/text',
  title      : 'text',
  description: 'The text of the item.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString.mjs` } ]
}