<template>
  <div id="app">
    <h3>Classes Loaded: {{ classesSize() }}</h3>
    <h3>Props Loaded: {{ propsSize() }}</h3>
    <h3>Enums Loaded: {{ enumsSize() }}</h3>
    <h3>Enum Members Loaded: {{ enumsMembersSize() }}</h3>
    <h3>metaIsA: {{  metaIsA('OrderStatus') }}</h3>
  </div>
</template>

<script>
import { getJsonSchema, getGraph } from '../src/schema/index.mjs'
import { loadGraph, getClass, classesSize, propsSize, enumsSize, enumsMembersSize, debug, metaIsA } from '../src/graph/index.mjs'


export default {
  name : 'HelloWorld',
  props: {
    msg: String
  },
  methods: { classesSize, propsSize, enumsSize, enumsMembersSize, metaIsA },
  async mounted(){
    await loadGraph()

    this.$forceUpdate()
    
    // console.log(await getJsonSchema())
    // console.log(await getGraph())

    debug()
  }
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
