// import path from 'path'

export const context   = getContext()
// export const src       = path.resolve(context, 'src')
// export const dist      = path.resolve(context, 'dist')
// export const pub       = path.resolve(context, 'public')
// export const test      = path.resolve(context, 'tests/e2e/scaffolding')

function getContext(){
  const cxt = (process.env.SDO || process.argv[1]).replace('/node_modules/.bin/sdo', '')

  return cxt
}