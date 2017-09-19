<template>

  <div>
    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
      <div class="row person">
        <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5 profilePhoto align-items-center">
          <img class="img-circle" :src="'/img/people/' + person.img"></img>
        </div>
        <div class="col-xs-7 col-sm-7 col-lg-7 col-md-7">
          <p class="name">{{person.firstname}} {{person.lastname}}<span v-if="person.degree">, {{person.degree}}</span></p>
          <hr/>
          <p>{{person.title}}</p>
          <p><i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
          {{person.email.address}}<i class="fa fa-at" aria-hidden="true"></i>{{person.email.domain}}
          <!-- {{this.email(person)}} -->
          </p>
          <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i>{{person.phone}}</p>
          <p class="social">
            <!-- <a v-if="person.email" :href="'mailto:' + person.email"> <i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a> -->
            <label class="keywords" v-for="item in person.research">{{item}}</label>
            <a target="_blank" v-if="person.linkedin" :href="'http://www.linkedin.com/in/' + person.linkedin"> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
            <a target="_blank" v-if="person.twitter" :href="'https://twitter.com/' + person.twitter"> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
          </p>
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
    width: 90%;
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
    margin-bottom:20px;
    margin-top:20px;
    min-height: 250px;
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
