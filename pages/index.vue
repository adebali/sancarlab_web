<template>
  <div class="index-body">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="parallax text-center">
        <h1> Welcome to <b>Sancar</b> Lab </h1>
        </div>
      </div>
    </div>

    <welcome class="welcome">
    </welcome>
    <div class="wrap text-center">
   <h2>Join Our Team! </h2>
    <p>
      We are hiring! View open positions <a href="/openpositions">here</a>.
    </p>
    </div>

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
// import mymark from '~/components/markdown.vue'

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

.welcome {
  height: 250px;
}

</style>
