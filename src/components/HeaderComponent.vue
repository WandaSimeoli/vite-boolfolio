<script>

export default {
  components :{
    name:'HeaderComponent'
  },

  data() {
    return { 
      title:'HeaderComponent'
     }
  },
  methods: {}
}
</script>

<template>
<header>
{{ title }}
<nav>
  <ul>
    <li><router-link :to="{name:'home'}">Home</router-link></li>
    <li><router-link :to="{name:'contact'}">Contact</router-link></li>
  </ul>
</nav>
</header>
</template>

<style scoped lang="scss">
header {
  color: red;
  text-transform: uppercase;
}
</style>