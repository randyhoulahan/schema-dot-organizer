export const schemaIdRoot  = 'https://cdn.cbd.int/@houlagins/schema-dot-organizer/dist'
export const typesId       = `${schemaIdRoot}/types`
export const enumClassesId = `${schemaIdRoot}/enumClasses`
export const enumMembersId = `${schemaIdRoot}/enumMembers`
export const propsId       = `${schemaIdRoot}/props`
export const classesId     = `${schemaIdRoot}/classes`
export const customVocabId = `${schemaIdRoot}/vocab`

export const schemaWritePath      = '/src/schema'
export const typesWritePath       = `${schemaWritePath}/types`
export const propsWritePath       = `${schemaWritePath}/props`
export const enumClassesWritePath = `${schemaWritePath}/enumClasses`
export const enumMembersWritePath = `${schemaWritePath}/enumMembers`
export const classesWritePath     = `${schemaWritePath}/classes`

export const knownArrays   = [ 'image', 'sameAs', 'member', 'memberOf', 'additionalType', 'containsPlace', 'containedInPlace', 'hasMap', 'parentOrganization', 'subOrganization', 'location', 'mainEntityOfPage','potentialAction', 'subjectOf', 'recipient' ]
export const lstrings      = [ 'name', 'alternateName', 'description', 'disambiguatingDescription', 'text', 'caption' ]

export const anyOf        = [ { required: [ 'name' ] },          { required: [ '_id' ] }, { required: [ '@value' ] } ]
export const requiredType = [ { required: [ 'name', '@type' ] }, { required: [ '_id' ] }, { required: [ '@value' ] } ]

const noDefaultType = true

export const classes = {
  Event: { anyOf },
  PropertyValue: { props: [ 'propertyID', 'value' ], anyOf },
  URL          : { props: [ '@context', 'identifier', '_id', '@value' ], anyOf },
  Email        : { props: [ '@context', 'identifier', '_id', '@value' ], anyOf },
  Thing        : { props: [ '@context', '@type', '_id', 'identifier', 'name', 'alternateName', 'description', 'url', 'sameAs', 'image', 'mainEntityOfPage', 'additionalType', 'disambiguatingDescription', 'subjectOf', 'potentialAction'], anyOf: requiredType, noDefaultType },
  QuantitativeValue:  { props: [ 'value' ], anyOf:[ { required: [ 'value' ] },          { required: [ '_id' ] }, { required: [ '@value' ] } ] },
  CreativeWork : { props: [ 'text'] ,anyOf },
  AboutPage    : { props: [ 'text', 'isFamilyFriendly', 'mainEntity', 'lastReviewed', 'primaryImageOfPage', 'relatedLink', 'about', 'author', 'dateCreated', 'dateModified', 'editor', 'inLanguage', 'isFamilyFriendly', 'spatialCoverage', 'version' ], anyOf: requiredType, noDefaultType },
  MediaObject  : { props: [ 'thumbnail', 'encodingFormat', 'contentUrl', 'uploadDate', 'width', 'height', 'contentSize', 'isFamilyFriendly' ], anyOf: requiredType, noDefaultType },
  Organization : { props: [ 'logo', 'member', 'memberOf', 'areaServed', 'parentOrganization', 'subOrganization'    ], anyOf },
  Person       : { props: [ 'jobTitle', 'familyName', 'additionalName', 'givenName', 'telephone', 'email', 'nationality' ], anyOf },
  Place        : { props: [ 'address','containsPlace', 'containedInPlace', 'logo', 'hasMap' ], anyOf }
}

export const mongo = true

export default { customVocabId, anyOf, requiredType, knownArrays, classes, schemaIdRoot, enumMembersId, enumClassesId, typesId,  propsId, classesId, schemaWritePath, typesWritePath, propsWritePath, classesWritePath, enumClassesWritePath, enumMembersWritePath, mongo }