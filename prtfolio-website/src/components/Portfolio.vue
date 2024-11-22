<template>
    <div class="main-container">
        <div class="project-one" v-for="(items, index) in projectData.ProjectArray">
          <h2>{{projectData.ProjectArray[index].Title}}</h2>
          <img :src="projectData.ProjectArray[index].Image" alt="">
          <p>{{projectData.ProjectArray[index].About}}</p>
          <div class="links" >
            <a href=""><img src="./assets/github.png" alt=""></a>
            <a href=""><img src="./assets/link.png" alt=""></a>
          </div>
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
        margin: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #A0D4ff;
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
    
      .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }
    
      .links img{
        height: 1.5rem;
        margin: 5px;
      }
      .portfolio {
        padding: 20px;
      }
    
      </style>
      
      