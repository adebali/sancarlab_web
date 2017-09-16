<template>

  <div>
    <div class="col-xs-7 col-sm-7 col-lg-6 col-md-6">
      <div class="row person">
        <div class="col-xs-5 col-sm-5 col-lg-5 col-md-5">
          <img class="img-circle" :src="person.img"></img>
        </div>
        <div class="col-xs-7 col-sm-7 col-lg-7 col-md-7">
          <p class="name">{{person.firstname}} {{person.lastname}}</p>
          <hr/>
          <p>{{person.title}}</p>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  props: ['person']
}
</script>

<style scoped>
  img {
    width: 100%;
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
    margin-bottom:50px;
    margin-top:50px;
  }
</style>
