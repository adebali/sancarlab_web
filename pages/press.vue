<template>
  <div>
      <div class="parallax">
        <h1 class="align-middle ">Press</h1>
      </div>
      <div class="wrap">
        <span v-html="htmlString"></span>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import MarkdownIt from 'markdown-it'
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
  asyncData ({ req, params }) {
    return axios.get('/press.md')
      .then((res) => {
        return { htmlString: md.render(res.data) }
      })
  },
  head: {
    title: 'List of posts'
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
  background-image: url('/img/interview.jpg');
  text-align: center;
  background-position-y: -300px;

}

.parallax h1 {
  margin-top: 0;
  color: white;
  font-size: 3.5em;
  position: relative;
  top: 40%;
  background: rgba(0,0,0,0.0.2);
}

.vertical-center {
  /* display: flex; */
  text-align: middle;
  /* align-items: center; */
}
</style>
