import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import Vue from 'vue';
import router from './router'; // Import the router

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router  // Include the router here
}).$mount('#app');


