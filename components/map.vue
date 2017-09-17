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
  import * as VueGoogleMaps from '../node_modules/vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBZkiG_Va9T3Sx7U82nCrlZ3uS3C1WiPNw'
    }
  })

  export default {
    data () {
      return {
        center: {lat: 35.9013696, lng: -79.0542832},
        markers: [{
          position: {lat: 35.9013696, lng: -79.0542832}
        }]
      }
    }
  }
</script>
