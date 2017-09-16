<template>
  <div>
      <div class="parallax">
        <h1 class="align-middle ">Press</h1>
      </div>
      <markdown></markdown>
  </div>
</template>

<style scoped>

.parallax {
  background-image: url('/img/tubes.jpg');
  text-align: center;
  background-position-y: -300px;

}

.parallax h1 {
  margin-top: 0;
  color: white;
  font-size: 3.5em;
  position: relative;
  top: 40%;
  background: rgba(0,0,0,0.0);
}

.vertical-center {
  /* display: flex; */
  text-align: middle;
  /* align-items: center; */
}




</style>

<script>

import markdown from '~/components/markdown.vue'

export default {
  components: {
    markdown
  }
}
</script>
