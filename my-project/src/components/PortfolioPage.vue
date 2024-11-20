<template>
<div class="main-container">
    <div class="project-one" v-for="(items, index) in projectData.ProjectArray">
      <h2>{{projectData.ProjectArray[index].Title}}</h2>
      <img :src="projectData.ProjectArray[index].Image" alt="">
      <p>{{projectData.ProjectArray[index].About}}</p>
    </div>
</div>
  </template>
  
  <script>
  import jsonData from "/projects.json"
  
  export default {
    data() {
      return {
        projectData: jsonData
      };
    },
    created() {
      this.fetchRepositories();
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get('https://github.com/PerlaRuano/portfolio-website-perla-ruano.git');
          this.repositories = response.data;
        } catch (err) {
          this.error = 'Failed to load repositories. Please try again later.';
        } finally {
          this.loading = false;
        }
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    }
  };
  </script>
  
  <style scoped>

  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .project-one{
    margin: 10px;
    padding: 10px;
    flex-wrap: 0 0 40%;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
  }

  .project-one image{
    height: 10rem;
  }
  .portfolio {
    padding: 20px;
  }
  .loading {
    font-size: 1.5em;
  }
  .error {
    color: red;
    font-size: 1.2em;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    color: #333;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  
  
  