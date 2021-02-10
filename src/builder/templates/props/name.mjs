import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/name.mjs`,
  $source    : 'https://schema.org/name',
  title      : 'name',
  description: 'The name of the item.',
  oneOf      : [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/LString60.mjs` } ]
}