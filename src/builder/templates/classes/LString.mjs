import { config } from '../../util/config.mjs'

const { classesId, propsId, typesId } = config

const langString  = { $ref: `${typesId}/LangString.mjs` }

export default  {
  $id        : `${classesId}/LString.mjs`,
  title      : 'LString',
  description: 'SCBD lang mapped string object',
  type       : 'object',
  properties : {
    '@context': { const: 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/vocab/schema-dot-organizer-vocab.mjs', default: 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/vocab/schema-dot-organizer-vocab.mjs' },
    '@type'   : { const: 'LString', default: 'LString' },
    _id       : { $ref: `${propsId}/_id.mjs` },
    identifier: { $ref: `${propsId}/identifier.mjs` },
    ar        : langString,
    en        : langString,
    es        : langString,
    fr        : langString,
    ru        : langString,
    zh        : langString
  },
  additionalProperties: false,
  anyOf               : [
    { required: [ 'en' ] },
    { required: [ 'ar' ] },
    { required: [ 'es' ] },
    { required: [ 'fr' ] },
    { required: [ 'ru' ] },
    { required: [ 'zh' ] }
  ]
}