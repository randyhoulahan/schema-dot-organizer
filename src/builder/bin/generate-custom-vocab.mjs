import { generateCustomVocab } from '../index.mjs'
import { runTaskAndNotify } from '../util/index.mjs'

(async () => {

await runTaskAndNotify()(generateCustomVocab, 'Generating Custom Vocab -> ')

})()