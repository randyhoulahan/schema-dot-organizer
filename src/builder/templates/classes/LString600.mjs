import { config } from '../../util/config.mjs'

const { propsId, classesId, typesId } = config

const langString = { $ref: `${typesId}/LangString600.mjs` }

export default  {
  $id        : `${classesId}/LString600.mjs`,
  title      : 'LString600',
  description: 'SCBD lang mapped string object max length 600',
  type       : 'object',
  properties : {
    '@context': { const: 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/vocab/schema-dot-organizer-vocab.mjs', default: 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/vocab/schema-dot-organizer-vocab.mjs' },
    '@type'   : { const: 'LString600', default: 'LString600' },
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