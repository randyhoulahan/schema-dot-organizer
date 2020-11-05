import { init } from '../index.mjs'
import {  runTaskAndNotify } from '../util/index.mjs'

(async () => {

await runTaskAndNotify()(init, 'Initializing schema -> ')

})()