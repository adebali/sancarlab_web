<template>
  <div class="index-body">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="parallax text-center">
        <h1> Welcome to <b>Sancar</b> Lab </h1>
        </div>
      </div>
    </div>

    <welcome>
    </welcome>

    <div class="wrap text-justify">
      <span class="markdown" v-html="htmlString"></span>
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
import axios from '~/plugins/axios'
import MarkdownIt from 'markdown-it'
// import mymark from '~/components/markdown.vue'

let md = new MarkdownIt()

let defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex('target')

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']) // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
  }

  // pass token to default renderer.
  return defaultRender(tokens, idx, options, env, self)
}

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
  },
  asyncData ({ req, params }) {
    return axios.get('/news/main.md')
      .then((res) => {
        return { htmlString: md.render(res.data) }
      })
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
