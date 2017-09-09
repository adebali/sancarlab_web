<template>
  <div id="app" class="wrap">
    <!-- <test msg="Merhaba"></test> -->
    <h1>Publications</h1>


    <!-- <test></test> -->
    <!-- <div v-for="pubObject in pubObjects">
        <span v-html="citation(pubObject)"></span>
    </div> -->

    <!-- <div v-for="PMID in getYear('2017')">
    <pubmed v-bind:id="PMID"></pubmed>
    </div> -->
    <!-- <div v-el:"yearPicker"></div> -->
    <!-- <nouislider
    :show-tooltips="false"
    :slider-low-limit="0"
    :slider-start-value.sync="startValue"
    :slider-end-value.sync="endValue"
    :slider-high-limit="10"
    :slider-step="1"></nouislider> -->
    <div id="colorpicker">
      <div class="sliders" id="red"></div>
      <div class="sliders" id="green"></div>
      <div class="sliders" id="blue"></div>

      <div class="result"></div>
      <!-- <p> {{message}} </p> -->
    </div>


    <pubmed id="28607063"></pubmed>
    <pubmed id="28607059"></pubmed>
    <pubmed id="28484044"></pubmed>
    <pubmed id="28167766"></pubmed>
    <pubmed id="27802571"></pubmed>
    <pubmed id="27049771"></pubmed>
    <pubmed id="26890452"></pubmed>
    <pubmed id="25527097"></pubmed>


  </div>
</template>

<script>
// import Test from '~/components/test'
import Pubmed from '~/components/pubmed'
// import ncbi from 'node-ncbi'
import pmids from '~/static/data/publications.json'
// import noUiSlider from 'nouislider'

// import Vue from  'vue'
// import { Test } from 'vue-nouislider'

// Vue.component('test', Test)

// Vue({
//   el: '#colorPicker',
//   data: {
//     message: 'Hello World!'
//   }
// })

export default {
  name: 'app',
  components: {
    Pubmed
  },
  data () {
    return {
      items: pmids,
      firstItem: pmids[0],
      pubObjects: [],
      first: 3,
      second: 2,
      third: 40,
      slider: {
        min: 0,
        max: 100,
        start: 40,
        step: 1
      }
    }
  },
  // mounted () {
  //   this.Slider = document.getElementById('slider333')
  //   console.log(this.Silder)
  //   console.log('-----XXXXX')
  // },
  computed: {
    total: function () {
      return parseInt(this.first) * parseInt(this.second) * parseInt(this.third)
    }
  },
  methods: {
    // updateSlider: function () {
    //   this.Slider.noUiSlider.set(this.third)
    // },
    getYear: function (askedYear) {
      return this.items.filter(function (item) {
        return item.year === askedYear
      })
    },
    citation: function (pubObject) {
      return `<p class=${pubObject.pubYear}>
        ${pubObject.authors}
        (${pubObject.pubYear})<br /><b>
        <a href=https://www.ncbi.nlm.nih.gov/pubmed/${pubObject.id}>${pubObject.title}</a></b><br />
        <i>
          ${pubObject.journal}
        </i>
        <i>${pubObject.volume}</i>(${pubObject.issue}),
        ${pubObject.pages}
        ${pubObject.doi}
      </p>`
    }
  }
  // ready: function () {
  //   noUiSlider.create(this.Slider, {
  //     start: this.slider.start,
  //     step: this.slider.step,
  //     range: {
  //       'min': this.slider.min,
  //       'max': this.slider.max
  //     }
  //   })
  // }
//   created: function () {
//     const pubmed = ncbi.pubmed
//     console.log(this.items)
//     let myArray = []
//     let theItems = this.items
//     theItems.forEach(function (entry) {
//       console.log(entry)
//       console.log(this)

//       myArray.push(
//       pubmed.summary(entry.id).then((paper) => {
//           let myPublicationObject = {}

//           myPublicationObject.title = paper.title
//           myPublicationObject.authors = paper.authors
//           myPublicationObject.pubYear = paper.pubDate.split('/')[0]
//           myPublicationObject.journal = paper.raw.fulljournalname
//           myPublicationObject.volume = paper.raw.volume
//           myPublicationObject.issue = paper.raw.issue
//           myPublicationObject.pages = paper.raw.pages
//           myPublicationObject.doi = paper.raw.elocationid
//           console.log(paper)
//           console.log(this)
//           // this.pubObjects.push(myPublicationObject)

//           return myPublicationObject
//         })
//       )
//     })
//     console.log('---')
//     console.log(myArray)
//     console.log(myArray[0].PromiseValue)
//     this.pubObjects = myArray

//     // this.items = data
//   }
//   // created: function () {
//   //   this.pubObjects.push(this.items[0])
//   // }
}

// var range = this.$$.yearPicker
// console.log(range)
// range.style.height = '400px';
// range.style.margin = '0 auto 30px';

// noUiSlider.create(range, {
//     start: [ 1450, 2050, 2350, 3000 ], // 4 handles, starting at...
//     margin: 300, // Handles must be at least 300 apart
//     limit: 600, // ... but no more than 600
//     connect: true, // Display a colored bar between the handles
//     direction: 'rtl', // Put '0' at the bottom of the slider
//     orientation: 'vertical', // Orient the slider vertically
//     behaviour: 'tap-drag', // Move handle on tap, bar is draggable
//     step: 150,
//     tooltips: true,
//     format: wNumb({
//       decimals: 0
//     }),
//     range: {
//       'min': 1300,
//       'max': 3250
//     },
//     pips: { // Show a scale with the slider
//       mode: 'steps',
//       stepped: true,
//       density: 4
//     }
// })
// this.Slider.noUiSlider.on('update', function (values, handle) {
//   this.third = values[handle]
// })
</script>

<style>
 .publication{
    margin: 20px 20;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
  #red, #green, #blue {
    margin: 10px;
    display: inline-block;
    height: 200px;
  }

  #colorpicker {
    height: 240px;
    width: 310px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #BFBFBF;
  }

  #result {
    margin: 60px 26px;
    height: 100px;
    width: 100px;
    display: inline-block;
    vertical-align: top;
    color: rgb(127, 127, 127);
    background: rgb(127, 127, 127);
    border: 1px solid #fff;
    box-shadow: 0 0 10px;
  }

  #red .noUi-connect {
    background: #c0392b;
  }

  #green .noUi-connect {
    background: #27ae60;
  }

  #blue .noUi-connect {
    background: #2980b9;
  }
</style>
