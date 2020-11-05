#!/usr/bin/env node
import { fork       } from 'child_process'
import   changeCase   from 'change-case'

import { startFeedback, endFeedback, startTaskInfo, endTaskInfo, taskError, context, notifyDone } from '../src/builder/util/index.mjs'

const commands = [ 'init', 'generate' ]
const src      = '/Users/randyhoulahan/projects/my/schema-dot-organizer/src' //'node_modules/@houlagins/schema-dot-organizer/src/'

runCommand()

function runCommand(){
  const theCommand = getCommand()

  startFeedback(`SCHEMA-DOT-ORGANIZER: ${theCommand}`)

  runChildProcess(theCommand)
}

function runChildProcess(theCommand){

  if(theCommand === 'init')      return forkScript(`${src}/builder/bin/init.mjs`)
  if(theCommand === 'generate')  return forkScript(`${src}/builder/bin/generate.mjs`)

  notifyDone()()
  process.exit(0)
}

function forkScript(scriptPathToFork){ 
  const { DEBUG } = process.env
  const   env     = { ...process.env, SDO: context }
  const   options = { cwd:'/Users/randyhoulahan/projects/my/schema-dot-organizer', env }

  if(DEBUG) options.stdio = 'inherit'

  const forked = fork(scriptPathToFork, [], options)

  initChildProcessApi(forked)
}

function initChildProcessApi(forked){
  let toggle = true
  let done   = false

  forked.on('message', (text) => {
    if(done) return //do nothing else if done

    if(text === 'done'){ //child tells parent they are done
      done = true
      return endFeedback()
    }

    //child can only tell parent it is starting or ending a task
    if(toggle){ //starting task named text
      startTaskInfo(text)
      toggle = !toggle
      return
    }
    //ending task named text
    endTaskInfo(text)
    toggle = !toggle
  })

  forked.on('error', (error) => {
    taskError(error)
    done = true
    throw error
  })
}

function getCommand(){
  const theCommand = changeCase.camelCase(process.argv[2])

  if(!isValidCommand(theCommand)) throw new Error('SCHEMA-DOT-ORGANIZER: command passed not valid')

  return theCommand
}

function isValidCommand(theCommand){
  if (commands.includes(theCommand)) return true

  console.error(`${theCommand}: is not a valid command.  One of ${JSON.stringify(commands)}.`)
  return false
}
