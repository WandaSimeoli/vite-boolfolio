<script>
import axios from 'axios';

export default {
  components :{
  },

  data() {
    return { 
      projects : []
     }
  },
  // created() {
  //   axios 
  //   .get('http://localhost:8000/api/projects')
  //   .then( res => {
  //     console.log(res);
  //   });
  // },
  methods: {}
}
</script>

<template>
<main>
  main
</main>
</template>

<style scoped lang="scss">
main {
  color: red;
  text-transform: uppercase;
}
</style>