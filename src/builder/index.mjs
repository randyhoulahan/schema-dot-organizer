import fs      from 'fs-extra'
import path    from 'path'
import beutify from 'js-beautify'
import lint    from 'eslint' 
import slug from 'limax'
import   isPlainObject  from 'lodash.isplainobject';

import { createdProps, createAllProps       } from './prop.mjs'
import { createdEnumClasses } from './enumClass.mjs'
import { createdEnumMembers } from './enumMember.mjs'

import { getConfig   , config                       } from './util/config.mjs'
import { createClass , createdClasses, classMap                        } from './class.mjs'
import { SDO } from '../index.mjs'

import consola from 'consola'

const { ESLint } = lint

const sdo = new SDO()
export const init = async () => {
  try{

    const  { schemaWritePath, classes, vocabReadPath, vocabName } = await getConfig()
    
    const allClasses = [ ...Object.keys(classes) ]

    await sdo.loadGraph()
    await new Promise(r => setTimeout(r, 2000))

    if(vocabReadPath && vocabName)
      await sdo.pushOnGraph((await import(`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`)).default)

    await forEachMjsFileInDir('./src/builder/templates/types', writeTypeFile())
    await forEachMjsFileInDir('./src/builder/templates/props', writePropFile())
    await forEachMjsFileInDir('./src/builder/templates/classes', writeClassFile())

    // await createClass(sdo, 'Country')
    for (const aClassName of allClasses)
      await createClass(sdo, aClassName)

    // for (const [aClassName] of classMap) {
    //   console.log(Object.keys(sdo.getAClass()))
    // }
    await createAllProps(sdo, classMap)

    await createGraphSnapShot(sdo)

    const eslint = new ESLint({ fix: true });

    const results = await eslint.lintFiles([`${schemaWritePath}/*/*.mjs`, `${schemaWritePath}/graph.mjs`]);

    await ESLint.outputFixes(results)

  }catch(e){
    consola.error(e)
  }
}

export const generate = async () => {
  try{
    const  { typesWritePath , propsWritePath, classesWritePath, schemaWritePath, enumMembersWritePath, enumClassesWritePath  } =  await getConfig()

    const objectsPromises = await Promise.all([getJsObjectsFromDir(typesWritePath), getJsObjectsFromDir(classesWritePath), getJsObjectsFromDir(propsWritePath), getJsObjectsFromDir(enumMembersWritePath ), getJsObjectsFromDir(enumClassesWritePath)])
    const data            = unique(([ ...objectsPromises[0], ...objectsPromises[1], ...objectsPromises[2], ...objectsPromises[3], ...objectsPromises[4] ].filter((x) => x)).filter(({ $id }) => $id))

    fs.writeFileSync(`${schemaWritePath}/json-schema.mjs`, beutify.js(`export default ${JSON.stringify(data)}`, { indent_size: 2, space_in_empty_paren: true }))
    writeIndex()
    
    const eslint = new ESLint({ fix: true });

    const results = await eslint.lintFiles([`${schemaWritePath}/index.mjs`, `${schemaWritePath}/json-schema.mjs`, `${schemaWritePath}/graph.mjs`]);

    await ESLint.outputFixes(results)
  }catch(e){
    console.error(e)
  }
}

function unique(array){
  return Array.from(new Set(array.map((el)=>{ if(isPlainObject(el)) return JSON.stringify(el); else return el}))).map(jsonParse)
}
export const generateCustomVocab = async () => {
  try{

    const  { customVocabId, vocabReadPath, vocabName, vocabAbbreviation } =  await getConfig()

    if(!vocabName) return 

    fs.writeFileSync(`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`,'')

    const data = (await getJsObjectsFromDir(vocabReadPath)).filter((x) => x)

    const template = `
    { '@id' : '${customVocabId}/${slug(vocabName)}-vocab.mjs',
      '@context': {
        '@version': 0.1,
        '@language': 'en',
        ${vocabAbbreviation.toLowerCase()}: '${customVocabId}/${slug(vocabName)}-vocab.mjs',
        rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#', 
        rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
        schema: 'https://schema.org/'
      },
      '@graph'  : ${JSON.stringify(data)}
    }
    `
 
    fs.writeFileSync(`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`, beutify.js(`export default ${template}`, { indent_size: 2, space_in_empty_paren: true }))

    const eslint = new ESLint({ fix: true });

    const results = await eslint.lintFiles([`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`]);

    await ESLint.outputFixes(results)
  }catch(e){
    console.error(e)
  }
}

async function createGraphSnapShot(sdo){
  const  { schemaWritePath, customVocabId, vocabReadPath, vocabName } = config

  const hasCustomVocab   = vocabReadPath && vocabName
  const snap             = new Map()
  const graphMemberNames = new Set (unique([...createdClasses(), ...createdProps, ...createdEnumClasses()]))
  

  const customVocab = hasCustomVocab? (await import(`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`)).default['@graph'] : []

  for (const item of graphMemberNames ){
    if(!sdo.getRawObj(item) ) continue

    snap.set(item, sdo.getRawObj(item))
    
    if(sdo.getEnumClass(item) && sdo.getEnumClass(item).members){
      for (const enumMemberName of sdo.getEnumClass(item).members.keys())
        snap.set(enumMemberName, sdo.getRawEnumMember(enumMemberName))
    }
  }

  fs.writeFileSync(`${schemaWritePath}/graph.mjs`, beutify.js(`export default { '@graph' : ${JSON.stringify([...snap.values(), ...customVocab])} }`, { indent_size: 2, space_in_empty_paren: true }))
}

async function getJsObjectsFromDir(path) {
  const objects   = []
  const getAClass = async (fileObj) => objects.push(await importObjectsFromMjsFiles(fileObj))

  await forEachMjsFileInDir(path,getAClass)

  return objects
}

async function forEachMjsFileInDir (dir, callback){ // eslint-disable-line
  const dirFd =  await fs.promises.opendir(dir) 

  for await (const dirent of dirFd){
    const fileName = path.resolve(dir, dirent.name)

    if(dirent.isDirectory())continue

    const fileObj  = path.parse(fileName)

    if(fileObj.ext !=='.mjs') continue

    await callback(fileObj)
  }
}

async function importObjectsFromMjsFiles(fileObj){
  const fileModule = (await import(`${fileObj.dir}/${fileObj.base}`)).default;

  return fileModule
}


function writeFileToDestination(destinationPath){ 
    return async  (fileObj)=>{

    fs.mkdirpSync(destinationPath)

    const fileModule = (await import(`${fileObj.dir}/${fileObj.base}`)).default;
    
    fs.ensureFileSync(`${destinationPath}/${fileObj.base}`)
    fs.writeFileSync(`${destinationPath}/${fileObj.base}`, beutify.js(`export default ${JSON.stringify(fileModule)}`, { indent_size: 2, space_in_empty_paren: true }))
  }
}

function writeTypeFile(){
  const { typesWritePath } = config

  return writeFileToDestination(typesWritePath)
}

function writePropFile(){
  const { propsWritePath } = config

  return writeFileToDestination(propsWritePath)
}

function writeClassFile(){
  const { classesWritePath } = config

  return writeFileToDestination(classesWritePath)
}


function writeIndex(){
  const  { schemaWritePath, customVocabId, vocabReadPath, vocabName } = config

  const vocabImport    = `import vocab      from '${vocabReadPath.replace(schemaWritePath, '.')}/${slug(vocabName)}-vocab.mjs'\n`
  const vocabExport    = `export const getVocab = () => vocab`
  const hasCustomVocab = fs.existsSync(`${vocabReadPath}/${slug(vocabName)}-vocab.mjs`) && (vocabName != 'SDO')

  const indexTemplate = `import jsonSchema from './json-schema.mjs'
  import graph      from './graph.mjs'
  ${hasCustomVocab? vocabImport : ''}
  export const getJsonSchema = () => jsonSchema
  export const getGraph      = () => graph
  ${hasCustomVocab? vocabExport : ''}
  export const getSdoConfig  = () => (${JSON.stringify(config)})
  `

  fs.writeFileSync(`${schemaWritePath}/index.mjs`, beutify.js(indexTemplate, { indent_size: 2, space_in_empty_paren: true }))
}

function jsonParse(el){ try{ return JSON.parse(el); }catch(e){ return el; } }