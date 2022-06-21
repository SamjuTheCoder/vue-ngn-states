import VueNgnStates from './components/VueNgnStates.vue'

export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
     // Let's register our component globally
     // https://vuejs.org/v2/guide/components-registration.html
     Vue.component("vue-ngn-states", VueNgnStates);
    }
   };