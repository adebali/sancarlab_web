<template>
  <div>
    <span v-html="htmlString2"></span>
    <span v-html="citation"></span>
  </div>
</template>

<script>

// import MarkdownIt from 'markdown-it'
// let md = new MarkdownIt()
import axios from '~/plugins/axios'
// import fs from 'fs'

// fs.unlink('/tmp/hello', (err) => {
//   if (err) throw err
//   console.log('successfully deleted /tmp/hello')
// })
// let readBlog = axios.get('/blogs/hello.md')
//   .then(function (response) {
//     console.log(response)
//     return md.render(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

export default {
  props: {
    id: {
      type: String,
      default: '28798238'
    }
  },
  // data () {
  //   return {
  //     htmlString: md.render('# this is html')
  //   }
  // },
  // created: async function () {
  //   let { response } = await axios.get('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=234532&retmode=json&tool=my_tool&email=my_email@example.com')
  //   console.log(response)
  //   // this.htmlString = md.render(response.data)
  // }
  data () {
    return {
      title: '',
      authors: [{'name': ''}],
      pubDate: '',
      journal: '',
      volume: '',
      issue: '',
      pages: '',
      doi: ''
    }
  },
  created: async function () {
    let { data } = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${this.id}&retmode=json&tool=my_tool&email=my_email@example.com`)
    let publication = data.result[this.id]
    this.title = publication.title
    this.authors = publication.authors
    this.pubYear = publication.pubdate.split(' ')[0]
    this.journal = publication.fulljournalname
    this.volume = publication.volume
    this.issue = publication.issue
    this.pages = publication.pages
    this.doi = publication.elocationid.split('doi: ')[1]
    let { mark } = await axios.get('//localhost:3000/blogs/hello.md')
    console.log(mark)
    this.mark = mark

    // const pubmed = ncbi.pubmed
    // pubmed.summary(this.id).then((paper) => {
    //   this.title = paper.title
    //   this.authors = paper.authors
    //   this.pubYear = paper.pubDate.split('/')[0]
    //   this.journal = paper.raw.fulljournalname
    //   this.volume = paper.raw.volume
    //   this.issue = paper.raw.issue
    //   this.pages = paper.raw.pages
    //   this.doi = paper.raw.elocationid
    //   console.log(paper)
    // })

    // this.items = data
  },
  computed: {
    htmlString2: function () {
      console.log('this.mark')
      console.log(this.mark)
      return '<h2>hey</h2>'
    },
    citation: function () {
      let publicationLink = `https://www.ncbi.nlm.nih.gov/pubmed/${this.id}`
      if (this.doi !== false) {
        let doiLink = `http://dx.doi.org/${this.doi}`
        publicationLink = doiLink
      }
      // let linkRoot = doiRoot
      return `<p class=${this.pubYear}>
        <a target="_blank" href=${publicationLink}>${this.title}</a></b><br />
      </p>`
    }
  }
}
</script>
