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
        console.log(response.data)
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

<style scoop>
  p {
    font-size: 16px;
  }
</style>
