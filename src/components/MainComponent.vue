<script>

export default {
  components :{
    name: 'MainComponent'
  },

  data() {
    return { 
      title: 'MainComponent'
     }
  },
  methods: {}
}
</script>

<template>
<main>
  <router-view></router-view>
</main>
</template>

<style scoped lang="scss">
main {
  text-transform: uppercase;

}
</style>