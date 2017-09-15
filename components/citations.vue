<template>
  <div class="citations">
      <input class="searchbox" type="text" v-model="searchString" placeholder="Search by Title, Author (Lastname), Journal or Year" />
    <ol reversed=true>
      <li v-for="item in insertHtml" v-html="item"></li>
    </ol>
  </div>
</template>


<script>

import fullCitationObject from '~/static/publications/publications.json'
// import Vue from 'vue'
// import mySearchFunction from '~/plugins/searchBox.js'

// Vue.use(mySearchFunction)

export default {
  props: {
  },
  data: function () {
    return {
      searchString: ''
    }
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
    allArticles: function () {
      return fullCitationObject
    },
    insertHtml: function () {
      let htmlList = []
      let self = this
      this.filteredArticles.forEach(function (element) {
        htmlList.push(self.makeHtml(element))
      })
      return htmlList
    },
    filteredArticles: function () {
      function computedAuthors (authors) {
        let authorNames = []
        authors.forEach(function (entry) {
          authorNames.push(entry.name)
        })
        return authorNames.join(', ')
      }

      let articlesArray = this.allArticles
      let searchString = this.searchString

      if (!searchString) {
        return articlesArray
      }

      searchString = searchString.trim().toLowerCase()

      articlesArray = articlesArray.filter(function (item) {
        let searchField = item.title + ' ' + computedAuthors(item.authors) + ' ' + item.pubYear + ' ' + item.journal
        if (searchField.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })
      // Return an array with the filtered data.
      return articlesArray
    }
  }
}
</script>

<style scoped>

 li{
    margin-bottom: 40px;
  }
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

  .searchbox {
    width: 100%;
    margin-bottom: 40px;
  }
</style>
