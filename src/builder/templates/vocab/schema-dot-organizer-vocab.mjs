const schemaIdRoot  = 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist'

export default {
  '@id'     : `${schemaIdRoot}/vocab/schema-dot-organizer-vocab.mjs`,
  '@context': {
    '@version' : 0.1,
    '@language': 'en',
    rdf        : 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    rdfs       : 'http://www.w3.org/2000/01/rdf-schema#'
  },
  '@graph': [
    {
      '@id'                              : `${schemaIdRoot}/vocab/LString60.mjs`,
      '@type'                            : 'rdfs:Class',
      'rdfs:comment'                     : 'the SCBD\'s language string (language map string) 160 char limit as per googles suggestion for descriptions',
      'rdfs:label'                       : 'LString60',
      'https://schema.org/domainIncludes': [ { '@id': 'https://schema.org/name' } ],
      'rdfs:subClassOf': {
        '@id'         : `${schemaIdRoot}/vocab/LString.mjs`
      }
    },
    {
      '@id'                              : `${schemaIdRoot}/vocab/LString160.mjs`,
      '@type'                            : 'rdfs:Class',
      'rdfs:comment'                     : 'the SCBD\'s language string (language map string)  160 char limit as per googles suggestion for descriptions ',
      'rdfs:label'                       : 'LString160',
      'https://schema.org/domainIncludes': [ { '@id': 'https://schema.org/alternateName' }, { '@id': 'https://schema.org/description' } ],
      'rdfs:subClassOf': {
        '@id'         : `${schemaIdRoot}/vocab/LString.mjs`
      }
    },
    {
      '@id'                              : `${schemaIdRoot}/vocab/LString5000.mjs`,
      '@type'                            : 'rdfs:Class',
      'rdfs:comment'                     : 'the SCBD\'s language string (language map string)  600 char limit as per googles suggestion for descriptions ',
      'rdfs:label'                       : 'LString5000',
      'https://schema.org/domainIncludes': [ { '@id': 'https://schema.org/disambiguatingDescription' } ],
      'rdfs:subClassOf': {
        '@id'         : `${schemaIdRoot}/vocab/LString.mjs`
      }
    },
    {
      '@id'                              : `${schemaIdRoot}/vocab/LString.mjs`,
      '@type'                            : 'rdfs:Class',
      'rdfs:comment'                     : 'A pledge or undertaking made by an Actor towards an environmental target  (language map string)',
      'rdfs:label'                       : 'LString',
      'https://schema.org/domainIncludes': [ { '@id': 'https://schema.org/text' } ]
    }
  ]
}

// {
//   '@id'         : `${schemaIdRoot}/vocab/LangString.mjs`,
//   '@type'       : 'rdf:Property',
//   'rdfs:comment': 'Language string in an LString object with very large size to accommodate pages of text 5000char limit',
//   'rdfs:label'  : 'LangString'
//   // 'https://schema.org/domainIncludes': [ { '@id': `${schemaIdRoot}/vocab/LString.mjs` } ]
// },
// {
//   '@id'         : `${schemaIdRoot}/vocab/LangString60.mjs`,
//   '@type'       : 'rdf:Property',
//   'rdfs:comment': 'Language string in an LString object with very large size to accommodate pages of text 60 char limit',
//   'rdfs:label'  : 'LangString60'
//   // 'https://schema.org/domainIncludes': [ { '@id': `${schemaIdRoot}/vocab/LString60.mjs` } ]
// },
// {
//   '@id'         : `${schemaIdRoot}/vocab/LangString160.mjs`,
//   '@type'       : 'rdf:Property',
//   'rdfs:comment': 'Language string in an LString object with very large size to accommodate pages of text 160 char limit',
//   'rdfs:label'  : 'LangString160'
//   // 'https://schema.org/domainIncludes': [ { '@id': `${schemaIdRoot}/vocab/LString160.mjs` } ]
// }