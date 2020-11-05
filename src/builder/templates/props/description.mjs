import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/description.mjs`,
  $source    : 'http://schema.org/description',
  title      : 'Description',
  description: 'A description of the item.',
  allOf      : [ { $ref: `${typesId}/LString160.mjs` } ]
}