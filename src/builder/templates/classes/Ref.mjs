import { config } from '../../util/config.mjs'

const { classesId, propsId, typesId } = config  //to implement later - typesId

export default {
  $id        : `${classesId}/Ref.mjs`,
  title      : 'Ref',
  description: 'internal Ref',
  type       : 'object',
  properties : {
    '@context': {
      oneOf: [
        { type: 'string', format: 'uri', maxLength: 2083, minLength: 4 },
        {  type: 'object', maxProperties: 2, minProperties: 2 }
      ]
    },
    '@type': { type: 'string', maxLength: 80, minLength: 3 },
    _id    : { $ref: `${propsId}/_id.mjs` },
    identifier: {
      anyOf: [
        { $ref: `${typesId}/Number.mjs` },
        { $ref: `${typesId}/HexId.mjs` },
        { $ref: `${typesId}/Text.mjs` }
      ]
    }
  },
  maxProperties       : 3,
  minProperties       : 2,
  additionalProperties: false,
  anyOf               : [  { required: [ '@type', 'identifier'  ] }, { required: [ '@type', '_id' ] } ] // to implement later
}