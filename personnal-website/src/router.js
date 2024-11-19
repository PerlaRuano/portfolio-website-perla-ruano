import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';  // Home component
import Portfolio from './components/Portfolio.vue';  // Portfolio component

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
