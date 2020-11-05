import { generate } from '../index.mjs'
import { runTaskAndNotify } from '../util/index.mjs'

(async () => {

await runTaskAndNotify()(generate, 'Generating schema -> ')

})()