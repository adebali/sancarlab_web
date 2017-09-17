<template>
  <div>
    <div class="parallax text-center">
      <h1><b>People</b></h1>
    </div>
    <div class="wrap">
      <div class="row people-row">
        <person v-for="person in allPeople" v-bind:person="person" v-bind:key="person.lastname">
        <!-- {{ item }} -->
        </person>
      </div>
      <!-- <div id="flickrembed"></div>
      <script src='https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=www.flickr.com/photos/155072257@N08/albums/72157689147199595&sort=0&by=album&theme=default&scale=fit&limit=100&skin=default&autoplay=false'></script> -->

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

</style>

<script>
  import labCrew from '~/static/people/people.json'
  import person from '~/components/person.vue'

  export default {
    components: {
      person
    },
    methods: {
    },
    computed: {
      allPeople: function () {
        return labCrew
      }
    },
    footer: {
      script: [
      ]
    }
  }
</script>
