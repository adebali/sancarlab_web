<template>
  <range-slider
    class="slider"
    min="1981"
    max="2017"
    step="1"
    v-model="sliderValue">
  </range-slider>
</template>

<script>
// import RangeSlider from 'vue-range-slider'
// // you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css'

// import '~/plugins/components.js'
if (process.browser) {
  require('~/plugins/components.js')
}

export default {
  data () {
    return {
      sliderValue: 50
    }
  },
  components: {
    // RangeSlider
  }
}
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 100%;
}
</style>
