import fs      from 'fs-extra'
import path    from 'path'
import beutify from 'js-beautify'
import lint    from 'eslint' 

import { getConfig   , config         } from './util/config.mjs'
import { createClass , createdClasses } from './class.mjs'
import { loadGraph   , getRawClass, getEnumClass, getClass    } from '../index.mjs'
import { createdProps                 } from './prop.mjs'
import { createdEnumClasses } from './enumClass.mjs'
import { createdEnumMembers } from './enumMember.mjs'

const { ESLint } = lint

export const init = async () => {
  try{

    const  { schemaWritePath, classes } = await getConfig()
    const predefinedClasses             = [ 'PropertyValue', 'CreativeWork', 'Organization' ]
    const allClasses                    = [ ...predefinedClasses, ...Object.keys(classes) ]

    await loadGraph()

    await forEachMjsFileInDir('./src/builder/templates/types', writeTypeFile())
    await forEachMjsFileInDir('./src/builder/templates/props', writePropFile())
    await forEachMjsFileInDir('./src/builder/templates/classes', writeClassFile())

    for (const aClassName of allClasses)
      await createClass(aClassName)

    createGraphSnapShot()

    const eslint = new ESLint({ fix: true });

    const results = await eslint.lintFiles([`${schemaWritePath}/*/*.mjs`, `${schemaWritePath}/graph.mjs`]);

    await ESLint.outputFixes(results)

  }catch(e){
    console.error(e)
  }
}

export const generate = async () => {
  try{
    const  { typesWritePath , propsWritePath, classesWritePath, schemaWritePath, enumMembersWritePath, enumClassesWritePath  } =  await getConfig()

    const objectsPromises = await Promise.all([getJsObjectsFromDir(typesWritePath), getJsObjectsFromDir(propsWritePath), getJsObjectsFromDir(classesWritePath), getJsObjectsFromDir(enumMembersWritePath ), getJsObjectsFromDir(enumClassesWritePath)])
    const data            = [ ...objectsPromises[0], ...objectsPromises[1], ...objectsPromises[2] ] 

    fs.writeFileSync(`${schemaWritePath}/json-schema.mjs`, beutify.js(`export default ${JSON.stringify(data)}`, { indent_size: 2, space_in_empty_paren: true }))
    writeIndex()
    
    const eslint = new ESLint({ fix: true });

    const results = await eslint.lintFiles([`${schemaWritePath}/index.mjs`, `${schemaWritePath}/index.mjs`, `${schemaWritePath}/graph.mjs`]);

    await ESLint.outputFixes(results)
  }catch(e){
    console.error(e)
  }
}

function createGraphSnapShot(){
  const  { schemaWritePath } = config
  const snap             = new Map()
  const graphMemberNames = new Set ([ ...createdClasses(), ...createdProps, ...createdEnumClasses(), ...createdEnumMembers ])
  
  for (let item of graphMemberNames ){

    if(!getRawClass(item)[0]) continue

    snap.set(item, getRawClass(item)[0])
    
    if(getEnumClass(item) && getEnumClass(item).members){
      for (const enumMemberName of getEnumClass(item).members.keys())
        snap.set(enumMemberName, getRawClass(enumMemberName)[0])
    }
  }

  fs.writeFileSync(`${schemaWritePath}/graph.mjs`, beutify.js(`export default { '@graph' : ${JSON.stringify([...snap.values()])} }`, { indent_size: 2, space_in_empty_paren: true }))
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

    if(!fs.existsSync(destinationPath)) fs.mkdirpSync(destinationPath)

    const fileModule = (await import(`${fileObj.dir}/${fileObj.base}`)).default;

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

const indexTemplate = `import jsonSchema from './json-schema.mjs'
import graph from './graph.mjs'

export const getJsonSchema = () => jsonSchema
export const getGraph      = () => graph`

function writeIndex(){
  const  { schemaWritePath } = config

  fs.writeFileSync(`${schemaWritePath}/index.mjs`, beutify.js(indexTemplate, { indent_size: 2, space_in_empty_paren: true }))
}

