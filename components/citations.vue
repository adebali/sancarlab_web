<template>
  <div class="citations">
    <ol reversed type="1">
      <li v-for="item in insertHtml" v-html="item"></li>
    </ol>
  </div>
</template>


<script>

import fullCitationObject from '~/static/publications/publications.json'

export default {
  props: {
  },
  data () {
    return fullCitationObject
  },
  methods: {
    makeHtml: function (publicationObject) {
      let publicationLink = `https://www.ncbi.nlm.nih.gov/pubmed/${publicationObject.pmid}`
      if (publicationObject.doi !== undefined) {
        let doiLink = `http://dx.doi.org/${publicationObject.doi}`
        publicationLink = doiLink
      }
      // let linkRoot = doiRoot
      return `<p class=${publicationObject.pubYear}>
        ${this.computedAuthors(publicationObject.authors)}
        (${publicationObject.pubYear})<br /><b>
        <a target="_blank" href=${publicationLink}>${publicationObject.title}</a></b><br />
        <i>
          ${publicationObject.journal}
        </i>
        <i>${publicationObject.volume}</i>(${publicationObject.issue}),
        ${publicationObject.pages}
      </p>`
    },
    computedAuthors: function (authors) {
      let authorNames = []
      authors.forEach(function (entry) {
        authorNames.push(entry.name)
      })
      return authorNames.join(', ')
    }
  },
  // async asyncData ({ pmid }) {
  //   let { data } = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&id=${pmid}&retmode=json`)
  //   return { title: data }
  // },
  computed: {
    insertHtml: function () {
      let htmlList = []
      let self = this
      fullCitationObject.forEach(function (element) {
        htmlList.push(self.makeHtml(element))
      })
      return htmlList
    }
  }
}
</script>

<style scoped>
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
