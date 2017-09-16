<template>
	<div>
		<vueslider v-bind="timeline" v-model="timeline.value"></vueslider>
	</div>
</template>
<script>

import vueslider from '~/components/slidercomponent.vue'

export default {
  components: {
    vueslider
  },
  data () {
    return {
      timeline: {
        value: '2016-10-01',
        width: '80%',
        tooltip: 'always',
        disabled: false,
        piecewise: true,
        piecewiseLabel: true,
        style: {
          'marginLeft': '10%'
        },
        data: [
          '2016-10-01',
          '2016-10-02',
          '2016-10-03',
          '2016-10-04',
          '2016-10-05',
          '2016-10-06',
          '2016-10-07'
        ],
        piecewiseStyle: {
          'backgroundColor': '#ccc',
          'visibility': 'visible',
          'width': '12px',
          'height': '12px'
        },
        piecewiseActiveStyle: {
          'backgroundColor': '#3498db'
        },
        labelActiveStyle: {
          'color': '#3498db'
        }
      }
    }
  }
}
</script>
