<template>
  <div class="index-body wrap">
  <welcome></welcome>
  <news></news>
  <div class="row">
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <!-- <Tweet :id="'783943172057694208'" :options="{}"/> -->
    </div>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>

  </div>
<p>where is tweet???</p>
<md></md>
  <div class="wrap graySection">
    <!-- <rest></rest> -->
  </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
// import Logo1 from '~/components/Logo.1.vue'
import mynav from '~/components/mynav.vue'
import myfooter from '~/components/myFooter.vue'
import welcome from '~/components/welcome.vue'
import news from '~/components/news.vue'
import md from '~/components/markdown.vue'
import rest from '~/components/rest.vue'
import Tweet from 'vue-tweet-embed'

export default {
  components: {
    Logo,
    mynav,
    myfooter,
    welcome,
    news,
    Tweet,
    md,
    rest
  }
}
</script>

<style>
.index-body {
  /* height: 1500px; */
}

.graySection {
  background:#ffffff;
}
.graySection h1, .graySection h2, .graySection h3, .graySection h4 {
  color: #13294b;
}
</style>
