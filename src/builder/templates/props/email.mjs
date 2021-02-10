import { config } from '../../util/config.mjs'

const { classesId, propsId } = config

export default {
  $id        : `${propsId}/email.mjs`,
  $source    : 'https://schema.org/email',
  title      : 'Email address',
  description: 'email address, min length 3 char and max 254',
  oneOf      : [
    { $ref: `${classesId}/Ref.mjs` },
    { $ref: `${classesId}/Email.mjs` },
    {
      type           : 'array',
      minItems       : 1,
      maxItems       : 100,
      additionalItems: false,
      uniqueItems    : true,
      items          : {
        anyOf: [ { $ref: `${classesId}/Ref.mjs` }, { $ref: `${classesId}/Email.mjs` } ]
      }
    }
  ]
}
