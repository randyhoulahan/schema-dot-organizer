// import path from 'path'

export const context   = getContext()

function getContext(){
  const cxt = (process.env.SDO || process.env.INIT_CWD || process.argv[1]).replace('/node_modules/.bin/sdo', '')

  return cxt
}