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
  Header
</header>
</template>

<style scoped lang="scss">
header {
  color: red;
  text-transform: uppercase;
}
</style>