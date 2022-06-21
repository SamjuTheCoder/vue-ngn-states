<template>
  <div id="app">
    <VueNgStates/>
  </div>
</template>

<script>
import VueNgnStates from './components/VueNgnStates.vue'

export default {
  name: 'App',
  components: {
    VueNgnStates,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
