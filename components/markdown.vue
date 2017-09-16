<template>
  <div class="wrap">
    <!-- <div v-html="htmlString">{{htmlString}} -->
    <div>{{htmlString}}
    </div>
  </div>
</template>

<script>

// import axios from '~/plugins/axios'
// import MarkdownIt from 'markdown-it'

// let md = new MarkdownIt()

export default {
  methods: {
    async asyncData (myvar) {
      // let { data } = await axios.get(`/press.md`)
      // console.log(md.render(data.data))
      // return { htmlString: md.render(data.data) }
      // return '<p>hey</p>'
      return myvar
    // md2html: function (markdownText) {
    //   return md.render(markdownText)
    // }
    }
  },
  data () {
    return {
      mdObject: {}
      // htmlString: '<h1>Hey</h1>'
      // htmlString: this.asyncData('hi jekyll')
    }
  },
  computed: {
    htmlString: async function () {
      return 'Hi Hyde'
    },
    // htmlString: async function () {
    //   this.mdObject = await axios.get(`/press.md`)
    //   console.log(this.md2html(this.mdObject.data))
    //   this.html = this.md2html(this.mdObject.data)
    //   console.log(typeof (this.html))
    //   // return this.md2html(this.mdObject.data)
    //   return '<p>deneme</p>'
    // },
    deneme: function () {
      return '<p>deneme</p>'
    }
  }
}
</script>
