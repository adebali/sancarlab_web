<template>
  <div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="parallax text-center">
        <h1><b>People</b></h1>
      </div>
    </div>
  </div>
    <div class="wrap">
      <div class="row people-row">
        <person v-for="person in currentMembers" v-bind:person="person" v-bind:key="person.lastname">
        <!-- {{ item }} -->
        </person>
      </div>

      <div id="flickrembed"></div>
      <album></album>

    </div>
    <div class="wrap">
      <div class="row people-row">
        <h1 class="text-center alumni-header">Recent Alumni</h1>
        <div class="alumni">
        <alumn v-for="person in alumni" v-bind:person="person" v-bind:key="person.lastname">
        <!-- {{ item }} -->
        </alumn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallax {
    background-image: url('/img/people_1.jpeg');
      /* height:200px; */
}

.parallax h1 {
  /* background: rgba(0,0,0,0.2); */
}

.people-row {
  margin-bottom: 0px;
  margin-top: 0px;
}

.alumni-header {
  color: #4b9cd3;
  background: #13294b;
  padding: 10px;
  margin-top:40px;
  margin-bottom:40px;
}

.alumni {
  background: rgba(0,0,0,0.4);
}

</style>

<script>
  import labCrew from '~/static/people/people.json'
  import person from '~/components/person.vue'
  import alumn from '~/components/alumn.vue'
  import album from '~/components/album.vue'
  // require('~/plugins/album.js')

  // if (process.BROWSER_BUILD) {
  //   const $ = require('jquery')
  //   console.log('BrowserBuild')
  //   $(document).ready(function () {
  //     $.getScript('https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=www.flickr.com/photos/155072257@N08/albums/72157688639714856&sort=0&by=album&theme=default&scale=fit&limit=100&skin=default&autoplay=false')
  //   })
  // } else {
  //   console.log('no browaer build')
  // }

  export default {
    components: {
      person,
      alumn,
      album
    },
    head: {
      script: [
      ]
    },
    methods: {
      sort: function (a, b) {
        if (a.lastname > b.lastname) {
          return 1
        }
        if (a.lastname < b.lastname) {
          return -1
        }
        return 0
      },
      sortYear: function (a, b) {
        if (a.farewellDate < b.farewellDate) {
          return 1
        }
        if (a.farewellDate > b.farewellDate) {
          return -1
        }
        return 0
      }
    },
    computed: {
      allPeople: function () {
        return labCrew.sort(this.sort)
      },
      currentMembers: function () {
        let currentMemberList = labCrew.filter(function (item) {
          if (item.status === 'current') {
            return item
          }
        })
        return currentMemberList.sort(this.sort)
      },
      alumni: function () {
        let alumniList = labCrew.filter(function (item) {
          if (item.status === 'alumn') {
            return item
          }
        })
        return alumniList.sort(this.sortYear)
      }
    },
    footer: {
      script: [
      ]
    }
  }
</script>
