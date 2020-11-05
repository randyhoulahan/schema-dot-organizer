import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/alternateName.mjs`,
  $source    : 'http://schema.org/alternateName',
  title      : 'Alternate Name',
  description: 'An alternative longer name of the item.',
  oneOf      : [ { $ref: `${typesId}/LString160.mjs` } ]
}