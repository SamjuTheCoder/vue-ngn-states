<template>
  <div id="app">
    <VueNgStates/>
  </div>
</template>

<script>
import VueNgStates from './components/VueNgStates.vue'

export default {
  name: 'App',
  components: {
    VueNgStates,
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
