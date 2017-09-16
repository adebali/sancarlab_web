<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid wrap">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Sancar Lab</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><nuxt-link to="/">Home</nuxt-link><span class="sr-only">(current)</span></li>
            <li><nuxt-link to="/people">People</nuxt-link></li>
            <li><nuxt-link to="/research">Research</nuxt-link></li>
            <li><nuxt-link to="/publications">Publications</nuxt-link></li>
            <li><nuxt-link to="/press">Press</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* @import url(http://fonts.googleapis.com/css?family=Fjalla+One); */
/* @import '../node_modules/typeface-fjalla-one/index.css'; */
/* @import url(http://fonts.googleapis.com/css?family=Gudea); */

.navbar-default .navbar-nav>.active>a{
  /* background-color: rgba(255,255,255,0.05); */
  background-color: rgba(0,0,0,0);
  color: white;
  /* background-color: rgba(255,255,255,.05); */

  /* border-bottom: 7.5px #4B9CD3;
  border-style: none none solid none; */
  /* background-color: rgba(19,41,75,0.5) */
}
.navbar-default .navbar-nav>.active>a:focus {
  background-color: transparent;

}
.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>.active>a:hover {
  background-color: rgba(255,255,255,.05);
  color:white;
    border-bottom: 5px #4B9CD3;
  border-style: none none solid none;
  /* background-color: rgba(19,41,75,0.5) */
}

.navbar-default {
  color: #4B9CD3;
	font-family: 'Fjalla One', sans-serif;
  margin-bottom: 0px;
}

.navbar-brand {
  font-size: 30px;
}

.navbar-default .navbar-brand:focus, .navbar-default .navbar-brand:hover {
  color: #4B9CD3;
}

.nav>li>a {
  padding-bottom:10px;
  padding-top:15px;
}

.navbar-default .navbar-nav>li>a:focus {
  color:#ffffff;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus{
  color: #ffffff;
}
</style>
