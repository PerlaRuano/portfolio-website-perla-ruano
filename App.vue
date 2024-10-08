<template>
  <div id="app">
    <!-- Header Section -->
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Section -->
    <main>
      <!-- About Me Section -->
      <section id="about">
        <img src="./assets/your-image.jpg" alt="Your Name" class="profile-img" />
        <h1>Your Name</h1>
        <p>Short description about you and your career goals. You can add more content here as needed.</p>
      </section>

      <!-- Skills Section -->
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Vue.js, React</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Responsive Design with Flexbox & CSS Grid</li>
          <li>API Integration</li>
        </ul>
      </section>
    </main>

    <!-- Footer Section -->
    <footer>
      <p>Connect with me on <a href="https://github.com/yourgithub">GitHub</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* Global styles can go here, or you can use separate CSS/SCSS files */

/* Header Styling */
header {
  background-color: #2C3E50;
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
  color: #3498DB;
  text-decoration: none;
  font-size: 1.2rem;
}

/* About Me Section */
.profile-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  display: block;
}

#about {
  padding: 2rem;
  text-align: center;
}

/* Skills Section */
#skills {
  padding: 2rem;
  background-color: #ECF0F1;
  text-align: center;
}

#skills ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

#skills ul li {
  flex: 1 1 30%;
}

/* Footer Styling */
footer {
  background-color: #2C3E50;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
