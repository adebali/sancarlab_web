<template>
  <div></div>
</template>

<script>
let authors = require('../static/data.json')
// import authors from '../static.data.json'

export default {
  data () {
    console.log(authors)
    return { authors }
  }
}
</script>
