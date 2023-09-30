<script>
import axios from 'axios';
export default {
  components :{
  },

  data() {
    return { 
        title :'ProjectComponent',
        project : null
     }
  },
  created() {
    axios 
    .get('http://localhost:8000/api/projects/' + this.$route.params.slug)
    .then( res => {
      console.log(res.data.result);
      if(res.data.result) {
        this.project = res.data.result;
      } else {
        this.$router.push({name: '404NotFound'})
      }

    });
  },
  methods: {}
}
</script>

<template>
  <template v-if="project">
    <h2> {{ $route.params.slug }}</h2>
    <div class="container">
      <div class="card">
        <h3>
        {{ project.title }}
      </h3>
      <p>  {{ project.content }}</p>
    </div>
      </div>
  </template>
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