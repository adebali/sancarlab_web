<template>
  <div class="publication">
    <!-- <h1> This is pubmed page: {{title}}</h1> -->
    <span v-html="citation"></span>
    <!-- <p>{{ authors }} ({{ pubDate }}) {{ title }} <i>{{ journal }} {{ volume }}</i>({{issue}}), {{pages}} {{doi}}</p> -->
  </div>
</template>


<script>
import axios from 'axios'
// import ncbi from 'node-ncbi'

export default {
  props: {
    id: {
      type: String,
      default: '28798238'
    }
  },
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
  methods: {
    greet: function (greeting) {
      alert(greeting)
    },
    pressKey: function (e) {
      console.log(e.target.value)
    },
    enterHit: function () {
      console.log('You hit enter')
    },
    updateObjet: function (pmid) {
      this.data = this.asyncData(pmid)
    }
    // ,
    // getPublication: async function (pmid) {
    //   let { data } = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json&tool=my_tool&email=my_email@example.com`)
    //   let publication = data.result[pmid]
    //   return publication
    // }
  },
  // async asyncData ({ pmid }) {
  //   let { data } = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&id=${pmid}&retmode=json`)
  //   return { title: data }
  // },
  computed: {
    citation: function () {
      let publicationLink = `https://www.ncbi.nlm.nih.gov/pubmed/${this.id}`
      if (this.doi !== false) {
        let doiLink = `http://dx.doi.org/${this.doi}`
        publicationLink = doiLink
      }
      // let linkRoot = doiRoot
      return `<p class=${this.pubYear}>
        ${this.computedAuthors}
        (${this.pubYear})<br /><b>
        <a target="_blank" href=${publicationLink}>${this.title}</a></b><br />
        <i>
          ${this.journal}
        </i>
        <i>${this.volume}</i>(${this.issue}),
        ${this.pages}
      </p>`
    },
    computedAuthors: function () {
      let authorNames = []
      this.authors.forEach(function (entry) {
        authorNames.push(entry.name)
      })
      return authorNames.join(', ')
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
  }
}
</script>

<style>
  .publication{
    margin-top: 20px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
