<template>
  <div>
    <div class="parallax text-center">
      <h1>People</h1>
    </div>
    <div class="wrap">
      <div class="row people-row">
        <person v-for="person in allPeople" v-bind:person="person" v-bind:key="person.lastname">
        <!-- {{ item }} -->
        </person>
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

</style>

<script>
  import labCrew from '~/static/people.json'
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
    }
  }
</script>
