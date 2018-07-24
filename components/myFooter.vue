<template>
  <div class="row">
  <div class="footer0">
    <div class="container-fluid"></div>
    <!--footer-->
    <footer class="footer1 wrap">
      <div class="container">
        <div class="row"><!-- row -->
          <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 extraLinks"><!-- widgets column center -->
            <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"><!-- widgets column center -->
                <p class="active"><a href="/"><i class="fa fa-home fa-lg" aria-hidden="true"></i> Home</a></p>
                <p><a href="/research"><i class="fa fa-flask fa-lg" aria-hidden="true"></i> Research</a></p>
                <p><a href="/people"><i class="fa fa-users fa-lg" aria-hidden="true"></i> People</a></p>
                <p><a href="/publications"><i class="fa fa-book fa-lg" aria-hidden="true"></i> Publications</a></p>
              <!-- <img src="/img/ramsey.png"></img> -->
            </div>
                        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 extraLinks"><!-- widgets column center -->
                <p><a href="/honors"><i class="fa fa-trophy fa-lg" aria-hidden="true"></i> Honors</a></p>
                <p><a href="/press"><i class="fa fa-newspaper-o fa-lg" aria-hidden="true"></i> Press</a></p>
                <p><a href="/contact"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i> Contact</a></p>
                <p><a href="https://giving.dev.unc.edu/donate?&p=mfbb&f=303165&a=100.00"><i class="fa fa-gift fa-lg" aria-hidden="true"></i> Make a Gift</a></p>
                <!-- <p><a href="https://www.med.unc.edu/biochem" target="_blank">Dept. of Biochemistry & Biophysics</a></p> -->

                <!-- <li><a href="/"><i class="fa fa-picture-o fa-lg" aria-hidden="true"></i> Lab Album</a></li> -->
            </div>
                    <!-- <li><a href="/"><i class="fa fa-bullhorn fa-lg" aria-hidden="true"></i> Lab News</a></li> -->
                    <!-- <li><a href="/"><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i> Chapel Hill</a></li> -->
          </div>
        <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 unc-logo"><!-- widgets column left -->
          <a href="http://unc.edu" target="_blank"><img class="img-responsive" src="/img/UNC_logo_white.png"></img></a> <br />

        </div><!-- widgets column left end -->

          <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 white-text text-center extraLinks"><!-- widgets column center -->
          <p><a href="https://www.med.unc.edu/biochem" target="_blank">Dept. of Biochemistry & Biophysics</a></p>
          <p><a href="https://unclineberger.org" target="_blank">UNC Lineberger Comprehensive Cancer Center</a></p>
          <p><a href="http://sancar.org" target="_blank">Aziz & Gwen Sancar Foundation</a></p>
          </div>
        </div>
      </div>
      <hr />
      <div class="container copyright">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="text-center">
              <p>
              Copyright © Sancar Lab 2018 - developed by <a href="http://adebalilab.org/team/adebali/">Ogun Adebali</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--header-->

  </div>
  </div>
</template>

<style scoped>


/************************************************************
*************************Footer******************************
*************************************************************/

@import url(http://fonts.googleapis.com/css?family=Fjalla+One);
@import url(http://fonts.googleapis.com/css?family=Gudea);
.footer1 {
	padding-top: 0px;
	padding-right: 0;
	padding-bottom: 0px;
	padding-left: 0;/*	border-top-width: 4px;
	border-top-style: solid;
	border-top-color: #003;*/
}

.footer0 {
  margin-top:40px;
  background: #13294b repeat scroll left top;
  border: 10px #4B9CD3;
  border-style: solid none;
}

.title-widget {
	color: #E1E1E1;
	font-size: 20px;
	font-weight: 300;
	line-height: 1;
	position: relative;
	text-transform: uppercase;
	font-family: 'Fjalla One', sans-serif;
	margin-top: 0;
	margin-right: 0;
	margin-bottom: 25px;
	margin-left: 0;
	padding-left: 28px;
}

.title-widget::before {
  background-color: #4b9cd3;
  content: "";
  height: 22px;
  left: 0px;
  position: absolute;
  top: -2px;
  width: 5px;
}



.widget_nav_menu ul {
    list-style: outside none none;
    padding-left: 0;
}

.widget_archive ul li {
    background-color: rgba(0, 0, 0, 0.3);
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    top: 7px;
    width: 3px;
}


.widget_nav_menu ul li {
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
	position: relative;
    text-transform: uppercase;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 7px;
    padding-bottom: 7px;
	width:95%;
}



.title-median {
    color: #636363;
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 15px;
    text-transform: uppercase;
	font-family: 'Fjalla One', sans-serif;
}

.footerp p {font-family: 'Gudea', sans-serif; }


#social:hover {
    			-webkit-transform:scale(1.1);
-moz-transform:scale(1.1);
-o-transform:scale(1.1);
			}
			#social {
				-webkit-transform:scale(0.8);
                /* Browser Variations: */
-moz-transform:scale(0.8);
-o-transform:scale(0.8);
-webkit-transition-duration: 0.5s;
-moz-transition-duration: 0.5s;
-o-transition-duration: 0.5s;
			}
/*
    Only Needed in Multi-Coloured Variation
                                               */
			.social-fb:hover {
				color: #3B5998;
			}
			.social-tw:hover {
				color: #4099FF;
			}
			.social-gp:hover {
				color: #d34836;
			}
			.social-em:hover {
				color: #f39c12;
			}
			.nomargin { margin:0px; padding:0px;}





.footer-bottom {
    background-color: #15224f;
    min-height: 30px;
    width: 100%;
}
.copyright {
    line-height: 20px;
    min-height: 5px;
    padding: 0;
    color: #E1E1E1;
}

.copyright p, .copyright a{
  font-size: 14px;
}

.copyright a {
    color: #E1E1E1;
}

.copyright a:hover {
    text-decoration: none;
    color: white;
}

.design {
    color: #fff;
    line-height: 30px;
    min-height: 30px;
    padding: 7px 0;
    text-align: right;
}
.design a {
    color: #fff;
}

.white-text p {
  color: #ffffff;
}

/* .white-text {
  border:solid;
} */

.unc-logo img {
  width: 100%;
  margin: 0 auto;
  /* border: solid; */
}

.footerMenu li a, .extraLinks p a {
  color:gray;
  color:gray;
  font-size: 0.7em;
  text-decoration: none;
}
.footerMenu li a:hover, .extraLinks p a:hover {
  color: white;
}

.footerMenu li, .extraLinks p {
  margin: 0px;
}
.footerMenu {
  overflow: auto;
}



/************************************************************
*************************Footer******************************
*************************************************************/
</style>
