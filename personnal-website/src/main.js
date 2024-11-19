import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Vue from 'vue';
import router from 'C:\Users\perla\OneDrive\Documents\GitHub\portfolio-website-perla-ruano\personnal-website\src\router.js'; // Import the router

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router  // Include the router here
}).$mount('#app');


