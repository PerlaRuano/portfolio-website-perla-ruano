<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomePage/>
  <PortfolioPage/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import PortfolioPage from './components/PortfolioPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    PortfolioPage
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
