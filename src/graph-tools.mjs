import consola from 'consola'


export const normalize = (aMap) => {
  const cloneMap = new Map(JSON.parse(JSON.stringify(Array.from(aMap.entries()))))

  cloneMap.forEach(normalizeKeys)
  cloneMap.forEach(cleanDescription)

  return cloneMap
}

export const buildClasses = (aMap, props, mapPropClasses = true) => {
  const cloneMap = new Map(JSON.parse(JSON.stringify(Array.from(aMap.entries()))))

  cloneMap.forEach(buildChildren(cloneMap))
  cloneMap.forEach(buildParent)
  cloneMap.forEach(buildParents(cloneMap))
  cloneMap.forEach(buildSelfProps(props))
  cloneMap.forEach(buildProps(cloneMap, mapPropClasses))
  cloneMap.forEach(buildAllChildren)
  
  return cloneMap
}

function buildAllChildren(aClass){
  const allChildren = getAllChildren(aClass)

  if(!allChildren.size) return

  aClass._allChildren = allChildren
}

function getAllChildren({ _children: children }){
  let allChildren  = new Map()

  if(!children) return allChildren

  allChildren  = new Map([ ...children ])

  for (const [ , child ] of children)
    allChildren  = new Map([ ...allChildren, ...getAllChildren(child) ])
  
  return allChildren
}

export const createDataStore = () => {
  const classes      = new Map()
  const props        = new Map()
  const enumClasses  = new Map()
  const enumMembers  = new Map()
  const graph        = new Map()
  const classNames   = new Set()
  const propNames    = new Set()

  return {
    classes, props, graph, enumClasses, enumMembers, classNames, propNames,
    get raw(){ return this._raw? JSON.parse(JSON.stringify(Array.from(this._raw))) : [] },
    set raw(data){ this._raw = data }
  }
}

export const buildEnumMembers = (raw) => {
  const notEnumMembers = [ 'rdfs:Class', 'rdf:Property' ]
  const enums = new Map()
  const enumMembersArray = raw.filter((aClass) => !notEnumMembers.includes(aClass['@type']))

  enumMembersArray.forEach((e) => enums.set(e['rdfs:label'], e))
  
  for (const [ , en ] of enums)
    normalizeKeys(en)
  
  enums.forEach(cleanDescription)

  return enums
}

export const buildEnumClasses = (classes, enumMembers) => {
  const enums = new Map()

  if(!classes) return enums
  
  classes.forEach((aClass, name) => {
    if(aClass['@id'].endsWith('//schema.org/Enumeration')) return enums.set(name, aClass)
    if(!aClass._parents) return
    if(!Array.from(aClass._parents.keys()).includes('Enumeration'))return

    const members = new Map()

    for (const e of enumMembers.values())
      if(e['@type'] === aClass['@id']) members.set(e['rdfs:label'], e)
    
    aClass.members = members
    
    enums.set(name, aClass)
  })

  enums.forEach(cleanDescription)

  return enums
}

function buildChildren(classes){
  return (value) => {
    const children = new Map()

    classes.forEach((child) => {
      if(!child['rdfs:subClassOf']) return

      if(child['rdfs:subClassOf']['@id'] === value['@id'])
        children.set(child.name, child)

      if(Array.isArray(child['rdfs:subClassOf']))
        child['rdfs:subClassOf'].forEach((aClass) => {
          if(aClass['@id'] === value['@id'])
            children.set(child.name, child)
        })
    })

    if(children.size) value._children = children
  }
}

function buildParent(value, name){
  const { _children } = value

  if(!_children) return

  _children.forEach((child) => {
    // if(typeof child.name !== 'string')

    if(!child._parent)
      child._parent = new Map()
    child._parent.set(name, value)
  })
}

function buildParents(classes){
  return (value) => {
    const { _parent } = value

    if(!_parent) return

    const parentNames = getParentsNames(value)

    if(Array.isArray(parentNames) && parentNames.length) value._parents= new Map()
    
    for (const name of parentNames)
      value._parents.set(name, classes.get(name))
  }
}

function getParentsNames(value){
  const { _parent } = value

  if(!_parent || !_parent.keys) return []

  const parentName = Array.from(_parent.keys())

  return parentName.concat(getParentsNames(_parent.get(parentName[0])))
}

function buildSelfProps(props){
  return (aClass) => {
    const propNameInClass   = '_selfProps'
    const aClassAndPropName = { aClass, propNameInClass }

    props.forEach((value) => {
      const domains = value['https://schema.org/domainIncludes'] || value['schema:domainIncludes']


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
}

function buildProps(classes, mapPropClasses){
  return (aClass) => {
    const props  = getPropsFromParents(aClass)

    if(props) aClass._props = props

    const nonSchemaOrgProps = new Map()

    if(props && props.size){
      for (const [ name, aProp ] of props.entries()){
        if(aProp['@id'].includes('https://schema.org/') || aProp['@id'].includes('schema:')) continue

        nonSchemaOrgProps.set(name, aProp)
      }

      if(nonSchemaOrgProps.size) aClass._nonSchemaOrgProps = nonSchemaOrgProps
    }

    if(!mapPropClasses) return

    const propsWithClasses = getClassPropsFromParents(classes, props)

    if(propsWithClasses) aClass._propsWithClasses = propsWithClasses
  }
}

function mapSet({ aClass, propNameInClass }, { name, value }){
  if(!aClass[propNameInClass]) aClass[propNameInClass] = new Map()

  aClass[propNameInClass].set(name, value)
}

function normalizeKeys(value){
  value['@id'] = value['@id'].replace(/http:/gi, 'https:')
  for (const propName in value){
    if(propName.startsWith('http:')) value[propName.replace(/http:/gi, 'https:')] = normalizeAtIdValues(value[propName])//.replace(/http/gi, 'https')
    if(propName.includes('rdfs:subClassOf')) value[propName] = normalizeAtIdValues(value[propName])
  }
  value.name   = typeof value['rdfs:label'] === 'string'? value['rdfs:label'] : value['rdfs:label']['@valuye']
  //value['@id'].replace(/(http|https):\/\/schema.org\//gi, '')
  value.description = value['rdfs:comment']['@value'] || value['rdfs:comment']
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

function getClassPropsFromParents(classesMap, propMaps){  //eslint-disable-line
  if(!propMaps) return undefined

  const propsWithClasses = new Map()

  if(!propMaps.size) return undefined

  for (const [ name, prop ] of propMaps.entries()){
    if(name === 'identifier') continue
    const classNames = getRangeIncludesClassNames(classesMap, prop['https://schema.org/rangeIncludes']||prop['schema:rangeIncludes'])

    if(classNames) propsWithClasses.set(name, classNames)

    if(name==='name') propsWithClasses.set('name', [ 'LString60' ])
    if(name==='alternateName') propsWithClasses.set('alternateName', [ 'LString160' ])
    if(name==='description') propsWithClasses.set('description', [ 'LString160' ])
    if(name==='disambiguatingDescription') propsWithClasses.set('disambiguatingDescription', [ 'LString5000' ])
    if(name==='text') propsWithClasses.set('text', [ 'LString' ])
    if(name==='caption') propsWithClasses.set('caption', [ 'LString160' ])
    if(name==='url') propsWithClasses.set('url', [ 'URL' ])
    if(name==='email') propsWithClasses.set('email', [ 'Email' ])
  }

  return propsWithClasses
}

const regex = new RegExp('[^\\\/]+$', 'gm')

function getRangeIncludesClassNames(classesMap, rangeIncludes){
  const classNames = []

  if(!rangeIncludes) return undefined

  if(Array.isArray(rangeIncludes))
    for (const aRange of rangeIncludes){
      const aName = aRange['@id'].includes('schema:')? aRange['@id'].replace('schema:', '') : (aRange['@id'].match(regex))[0]

      if(!classesMap.has(aName)) continue

      classNames.push(aName)
    }

  if(!rangeIncludes['@id']) return classNames

  const aName = rangeIncludes['@id'].includes('schema:')? rangeIncludes['@id'].replace('schema:', ''): (rangeIncludes['@id'].match(regex))[0]
  
  if(classesMap.has(aName)) classNames.push(aName)

  return classNames.length? classNames : undefined
}

function getPropsFromParents(aClass){
  let propMaps = aClass._selfProps? new Map([ ...aClass._selfProps ]) : new Map()

  if(aClass._parents)
    for (const [, aParentClass ] of aClass._parents) // eslint-disable-line
      if(aParentClass._selfProps) propMaps = new Map([ ...(aParentClass._props || []), ...propMaps  ])

  return propMaps.size? propMaps : undefined
}

function cleanDescription(aClass){
  const clean = aClass.description.replace(/'/g, '\\\'')
  
  aClass.description = clean.replace(/\n/g, '')
}