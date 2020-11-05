import { config } from '../../util/config.mjs'

const { typesId } = config

export default {
  $id        : `${typesId}/HexId.mjs`,
  title      : 'Hex Id',
  description: 'Hex id is a 24 character hex number',
  pattern    : '^[0-9a-fA-F]{24}$',
  minLength  : 24,
  maxLength  : 24,
  allOf      : [ { $ref: `${typesId}/Text.mjs` } ]
}