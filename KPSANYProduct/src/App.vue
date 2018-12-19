<template>
  <div id="app">
    <w-Header></w-Header>
    <router-view/>
  </div>
</template>

<script>
import wHeader from './components/common/wHeader'
export default {
  name: 'App',
  components:{
    wHeader
  },
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
}
</style>
