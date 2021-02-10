import { generateCustomVocab, generate, init } from '../index.mjs'
import { runTaskAndNotify } from '../util/index.mjs'


async function build(){
  await generateCustomVocab()
  await init()
  await generate()
}

(async () => {
  await runTaskAndNotify()(build, 'Generating schema -> ')
})()