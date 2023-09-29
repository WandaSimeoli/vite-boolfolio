<script>
import axios from 'axios';
export default {
  components :{
  },

  data() {
    return { 
        title :'HomePageComponent',
      projects : []
     }
  },
  created() {
    axios 
    .get('http://localhost:8000/api/projects')
    .then( res => {
      console.log(res.data.results);
      this.projects = res.data.results;
      console.log(this.projects[0].type.title);
    });
  },
  methods: {}
}
</script>

<template>
<div class="container">
    <div v-for="project in projects" :key="project.id" class="card">
      <h3>
        {{ project.title }}
      </h3>
      <p>  {{ project.content }}</p>
      <div v-if="project.type_id !== null"> {{ project.type.title }}</div>
      <div v-else>None</div>
      <li><router-link :to="{name:'project', params: {slug: project.slug}}">Look this project</router-link></li>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
</style>