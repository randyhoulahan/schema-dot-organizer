import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/description.mjs`,
  $source    : 'https://schema.org/description',
  title      : 'Description',
  description: 'A description of the item.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString160.mjs` } ]
}