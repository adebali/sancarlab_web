<template>
  <div>
    <p v-html=this.post.msg></p>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts">
        <p><strong>{{post.msg}}</strong></p>
        <!-- <p>{{post.body}}</p> -->
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data: () => ({
    post: {},
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created () {
    axios.get(`blogs/hello.json`)
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data)
        this.post = response.data
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
