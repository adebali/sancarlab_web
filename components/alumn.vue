<template>

  <div>
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      <div class="row person">
        <div class="col-xs-3 col-sm-3 col-lg-3 col-md-3 profilePhoto align-items-center">
          <img class="img-circle center-block" :src="'/img/people/' + person.img"></img>
        </div>
        <div class="col-xs-9 col-sm-9 col-lg-9 col-md-9 profilePhoto align-items-center">
          <p class="name">{{person.firstname}} {{person.lastname}}<span v-if="person.degree">, {{person.degree}}</span></p>
          <hr>
           <p>{{person.title}} in Sancar Lab</p>
           <p v-if="person.move && person.move">Next career move: {{person.currentTitle}}, {{person.move}}</p>

        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  props: ['person'],
  methods: {
    email: function (person) {
      return person.email.address + '[AT]' + person.email.domain.replace(/\./g, '(DOT)')
    }
  }
}
</script>

<style scoped>
  img {
    width: auto;
    height: 150px;
  }
  p {
    font-size: 0.9em;
  }
  .name {
    margin: 0 0 0 0px;
    font-size:1.1em;
  }
  hr {
    margin-bottom: 5px;
    margin-top: 0;
  }
  .person {
    margin-bottom:15px;
    margin-top:15px;
    height: 10px;
    /* max-height: 150px; */
  }
  .keywords {
    margin-right:5px;
    margin-left:5px;
    background-color:#13294b;
    color: white;
    padding:0 5px;
    font-size: 14px;
  }
  i {
    margin: 0 5px;
  }
  .profilePhoto {
    /* display: inline-block;
    /* float: none; */
    /* vertical-align: middle;  */
  }
  .social i {
    color: #13294b;
  }
  .fa-at {
    margin:0 0px;
  }
</style>
