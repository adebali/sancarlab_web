<template>
    <span v-html="htmlString"></span>
</template>

<script>
import axios from '~/plugins/axios'
import MarkdownIt from 'markdown-it'
let md = new MarkdownIt()

export default {
  asyncData ({ req, params }) {
    return axios.get('../press.md')
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
</style>
