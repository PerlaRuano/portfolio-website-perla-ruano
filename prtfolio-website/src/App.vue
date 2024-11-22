<template>
  <template>
  <div id="app">
    <header>
      <h1>My Developer Portfolio</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view> <!-- This will render the current route's component -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}

header {
  background-color: #002f6c;
  color: white;
  text-align: center;
  padding: 20px;
}

nav {
  margin-top: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 20px;
}

</style>