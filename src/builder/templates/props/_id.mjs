import { config } from '../../util/config.mjs'

const { typesId, propsId } = config

export default {
  $id        : `${propsId}/_id.mjs`,
  title      : 'Mongo ID',
  description: 'Mongo ID as 24 character hex',
  oneOf      : [ { $ref: `${typesId}/HexId.mjs` } ]
}
