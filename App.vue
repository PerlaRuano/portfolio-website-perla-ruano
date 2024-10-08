<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

/* Header styling */
header {
  background-color: #2C3E50; /* Dark Blue */
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: #3498DB; /* Light Blue */
  text-decoration: none;
  font-size: 1.2rem;
}

/* Profile Image */
.profile-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  display: block;
}

/* Skills Section */
#skills ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

#skills ul li {
  flex: 1 1 30%;
}

/* Footer Styling */
footer {
  background-color: #2C3E50; /* Dark Blue */
  color: white;
  margin-top: 2rem;
  padding: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>