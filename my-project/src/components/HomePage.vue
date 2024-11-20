
<template>
    <div class="main-container">
      <div class="profile">
        <img src="./assets/profile.png" alt=""/>
         <h3>Perla Ruano</h3>
          <p>Software Developer</p>
      </div>
    </div>
      <div class="social links">
          <div class="links">
            <img src="./assets/github.png" alt="">
            <a href=""><h2>Github</h2></a>
          </div>
          <div class="link">
            <img src="./assets/linkedin.png" alt="">
            <a href=""><h2>LinkedIn</h2></a> 
          </div> 
      </div>
      <div class="container-two">
        <div class="about me">
          <h1>About Me</h1>
          <p>A dedicated mother of three, I'm pursuing a Bachelor's in Computer Science to provide a bright future for my family. My passion for technology, coupled with my
          entrepreneurial spirit, drives me towards a career in IT that offers flexibility. Having lived in Oregon, Arizona, and Nebraska, I bring a diverse perspective to my 
          professional journey. 
          Beyond my academic pursuits, I've cultivated a rich tapestry of interests. My hobbies include painting, reading, candle making, embroidery, crochet, and hiking with my four dogs. 
          Additionally, I've established side businesses in cake decorating and handmade embroidery, showcasing my creativity and entrepreneurial skills.
          As I strive to balance my professional and personal life, I'm seeking an IT role that allows me to pursue both my career goals and my passions. My diverse experiences, 
          combined with my strong work ethic and dedication to lifelong learning, make me a valuable asset to any team.</p>
        </div>
      <div class="Skills">
        <h1>Skills</h1>
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
      </div>
      <div class="button-container">
        <div class="My Projects">
          <a href="">My Projects</a>
        </div>
        <div>
          <a href="">My Resume</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>
    img{
      height: 20px;
    }
    
    .main-container{
      display: flex;
      flex-direction: row;
      background-color: #cecece;
    }

    .container-one{
      background-color: #ffb0b0;
      padding: 2.5%;
      width: 30%;
    }

    .profile-image{
      height: 5rem;
      border-radius: 50%;
    }

    .container-two{
      background-color: aquamarine;
      width: 70%;
    }
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 20px;
  }
  </style>
  
  