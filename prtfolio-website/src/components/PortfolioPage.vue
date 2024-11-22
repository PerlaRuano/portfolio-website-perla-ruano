<template>
    <div class="portfolio">
      <h2>My GitHub Repositories</h2>
      <p v-if="loading">Loading...</p>
      <p v-if="error" class="error">{{ error }}</p>
      <ul v-if="repositories.length > 0">
        <li v-for="repo in repositories" :key="repo.id" class="repo-item">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          <p>{{ repo.description || 'No description available' }}</p>
          <p><strong>Language:</strong> {{ repo.language || 'N/A' }}</p>
          <p><strong>Last updated:</strong> {{ formatDate(repo.updated_at) }}</p>
        </li>
      </ul>
      <p v-else>No repositories found.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Portfoliopage',
    data() {
      return {
        repositories: [],
        loading: true,
        error: '',
      };
    },
    mounted() {
      this.fetchRepositories();
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get(
            'https://api.github.com/users/{your-github-username}/repos'
          );
          this.repositories = response.data;
        } catch (error) {
          this.error = 'Failed to load repositories. Please try again later.';
        } finally {
          this.loading = false;
        }
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      },
    },
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

      h2 {
  text-align: center;
}

.repo-item {
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.repo-item a {
  font-weight: bold;
  color: #002f6c;
  text-decoration: none;
}

.repo-item a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  text-align: center;
}

@media (max-width: 600px) {
  .portfolio {
    padding: 15px;
  }
}

    
      </style>
      
      