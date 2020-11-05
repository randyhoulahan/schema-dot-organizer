import   fs              from 'fs-extra'
import path    from 'path'
import { pathToFileURL } from 'url'
import { context       } from './context.mjs'
import   defaultConfig   from './default.config.mjs'

export const config = {}
export const getConfig = async () => {
  if(Object.keys(config).length) return config

  const configFilePath = getConfigPath()

  const rawConfig      = configFilePath? (await import(pathToFileURL(configFilePath).href)).default : {}
  const allConfig      = { ...defaultConfig , ...rawConfig  }

  allConfig.schemaWritePath  = path.resolve(context,`./${allConfig.schemaWritePath}`)
  allConfig.typesWritePath   = path.resolve(context,`./${allConfig.typesWritePath}`)
  allConfig.propsWritePath   = path.resolve(context,`./${allConfig.propsWritePath}`)
  allConfig.classesWritePath   = path.resolve(context,`./${allConfig.classesWritePath}`)
  allConfig.enumClassesWritePath = path.resolve(context,`./${allConfig.enumClassesWritePath}`)
  allConfig.enumMembersWritePath = path.resolve(context,`./${allConfig.enumMembersWritePath}`)



  for (const key in allConfig)
    config[key] = allConfig[key]

  return config
}

getConfig()

function getConfigPath(){

  const scriptsPath = `${context}/scripts/sdo.config.mjs`
  const rootPath    = `${context}/sdo.config.mjs`
  const srcPath     = `${context}/src/sdo.config.mjs`

  if(fs.existsSync(scriptsPath)) return scriptsPath
  if(fs.existsSync(rootPath)) return rootPath
  if(fs.existsSync(srcPath)) return srcPath

  return ''
}