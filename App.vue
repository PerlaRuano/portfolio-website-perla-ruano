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
        <h1>Perla Ruano</h1>
        <p>A dedicated mother of three, I'm pursuing a Bachelor's in Computer Science to provide a bright future for my family. My passion for technology, coupled with my
          entrepreneurial spirit, drives me towards a career in IT that offers flexibility. Having lived in Oregon, Arizona, and Nebraska, I bring a diverse perspective to my 
          professional journey. 
Beyond my academic pursuits, I've cultivated a rich tapestry of interests. My hobbies include painting, reading, candle making, embroidery, crochet, and hiking with my four dogs. 
          Additionally, I've established side businesses in cake decorating and handmade embroidery, showcasing my creativity and entrepreneurial skills.
As I strive to balance my professional and personal life, I'm seeking an IT role that allows me to pursue both my career goals and my passions. My diverse experiences, 
          combined with my strong work ethic and dedication to lifelong learning, make me a valuable asset to any team.
</p>
      </section>

      <!-- Skills Section -->
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Technical Troubleshooting: Hardware & software diagnosis, problem-solving.</li>
          <li>Operating Systems: Windows, macOS, Linux proficiency.</li>
          <li>Networking Fundamentals: Basic network configuration, troubleshooting.</li>
          <li>Customer Service: Effective communication, problem resolution.</li>
          <li>Software Applications: Office suite, database management, help desk tools.</li>
          <li>Security Awareness: Basic security practices, password management.</li>
          <li>Remote Support: Tools & techniques for remote assistance.</li>
          <li>Documentation: Clear & concise documentation of issues & solutions.</li>
          <li>Programming: Proficiency in specific languages (e.g., Python, Java, C++).</li>
          <li>Networking: Understanding of networking protocols (e.g., TCP/IP, HTTP).</li>
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
