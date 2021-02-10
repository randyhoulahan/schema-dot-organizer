const schemaIdRoot  = 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist'

export default {
  '@id'         : `${schemaIdRoot}/dist/vocab/LString160.mjs`,
  '@type'       : 'rdfs:Class',
  'rdfs:comment': 'the SCBD\'s language string (language map string)  160 char limit as per googles suggestion for descriptions ',
  'rdfs:label'  : 'LString160',
  'rdfs:subClassOf': {
    '@id'         : `${schemaIdRoot}/vocab/LString.mjs`
  }
}