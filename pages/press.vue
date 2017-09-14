<template>
  <div class="wrap">
    <h1 class="text-center">Press</h1>
    <div v-html=this.post></div>
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
  data: () => ({
    post: {},
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created () {
    axios.get(`press.md`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.post = md.render(response.data)
        // this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

<style scoped>
  p {
    font-size: 16px;
  }
</style>
