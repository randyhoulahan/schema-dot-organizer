import { get$http } from '@houlagins/load-http'
import isPlainObject from  'lodash.isplainobject'

const classes      = new Map()
const props        = new Map()
const enums        = new Map()
const enumsMembers = new Map()
const graph        = new Map()
const classNames   = new Map()
const propNames    = new Map()

const dataTypes    = [ 'Text', 'Number', 'Integer', 'Date', 'True', 'False', 'DateTime', 'Date', 'Boolean', 'Time', 'CssSelectorType', 'PronounceableText', 'XPathType' ]

const privateProps = {
  classes, props, graph, enums, enumsMembers, classNames, propNames,
  get raw(){ return this._raw? JSON.parse(JSON.stringify(Array.from(this._raw))) : [] },
  set raw(data){ this._raw = data }
}

export const getClassesSize      = () => privateProps.classes? privateProps.classes.size : 0
export const getPropsSize        = () => privateProps.props? privateProps.props.size : 0
export const getPropertiesSize   = () => privateProps.props? privateProps.props.size : 0
export const getEnumsSize        = () => privateProps.enums? privateProps.enums.size : 0
export const getEnumsMembersSize = () => privateProps.enumMembers? privateProps.enumMembers.size : 0


export const  getClassNames = () => {
  if(privateProps.classNames && privateProps.classNames.size) return privateProps.classNames
  const classNames = new Set()

  for (const [ name, classObject ] of privateProps.classes)
    classNames.add(name)

  privateProps.classNames = classNames

  return classNames
}

export const  getPropNames = () => {
  if(privateProps.propNames && privateProps.propNames.size) return privateProps.propNames

  const propNames = new Set()

  for (const [ name, propObject ] of privateProps.props)
    propNames.add(name)

  privateProps.propNames = propNames
  return propNames
}

export const debug            = () => console.log(privateProps)

export const loadGraph = async (data) => {
  try{
    const url = 'https://schema.org/version/latest/schemaorg-all-https.jsonld'

    await loadCustomGraph()
    
    if(data) return parseData(data, true)

    const $http = await get$http()

    console.time(`start load: ${url}`)
    return $http.get(url)
                  .then((res) => res.json())
                  .then((d) => parseData(d))
                  .then((d) => { console.timeEnd(`start load: ${url}`); return d})
  }
  catch(e){
    console.error(e)
    process.exit(-1)
  }
}

export const pushOnGraph = async (data) => {
  parseData(data)
}

export const loadCustomGraph = async () => {
  const data = (await import('./builder/templates/vocab/schema-dot-organizer-vocab.mjs')).default

  parseData(data)
}

export const getClass = (name) => {
  const hasClass = privateProps.classes.get(name)

  if(hasClass) return hasClass

  return getRawItem('@id', `http://schema.org/${name}`)
}

export const getClassByAtId = (atId) => {
  const hasClass = privateProps.classes.get(name)

  for (const aClass of privateProps.classes || {})
    if(aClass['@id'] === atId) return aClass

  return null
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

export const hasClass = (className) => {
  const theClass = getClass(className)

  if(!theClass ) return

  const props = Array.from(theClass._props.keys())

  // for (const aProp of props) {
  //   for (const rangeIncludes of aProp['https://schema.org/rangeIncludes']) {
  //     if(isPlainObject(rangeIncludes))
  //   }
  //   console.log(getProp(aProp))
    //getClassByAtId
  //}
  return Array.from(theClass._props.keys())
}

export const getChildrenNames = (className) => {
  const names  = []
  const aClass = getClass(className)

  if(!aClass) return names

  const children = aClass._children
  
  if(!children) return names

  for (const [name, child] of children.entries()) {
    names.push(name)
    names.push(...getChildrenNames(name))
  }
  return names
}

function parseData(data, mapPropClasses = false){
  try{
    privateProps.raw = privateProps.raw? new Set([ ...privateProps.raw, ...data['@graph'] ]) : new Set([ ...data['@graph'] ])

    buildClasses(mapPropClasses)
  }
  catch(e){
    console.error(e)
    process.exit(-1)
  }
}

function buildClasses (mapPropClasses){ // eslint-disable-line
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

  privateProps.classes.forEach(buildProps(mapPropClasses))


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

function getClassPropsFromParents(propMaps){

  if(!propMaps) return undefined

  const propsWithClasses = new Map()

  if(propMaps.size)
    for (const [name, prop] of propMaps.entries()) {
      if(name === 'identifier') continue
      const classNames = getRangeIncludesClassNames(prop['https://schema.org/rangeIncludes'])

      if(classNames) propsWithClasses.set(name, classNames)

      if(name==='name'                     ) propsWithClasses.set('name'                      , ['LString60'  ])
      if(name==='alternateName'            ) propsWithClasses.set('alternateName'             , ['LString160' ])
      if(name==='description'              ) propsWithClasses.set('description'               , ['LString160' ])
      if(name==='disambiguatingDescription') propsWithClasses.set('disambiguatingDescription' , ['LString160' ])
      if(name==='text'                     ) propsWithClasses.set('text'                      , ['LString'    ])
      if(name==='url'                      ) propsWithClasses.set('url'                       , ['URL'        ])
      if(name==='email'                    ) propsWithClasses.set('email'                     , ['Email'      ])
    }

  return propsWithClasses.size? propsWithClasses : undefined
}

const regex = new RegExp('[^\\\/]+$', 'gm')

function getRangeIncludesClassNames(rangeIncludes){
  const classNames = []

  if(!rangeIncludes) return undefined

  if(Array.isArray(rangeIncludes))
    for (const aRange of rangeIncludes) {
      const aName = (aRange['@id'].match(regex))[0]

      if(!getClass(aName)) continue

      classNames.push(aName)
    }

  if(!rangeIncludes['@id']) return classNames

  const aName = (rangeIncludes['@id'].match(regex))[0]
  
  if(getClass(aName)) classNames.push(aName)

  return classNames.length? classNames : undefined 
}

function buildProps(mapPropClasses){
  return (aClass) =>{
    const props  = getPropsFromParents(aClass)
    
    if(props) aClass._props = props

    const nonSchemaOrgProps = new Map()

    if(props && props.size){
      for (const [name, aProp] of props.entries()) {
        if(aProp['@id'].includes('https://schema.org/')) continue

        nonSchemaOrgProps.set(name, aProp)
      }

      if(nonSchemaOrgProps.size) aClass._nonSchemaOrgProps = nonSchemaOrgProps
    }


    if(!mapPropClasses) return 

    const propsWithClasses = getClassPropsFromParents(props)

    if(propsWithClasses) aClass._propsWithClasses = propsWithClasses
    
  }
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

    value.name   = value['rdfs:label']//value['@id'].replace(/(http|https):\/\/schema.org\//gi, '')
    value.description = value['rdfs:comment']
    // value.identifier = createIdentifier(value)
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


