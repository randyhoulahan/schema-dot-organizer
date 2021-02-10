import { get$http } from '@houlagins/load-http'
import consolaGlobalInstance from 'consola';
import { normalize, buildClasses, createDataStore, buildEnumClasses, buildEnumMembers } from './graph-tools.mjs'

const dataTypes    = [ 'Text', 'Number', 'Integer', 'Date', 'True', 'False', 'DateTime', 'Date', 'Boolean', 'Time', 'CssSelectorType', 'PronounceableText', 'XPathType' ]

export class SDO {

  constructor(){ this.store = createDataStore(); }

  async loadGraph (data){
    try{
      const url = 'https://schema.org/version/latest/schemaorg-all-https.jsonld'
  
      await this.loadCustomGraph()

      if(data) return this.parseData(data, true)
  
      const $http = await get$http()
  
      console.time(`start load: ${url}`)
      return $http.get(url)
                    .then((res) => res.json())
                    .then((d) => this.parseData(d))
                    .then((d) => { console.timeEnd(`start load: ${url}`); return d})
    }
    catch(e){
      console.error(e)
      process.exit(-1)
    }
  }

  async loadCustomGraph (){
    try{
      const data = (await import('./builder/templates/vocab/schema-dot-organizer-vocab.mjs')).default
    
      this.parseData(data)
    }
    catch(e){
      console.error(e)
      process.exit(-1)
    }
  }

  async pushOnGraph (data) {
    this.parseData(data)
  }

  parseData(data, mapPropClasses = true){
    try{
      this.store.raw = this.store.raw? new Set([ ...this.store.raw, ...data['@graph'] ]) : new Set([ ...data['@graph'] ])

      this.buildGraph(mapPropClasses)
    }
    catch(e){
      console.error(e)
      process.exit(-1)
    }
  }

  buildGraph (mapPropClasses = false){ // eslint-disable-line

    this.rawClasses.forEach(aClass =>  this.classes.set(aClass['rdfs:label']['@value'] || aClass['rdfs:label'], aClass))
    this.rawProps.forEach(aProp =>  this.store.props.set(aProp['rdfs:label']['@value'] || aProp['rdfs:label'], aProp))
  
    this.store.props   = normalize(this.props)
    this.store.classes = normalize(this.classes)

    this.store.classes      = buildClasses(this.classes, this.props, mapPropClasses)
    this.store.enumMembers  = buildEnumMembers(this.raw)
    this.store.enumClasses  = buildEnumClasses(this.classes, this.enumMembers)

    this.store.classes.forEach((aClass)=>{
      aClass._tree = this.getTree(aClass.name)
    })

    this.store.classes.forEach((aClass)=>{
      const equivalentClass = aClass['http://www.w3.org/2002/07/owl#equivalentClass']

      if(!equivalentClass) return 
      
      aClass.equivalentClass = Array.isArray(equivalentClass)? new Set(equivalentClass) : new Set([equivalentClass])
    })

    this.getClassNames()
    this.getPropNames()

    this.store.loaded = true
  }

  getClassNames (){
    for (const [ name ] of this.store.classes)
      this.store.classNames.add(name)
  
    return this.store.classNames
  }

  getPropNames(){
    for (const [ name ] of this.store.props)
      this.store.propNames.add(name)

    return this.store.propNames
  }

  getClass(name) { return this.store.classes.get(name) }

  getPropsWithClassesFromClass(name){
    return (this.getClass(name)|| {})._propsWithClasses
  }

  makeTree(aClassName, keyPrefix=''){
    if(isTreeRepeating(keyPrefix)) return []

  
    const map = this.getPropsWithClassesFromClass(aClassName)

    if(!map) return []

    const classFlatMap = []
  
    for (const [ key, classNames ] of map){
      classFlatMap.push(`${keyPrefix}${key}`)
  
      for (const className of classNames)
        classFlatMap.push(this.makeTree(className, `${keyPrefix}${key}.`))
    }

    return classFlatMap.flat()
  }

  getTree(aClassName, knownArrays =[]){
    const treeSet = new Set()
    for (const propPath of this.makeTree(aClassName)){
      let isArray = false

      for (const knownArray of knownArrays) 
        if(propPath.startsWith(`${knownArray}.`)) isArray = true
          
      if(!isArray) treeSet.add(propPath)
    }
    return treeSet
  }

  getClassByAtId (atId) {
    for (const aClass of this.store.classes || {})
      if(aClass['@id'] === atId) return aClass

    return null
  }

  getEnumClass (name){
    return this.store.enumClasses.get(name)
  }

  getEnumMember (name){
    return this.store.enumMembers.get(name)
  }

  getProp (name){
    return this.store.props.get(name)
  }

  metaIsA (name) {
    if(!this.store.loaded) return undefined
    if(dataTypes.includes(name)) return 'Data'
    if(this.getEnumMember(name)) return 'EnumMember'
    if(this.getEnumClass(name)) return 'Enum'
    if(this.getClass(name) || name==='Email') return 'Class'
    
    if(this.getProp(name))  return 'Property'
  
    return undefined
  }

  isClass(name){
    return ['Class', 'Enum'].includes(this.metaIsA(name))
  }

  getChildrenNames(className){
    const names  = []
    const { '_children': children } = this.getClass(className) || {}
  
    if(!children) return names

    for (const [name] of children.entries()) {
      names.push(name)
      names.push(...this.getChildrenNames(name))
    }
    return names
  }

  getRawClass(className){
    const names  = this.rawClasses.filter((item) => item['rdfs:label']===className) || []
    return names[0]
  }

  isChild(className, childName){
    const aClass = this.getClass(className)

    if(!aClass) throw new Error(`SDO.isChild: ${className} not found`)

    if(!aClass._allChildren || !aClass._allChildren.size) return false

    return aClass._allChildren.has(childName)
  }

  getRawObj(name){
    const names  = this.raw.filter((item) => item['rdfs:label'] === name) || []
    return names[0]
  }

  getRawEnumMember(className){
    const names  = this.rawEnumMembers.filter((item) => item['rdfs:label']===className) || []
    return names[0]
  }

  get propNames(){
    if(this.store.propNames.size) return this.store.propNames
    return this.getPropNames()
  }

  get classNames(){
    if(this.store.classNames.size) return this.store.classNames
    return this.getClassNames()
  }

  get classes(){ return this.store.classes }

  get props(){ return this.store.props }

  get enumMembers(){ return this.store.enumMembers }

  get enumClasses(){ return this.store.enumClasses }

  get rawClasses(){ return this.store.raw.filter((item) => item['@type']==='rdfs:Class') }

  get rawProps(){ return this.store.raw.filter((item) => item['@type']==='rdf:Property') }

  get rawEnumMembers(){return this.store.raw.filter((aClass) => ![ 'rdfs:Class', 'rdf:Property' ].includes(aClass['@type']))}

  get raw(){ return this.store.raw }

  debug() { return console.log(this.store) }
}


function isTreeRepeating(key){
  const splitKey = key.split('.') || []
  const length = splitKey.length 

  if(length >= 3) return true

  const last       = splitKey[length-2]
  const secondLast = splitKey[length-3]
  const thirdLast = splitKey[length-3]

  if(last && secondLast && last.length === secondLast.length && last === secondLast) return true
  if(last && thirdLast && last.length === thirdLast.length && last === thirdLast) return true

  return false

}