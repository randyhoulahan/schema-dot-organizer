import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/name.mjs`,
  $source    : 'http://schema.org/name',
  title      : 'name',
  description: 'The name of the item.',
  oneOf      : [ { $ref: `${typesId}/LString60.mjs` } ]
}