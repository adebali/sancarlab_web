<template>
  <div class="body">
    <div class="wrap text-justify content">
      <span class="markdown" v-html="htmlString"></span>
    </div>
      <!-- <mymark /> -->
  </div>
</template>

<script>
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
    // mymark
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
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}

.parallax {
  background-image: url('http://www.newsobserver.com/news/local/education/ih5ot1/picture51568730/alternates/FREE_640/sancar%20receives%20award');
  text-align: center;
  background-position-y: -300px;

}

.parallax h1 {
  margin-top: 0;
  font-size: 3.5em;
  position: relative;
  top: 40%;
  margin-bottom:0;
}
.parallax h3 {
  margin-top: 0;
  font-size: 2em;
  position: relative;
  top: 40%;
}

.vertical-center {
  /* display: flex; */
  text-align: middle;
  /* align-items: center; */
}

.content {
  min-height: 600px;
}
</style>

<style>
.markdown h1 {
  text-align: center;
  text-align: middle;
  margin: 60px;
}
</style>
