import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/alternateName.mjs`,
  $source    : 'https://schema.org/alternateName',
  title      : 'Alternate Name',
  description: 'An alternative longer name of the item.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString160.mjs` } ]
}