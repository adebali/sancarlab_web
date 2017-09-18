<template>
  <div class="index-body">
  <div class="parallax text-center">
    <h1> Welcome to <b>Sancar</b> Lab </h1>
  </div>
  <welcome></welcome>
  <news></news>
  <div class="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <!-- <Tweet :id="'783943172057694208'" :options="{}"/> -->
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
  </div>
<!-- <md></md> -->
  <div class="wrap graySection">
  </div>
  <!-- <range></range> -->
  </div>
</template>

<script>
import mynav from '~/components/mynav.vue'
import myfooter from '~/components/myFooter.vue'
import welcome from '~/components/welcome.vue'
import news from '~/components/news.vue'
// import slider from '~/components/slider.vue'
// import range from '~/components/range.vue'
// import md from '~/components/markdown.vue'
import Tweet from 'vue-tweet-embed'

export default {
  components: {
    mynav,
    myfooter,
    welcome,
    news,
    Tweet
    // slider
    // range
    // slider
    // md
  }
}
</script>

<style scoped>

.graySection {
  background:#ffffff;
}
.graySection h1, .graySection h2, .graySection h3, .graySection h4 {
  color: #13294b;
}

.parallax {
    background-image: url('/img/NC_award.jpg');
}

.parallax h1 {
    color: #4B9CD3;
    /* color: #13294b; */
    background: rgba(0,0,0,0.4);
}

.parallax h1 b {
    color: #13294b;
    color: #ECD6B4;
    font-size: 1em;
}

</style>
