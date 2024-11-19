<template>
    <div class="portfolio">
      <h1>My GitHub Portfolio</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <ul v-else>
        <li v-for="repo in repositories" :key="repo.id">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          <p>{{ repo.description || 'No description available' }}</p>
          <p><strong>Language:</strong> {{ repo.language }}</p>
          <p><strong>Last Updated:</strong> {{ formatDate(repo.updated_at) }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repositories: [],
        loading: true,
        error: null
      };
    },
    created() {
      this.fetchRepositories();
    },
    methods: {
      async fetchRepositories() {
        try {
          const response = await axios.get('https://api.github.com/users/{your-github-username}/repos');
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
  
  
  