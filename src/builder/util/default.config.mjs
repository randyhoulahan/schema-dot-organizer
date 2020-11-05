export const schemaIdRoot  = 'https://cdn.cbd.int/example@schema/dist'
export const typesId       = `${schemaIdRoot}/types`
export const enumClassesId  = `${schemaIdRoot}/enumClasses`
export const enumMembersId  = `${schemaIdRoot}/enumMembers`
export const propsId       = `${schemaIdRoot}/props`
export const classesId     = `${schemaIdRoot}/classes`

export const schemaWritePath    = '/src/schema'
export const typesWritePath     = `${schemaWritePath}/types`
export const propsWritePath     = `${schemaWritePath}/props`
export const enumClassesWritePath     = `${schemaWritePath}/enumClasses`
export const enumMembersWritePath     = `${schemaWritePath}/enumMembers`
export const classesWritePath   = `${schemaWritePath}/classes`

export const knownArrays = [ 'image', 'sameAs', 'additionalType' ]
export const lstrings    = [ 'name', 'description', 'text' ]

export const classes = {
  AboutPage    : { props: [ 'text', 'mainEntity', 'lastReviewed', 'primaryImageOfPage', 'relatedLink', 'about', 'author', 'dateCreated', 'dateModified', 'editor', 'inLanguage', 'isFamilyFriendly', 'spatialCoverage', 'version' ] },
  ImageObject  : { props: [ 'thumbnail', 'caption', 'contentUrl', 'uploadDate', 'width', 'height', 'contentSize' ] },
  Organization : { props: [ 'logo', 'member'   ] },
  Person       : { props: [ 'jobTitle', 'familyName', 'additionalName', 'givenName', 'telephone', 'email', 'nationality' ] },
  PropertyValue: { props: [ 'propertyID', 'value' ] }
}

export const mongo = true

export default { knownArrays, classes, schemaIdRoot, enumMembersId, enumClassesId, typesId,  propsId, classesId, schemaWritePath, typesWritePath, propsWritePath, classesWritePath, enumClassesWritePath, enumMembersWritePath, mongo }