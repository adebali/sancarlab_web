<template>
    <span v-html="htmlString"></span>
</template>

<script>
import axios from '~/plugins/axios'
import MarkdownIt from 'markdown-it'
let md = new MarkdownIt()

export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('/press.md')
      .then((res) => {
        return { htmlString: md.render(res.data) }
        // return { posts: res.data.slice(0, 5) }
        // return { htmlString: '<h1>H1 I am </h1>' }
        // return { posts: [
        //   {'id': 1, 'title': 'title1', 'htmlString': '<h1>H1 I am </h1>'},
        //   {'id': 2, 'title': 'title2', 'htmlString': '<h1>H1 I am - 2 </h1>'}
        // ]}
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
</style>
