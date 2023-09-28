<script>
import axios from 'axios';
export default {
  components :{
  },

  data() {
    return { 
      projects : {},
      type : []
     }
  },
  created() {
    axios 
    .get('http://localhost:8000/api/projects')
    .then( res => {
      console.log(res);
      this.projects = res.data.results;
      this.type = res.data.results;
    });
  },
  methods: {}
}
</script>

<template>
<main>
  <div class="container">
    <div v-for="project in projects" :key="project.id" class="card">
      <h3>
        {{ project.title }}
      </h3>
      <p>  {{ project.content }}</p>
      <div> {{  }}</div>
    </div>
  </div>
</main>
</template>

<style scoped lang="scss">
main {
  text-transform: uppercase;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    .card {
      margin: 10px;
    }
    .container > * {
      width: calc(100% / 4);
      border: 1px solid black;
      text-align: center;
  }
}
</style>