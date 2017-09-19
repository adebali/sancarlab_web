<template>
  <div id="app">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="parallax text-center">
        <h1><b>Publications</b></h1>
      </div>
    </div>
  </div>
    <div class="wrap">
      <!-- <no-ssr placeholder="You can even add a placeholder to be rendered instead!"> -->
      <!-- </no-ssr> -->
      <!-- <range /> -->
      <citations />
    </div>
  </div>
</template>

<script>
import citations from '~/components/citations.vue'
// import slid from '~/components/slider.vue'
import NoSSR from 'vue-no-ssr'

export default {
  name: 'app',
  components: {
    citations,
    'no-ssr': NoSSR
    // slid
  }
}
</script>

<style scoped>

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }

  .parallax {
    background-image: url('/img/covers.png');
  }

  .parallax h1 {
      /* background: rgba(0,0,0,0.2); */
  }
</style>
