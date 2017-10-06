<template>
  <div class="citations">
      <!-- <slider v-bind="value"></slider> -->
      <div class="timeline">
      	<vueslider  @callback="filterByDate" v-bind="timeline" v-model="timeline.value"></vueslider>
      </div>
      <input class="searchbox" type="search" v-model="searchString" placeholder="Search by Title, Author or Journal" />
    <ol reversed=true>
      <li v-for="item in insertHtml" v-html="item"></li>
    </ol>
  </div>
</template>


<script>

import fullCitationObject from '~/static/publications/publications.json'
import vueslider from '~/components/slidercomponent.vue'

// import '~/plugins/slider.js'

export default {
  components: {
    vueslider
  },
  props: {
  },
  data: function () {
    return {
      searchString: '',
      timeline: {
        value: this.defaultYears(fullCitationObject),
        width: '100%',
        tooltip: 'always',
        disabled: false,
        piecewise: true,
        piecewiseLabel: false,
        style: {
          'marginLeft': '0%'
        },
        data: this.years(fullCitationObject),
        piecewiseStyle: {
          'backgroundColor': '#ccc',
          'visibility': 'visible',
          'width': '12px',
          'height': '12px'
        },
        piecewiseActiveStyle: {
          'backgroundColor': '#4B9CD3'
        },
        labelActiveStyle: {
          'color': '#4B9CD3'
        }
      }
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
      let issueText
      if (publicationObject.issue !== undefined) {
        issueText = `(${publicationObject.issue}),`
      } else {
        issueText = ``
      }
      return `<p class=${publicationObject.pubYear}>
        ${this.computedAuthors(publicationObject.authors)}
        (${publicationObject.pubYear})<br /><b>
        <a target="_blank" href=${publicationLink}>${publicationObject.title}</a></b><br />
        <i>
          ${publicationObject.journal}
        </i>
        <i>${publicationObject.volume}</i>${issueText}
        ${publicationObject.pages}
      </p>`
    },
    computedAuthors: function (authors) {
      let authorNames = []
      authors.forEach(function (entry) {
        authorNames.push(entry.name)
      })
      return authorNames.join(', ')
    },
    filterByDate: function (years) {
      console.log(years)
      // this.timeline.values = years
      // console.log(this.timeline.values)
    },
    years: function (fullCitationObject) {
      let maxYear = 1900
      let minYear = 2100
      let yearRange = []
      fullCitationObject.forEach(function (item) {
        maxYear = Math.max(parseInt(item.pubYear), maxYear)
        minYear = Math.min(parseInt(item.pubYear), minYear)
      })
      for (let i = maxYear; i >= minYear; i--) {
        yearRange.push(i)
      }
      return yearRange
    },
    defaultYears: function (fullCitationObject) {
      let range = this.years(fullCitationObject)
      return [range[0], 1971]
      // return [range[0], range[0] - 15]
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
      let yearRange = this.timeline.value
      // console.log(this.timeline.value[0])

      // if (!searchString) {
      //   return articlesArray
      // }

      searchString = searchString.trim().toLowerCase()

      articlesArray = articlesArray.filter(function (item) {
        let searchField = item.title + ' ' + computedAuthors(item.authors) + ' ' + item.journal
        if (searchField.toLowerCase().indexOf(searchString) !== -1 & item.pubYear <= yearRange[0] & item.pubYear >= yearRange[1]) {
          return item
        }
      })
      // Return an array with the filtered data.
      return articlesArray
    }
  },
  head: {
    title: 'Sancar Lab'
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
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 18px;
    background-color: white;
    background-image: url('/img/searchicon.png');
    background-position: 10px 15px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }
  .timeline {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .timeline vueslider {
    width: 100%;
  }

</style>
