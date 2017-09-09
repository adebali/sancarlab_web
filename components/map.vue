<template>
  <gmap-map
    :center="center"
    :zoom="14"
    style="width: 100%; height: 400px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.gmaps
    }
  })

  export default {
    data () {
      return {
        center: {lat: 35.901844, lng: -79.054034},
        markers: [{
          position: {lat: 35.901844, lng: -79.054034}
        }]
      }
    }
  }
</script>
