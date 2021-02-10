const schemaIdRoot  = 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist'

export default {
  '@id'                              : `${schemaIdRoot}/vocab/_id.mjs`,
  '@type'                            : 'rdf:Property',
  'rdfs:comment'                     : 'mongo default id prop',
  'rdfs:label'                       : '_id',
  'https://schema.org/domainIncludes': [
    { '@id': 'https://cdn.cbd.int/@action-agenda/schema/dist/vocab/Commitment.mjs' },
    { '@id': 'https://schema.org/Country' }
  ],
  'https://schema.org/rangeIncludes': {
    '@id': 'https://schema.org/Text'
  }
}


// 0: {@id: "https://schema.org/Person"}
// 1: {@id: "https://schema.org/ContactPoint"}
// 2: {@id: "https://schema.org/Organization"}
