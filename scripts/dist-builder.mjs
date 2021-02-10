const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const cdnUrl = 'https://cdn.cbd.int'

const modern = { output: { dir: './dist/browser' } }
const ssr    = { output: { dir: './dist/esm' } }

const  browserEsmPackages = {
  '@houlagins/load-http': `${cdnUrl}/@houlagins/load-http@~1.0.1/dist/browser/index.min.js`
}

export default {
  legacy, modern, ssr, browserEsmPackages
}