<template>
  <div id="app" v-if="sdo">
    <!-- <h3>Classes Loaded: {{ getClassesSize() }}</h3>
    <h3>Props Loaded: {{ getPropsSize() }}</h3>
    <h3>Enums Loaded: {{ getEnumsSize() }}</h3>
    <h3>Enum Members Loaded: {{ getEnumsMembersSize() }}</h3>
    <h3>metaIsA: {{  metaIsA('OrderStatus') }}</h3>
    <h3>props: </h3>
    <pre>{{  Array.from(getPropNames()) }}</pre>
    <h3>classes: </h3> -->
        <!-- <pre>{{  get('ImageObject') }}</pre> -->
          <pre>-----{{  sdo.metaIsA('Email') }}</pre>
 
    
        
      

  </div>
</template>

<script>

import { SDO } from '../src/index.mjs'
import graph from './graph'

export default {
  name : 'HelloWorld',
  data:function(){return { sdo: null}},
  methods: { debug, get, toMapS },
  async mounted(){
    const sdo = new SDO()

    //await sdo.loadGraph()
    await sdo.loadGraph(graph)

    // console.log('sdo.propNames',sdo.propNames)
    // console.log('sdo.classNames',sdo.classNames)
    // console.log(sdo.rawEnumClasses)
    // console.log(sdo.rawEnumMembers)
    this.$forceUpdate()

    this.sdo = sdo

    this.debug()
  }
}

function get(name){
  return this.sdo.getClass(name)
}
function debug(){
  this.sdo.debug()
}

function toMapS(map){
  return Array.from(map.entries()).reduce((main, [key, value]) => ({...main, [key]: value }), {})
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
