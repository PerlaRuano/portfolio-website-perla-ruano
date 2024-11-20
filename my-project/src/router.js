import Vue from 'vue';
import Router from 'vue-router';
import Home from 'C:\Users\perla\OneDrive\Documents\GitHub\portfolio-website-perla-ruano\my-project\src\components\HomePage.vue';  // Home component
import Portfolio from 'C:\Users\perla\OneDrive\Documents\GitHub\portfolio-website-perla-ruano\my-project\src\components\Portfolio.vue';  // Portfolio component

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    }
  ]
});
