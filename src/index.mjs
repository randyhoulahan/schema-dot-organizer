import { get$http } from '@houlagins/load-http'

const classes      = new Map()
const props        = new Map()
const enums        = new Map()
const enumsMembers = new Map()
const graph        = new Map()

const dataTypes    = [ 'URL', 'Text', 'Number', 'Integer', 'Date', 'True', 'False', 'DateTime', 'Date', 'Boolean', 'Time', 'CssSelectorType', 'PronounceableText', 'XPathType' ]


const privateProps = {
  classes, props, graph, enums, enumsMembers,
  get raw(){ return JSON.parse(JSON.stringify(Array.from(this._raw))) },
  set raw(data){ this._raw = data }
}

export const classesSize      = () => privateProps.classes? privateProps.classes.size : 0
export const propsSize        = () => privateProps.props? privateProps.props.size : 0
export const propertiesSize   = () => privateProps.props? privateProps.props.size : 0
export const enumsSize        = () => privateProps.enums? privateProps.enums.size : 0
export const enumsMembersSize = () => privateProps.enumMembers? privateProps.enumMembers.size : 0

export const debug            = () => console.log(privateProps)

export async function loadGraph (data){
  console.time('start load')

  if(data) return parseData(data)

  const $http = await get$http()

  return $http.get('https://schema.org/version/latest/schemaorg-all-https.jsonld')
    .then((res) => res.json())
    .then((data) => parseData(data))
}

function parseData(data){
  privateProps.raw = new Set(data['@graph'])
  buildClasses()
  console.timeEnd('start load')
}
export const getClass = (name) => {
  const hasClass = privateProps.classes.get(name)

  if(hasClass) return hasClass

  return getRawItem('@id', `http://schema.org/${name}`)
}

export const getRawClass = (name) => {
  const hasClass = privateProps.raw.map(e => e['rdfs:label']===name? e: false).filter(a => a)

  if(hasClass) return hasClass

  return privateProps.raw
}

export const getEnumClass = (name) => {
  const hasClass = privateProps.enums.get(name)

  if(hasClass) return hasClass

  return getRawItem('@id', `http://schema.org/${name}`)
}
export const getEnum = (name) => {
  const hasClass = privateProps.enumMembers.get(name)

  if(hasClass) return hasClass

  return getRawItem('@id', `http://schema.org/${name}`)
}

export const getProp = (name) => {
  const hasProp = privateProps.props.get(name)

  if(hasProp) return hasProp
  return getRawItem('@id', `http://schema.org/${name}`)
}

export const isClass = (className) => dataTypes.includes(className)? false : !!getClass(className)

export const metaIsA = (name) => {
  if(!privateProps.loaded) return undefined
  if(dataTypes.includes(name)) return 'Data'
  if(getEnumClass(name)) return 'Enum'
  if(getClass(name)) return 'Class'
  
  if(getProp(name))  'Property'

  return undefined
}


function buildClasses (){ // eslint-disable-line
  const classes = privateProps.raw.filter((item) => item['@type']==='rdfs:Class')
  const props   = privateProps.raw.filter((item) => item['@type']==='rdf:Property')

  
  classes.forEach(aClass =>  privateProps.classes.set(aClass['rdfs:label'], aClass))
  props.forEach(aProp =>  privateProps.props.set(aProp['rdfs:label'], aProp))
  

  privateProps.props.forEach(normalizeKeys)
  privateProps.props.forEach(cleanDescription)
  privateProps.classes.forEach(normalizeKeys)
  privateProps.classes.forEach(cleanDescription)
  privateProps.classes.forEach(buildChildren)
  privateProps.classes.forEach(buildParent)
  privateProps.classes.forEach(buildParents)

  privateProps.classes.forEach(buildSelfProps)
  privateProps.classes.forEach(buildProps)

  privateProps.enumMembers = enumMembers()
  privateProps.enumMembers.forEach(cleanDescription)
  privateProps.enums = enumClasses()
  privateProps.enums.forEach(cleanDescription)

  privateProps.loaded = true


  //const notEnumMembers = [ 'rdfs:Class', 'rdf:Property' ]
}


function cleanDescription(aClass){
  const clean = aClass.description.replace(/'/g, '\\\'')
  
  aClass.description = clean.replace(/\n/g, '')
}

function enumClasses(){
  const enums = new Map()
  

  privateProps.classes.forEach((aClass, name) => {
    if(aClass['@id'].endsWith('//schema.org/Enumeration')) return enums.set(name, aClass)
    if(!aClass._parents) return
    if(!Array.from(aClass._parents.keys()).includes('Enumeration'))return
    
    const members = new Map()

    for (const e of privateProps.enumMembers.values())
      if(e['@type'] === aClass['@id']) members.set(e['rdfs:label'], e)
    
    aClass.members = members
    
    enums.set(name, aClass)
  })

  return enums
}

function enumMembers(){
  const notEnumMembers = [ 'rdfs:Class', 'rdf:Property' ]
  const enums = new Map()
  const enumMembersArray = privateProps.raw.filter((aClass) => !notEnumMembers.includes(aClass['@type']))

  enumMembersArray.forEach((e) => enums.set(e['rdfs:label'], e))
  
  for (const [enName,en] of enums) {
    normalizeKeys(en)
  }
  return enums
}

function getPropsFromParents(aClass){
  let propMaps = aClass._selfProps? new Map([ ...aClass._selfProps ]) : new Map()

  if(aClass._parents)
    for (const [ name, aParentClass ] of aClass._parents) // eslint-disable-line
      if(aParentClass._selfProps) propMaps = new Map([ ...propMaps, ...aParentClass._selfProps ])

  return propMaps.size? propMaps : undefined
}

function buildProps(aClass){
  const props = getPropsFromParents(aClass)

  if(props) aClass._props = props
}

function buildSelfProps(aClass){
  const propNameInClass   = '_selfProps'
  const aClassAndPropName = { aClass, propNameInClass }

  privateProps.props.forEach((value) => {
    const domains = value['https://schema.org/domainIncludes']

    if(!domains) return

    const { name        } = value
    const   propObject    = { name, value }

    if(domains['@id'] === aClass['@id'])
      return mapSet(aClassAndPropName, propObject)

    if(Array.isArray(domains))
      domains.forEach((domain) => {
        if(domain['@id'] === aClass['@id'])
          mapSet(aClassAndPropName, propObject)
      })
  })
}

function mapSet({ aClass, propNameInClass }, { name, value }){
  if(!aClass[propNameInClass]) aClass[propNameInClass] = new Map()

  aClass[propNameInClass].set(name, value)
}

function buildChildren(value){
  const children = new Map()


  privateProps.classes.forEach((child) => {
    if(!child['rdfs:subClassOf']) return
    if(child['rdfs:subClassOf']['@id'] === value['@id'])
      children.set(child.name, child)

    if(Array.isArray(child['rdfs:subClassOf']))
      child['rdfs:subClassOf'].forEach((aClass) => {
        if(aClass['@id'] === value['@id'])
          children.set(child.name, child)
      })
  })

  if(children.size)
    value._children = children
}

function buildParent(value, name){
  const { _children } = value

  if(!_children) return

  _children.forEach((child) => {
    if(!child._parent) child._parent = new Map()
    child._parent.set(name, value)
  })
}

function buildParents(value){
  const { _parent } = value

  if(!_parent) return

  const parentNames = getParentsNames(value)

  if(Array.isArray(parentNames) && parentNames.length) value._parents= new Map()
  
  for (const name of parentNames)
    value._parents.set(name, privateProps.classes.get(name))
}

function getParentsNames(value){
  const { _parent } = value

  if(!_parent) return []

  const parentName = Array.from(_parent.keys())

  return parentName.concat(getParentsNames(_parent.get(parentName[0])))
}

function normalizeKeys(value){
  value['@id'] = value['@id'].replace(/http:/gi, 'https:')
  for (const propName in value){
    if(propName.startsWith('http:')) value[propName.replace(/http:/gi, 'https:')] = normalizeAtIdValues(value[propName])//.replace(/http/gi, 'https')
    if(propName.includes('rdfs:subClassOf')) value[propName] = normalizeAtIdValues(value[propName])

    value.name   = value['@id'].replace(/(http|https):\/\/schema.org\//gi, '')
    value.description = value['rdfs:comment']
    value.identifier = createIdentifier(value)
  }
}

function normalizeAtIdValues(value){
  if(typeof value === String) return value.replace(/http:/gi, 'https:')

  const clone = JSON.parse(JSON.stringify(value))

  if(Array.isArray(clone))
    clone.forEach((atIdValue, index) => {
      if(typeof atIdValue === String) clone[index] = clone[index].replace(/http:/gi, 'https:')
      if(typeof atIdValue === 'object') atIdValue['@id'] = atIdValue['@id']? atIdValue['@id'].replace(/http:/gi, 'https:') : undefined
    })
  if(clone['@id']) clone['@id'] = clone['@id'].replace(/http:/gi, 'https:')

  return clone
}

function createIdentifier(aClass){
  const identifierSet = new Set()
  const name = 'schema.org'
  const value = aClass['@id']
  const identifier = aClass['@id']

  identifierSet.add({ name, value, identifier })

  return identifierSet
}

function getRawItem(propName, value){
  for (const item of privateProps.raw)
    if(item[propName] === value)
      return item
}


