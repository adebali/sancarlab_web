<template>
  <div class="test">
    <input type="text" v-model="title2"><br />
    <span v-html="title"></span>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>
    <p><h2>{{title2}}</h2></p>
    <!-- <p v-text="user.firstName"></p> -->
    <ul>
      <li v-for="item in items">{{item.name}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greet</button>
    <br />
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"></input>
    <hr />
    <label> First Name: </label><input type="text" v-model="user.firstName">
    <br />
    <label> Last Name: </label><input type="text" v-model="user.lastName">
    <h3> {{fullName}} </h3>
    <h3> {{totalCount}} </h3>
    <h2> {{msg}} </h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: '<h1>Hello World</h1>',
      title2: 'Hello World',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      showName: true,
      items: [
        {name: 'Item One'},
        {name: 'Item Two'},
        {name: 'Item Three'},
        {name: 'Item Four'}
      ]
    }
  },
  methods: {
    greet: function (greeting) {
      alert(greeting)
    },
    pressKey: function (e) {
      console.log(e.target.value)
    },
    enterHit: function () {
      console.log('You hit enter')
    }
  },
  computed: {
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName
    },
    totalCount: function () {
      return Object.keys(this.items).length
    }
  },
  created: async function () {
    let { data } = await axios.get(`http://jsonplaceholder.typicode.com/users`)
    console.log(data)
    this.items = data
  }
}
</script>

<style scoped>

</style>
