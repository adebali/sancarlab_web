<template>
  <div id="app" class="wrap">
    <h1>Publications</h1>
    <citations />
  </div>
</template>

<script>
import citations from '~/components/citations.vue'

export default {
  name: 'app',
  components: {
    citations
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
