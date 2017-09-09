<template>
  <div>
    <body>
      <div class="off-canvas-wrapper">
        <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>

          <!-- OFF-CANVAS MENU -->

          <div class="off-canvas position-left" id="mobile-menu" data-off-canvas>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">People</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div class="off-canvas-content" data-off-canvas-content>

            <!-- MOBILE NAVIGATION -->

            <div class="title-bar show-for-small-only">
              <div class="title-bar-left">
                <button class="menu-icon" type="button" data-open="mobile-menu"></button>
                <!-- <span class="title-bar-title">MENU</span> -->

              </div>
              <div class="title-bar-center show-for-small-only">
                <!-- <img class="logo-image logo-center" src="img/xr_logo_white.png" width="75" height="92"></img> -->
              </div>
            </div>

            <!-- DESKTOP NAVIGATION -->
            <section class="hero">
              </section>
            <nav class="top-bar nav-desktop">
              <div class="wrap">
                <div class="top-bar-left">
                    <!-- <li class="name">
                        <a href="#"><img src="img/xr_log_white.png"/></a>
                </li> -->
                <div class="logo">
                    <!-- <img class="logo-image" src="img/xr_logo_white.png" width="75" height="92"></img> -->
                    <h3 class="site-logo">The Sancar Lab</h3>
                  </div>
                <!-- <img src="img/xr_log_white.png"></img> -->
                </div>
                <div class="top-bar-right">
                  <ul class="menu menu-desktop">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Publications</a></li>
                    <li><a href="#">People</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
              </div>
            </nav>

            <!-- HERO SECTION -->

            <!-- <section class="hero">
            </section>
              <div class="container">
                <div class="single-item">
                  <div class="frontSlide" index="0"><img src="img/bap.png"/></div>
                  <div class="frontSlide" index="1"><img src="http://via.placeholder.com/140x100"/></div>
                  <div class="frontSlide" index="2"><img src="http://via.placeholder.com/350x150"/></div>
                  <div class="frontSlide" index="3"><img src="http://via.placeholder.com/700x300"/></div>
                  <div class="frontSlide" index="4"><img src="http://via.placeholder.com/350x150"/></div>
                  <div class="frontSlide" index="5"><img src="http://via.placeholder.com/350x150"/></div>
                </div>
              </div> -->


            <!-- MAIN SECTION -->

            <section class="main">
                <div class="wrap row">
                  <div class="small-12 column">
                    <h1>Welcome to the Database of Repairomes!</h1>
                    <!-- <hr> -->
                    <blockquote>Out of six billion base pairs, pick out a spot and we'll tell you how it is repaired.<cite>Aziz Sancar, 2015 Nobel Laureate in Chemistry</cite></blockquote>
                    <p>This database serves the genomic maps of various DNA damage and repair of model organisms: Human, Mouse, Arabidopsis and E.coli. Damage and repair maps of the bulky adduct causing agents such as UV Cyclobutane pyrimidine dimers (CPDs), (6-4) Photoproduct, Cispatin, Oxiloplatin, Aflotoxin, Benzo[a]pyrene with a variety of treatments of different cell lines and strains are available. Start discovering now! </p>
                    <a href="#" class="button">Learn More on XR-seq</a>
                    <a href="#" class="button success">Learn More on Damage-seq</a>
                    <!-- <blockquote>This study is the most satisfying one I have done in the last 10 years. (on XR-seq)<cite>Aziz Sancar, 2015 Nobel Laureate in Chemistry</cite></blockquote> -->

                  </div>
                </div>
              <div class="wrap row">
                <div class="small-12 medium-6 column">
                  <h1>Start Genome Browsing</h1>
                  <hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <div class="wrap row">
                    <div class="small-6 medium-3 column image-hover-wrapper">
                        <a href="#">
                          <!-- <img src="img/human.png"></img> -->
                          <span class="image-hover-wrapper-reveal">
                              <p>Human<br><i class="fa fa-link" aria-hidden="true"></i></p>
                            </span>
                          </a>
                    </div>
                    <div class="small-6 medium-3 column image-hover-wrapper">
                          <a href="#">
                            <!-- <img src="img/mouse.png"></img> -->
                            <span class="image-hover-wrapper-reveal">
                              <p>Mouse<br><i class="fa fa-link" aria-hidden="true"></i></p>
                            </span>
                          </a>
                    </div>
                    <div class="small-6 medium-3 column image-hover-wrapper">
                          <a href="#">
                            <!-- <img src="img/Arabidopsis.png"></img> -->
                            <span class="image-hover-wrapper-reveal">
                              <p>Arabidopsis<br><i class="fa fa-link" aria-hidden="true"></i></p>
                            </span>
                          </a>
                    </div>
                    <div class="small-6 medium-3 column image-hover-wrapper">
                          <a href="#">
                            <!-- <img src="img/bacterium.png"></img> -->
                            <span class="image-hover-wrapper-reveal">
                              <p><i>E. coli</i><br><i class="fa fa-link" aria-hidden="true"></i></p>
                            </span>
                          </a>
                    </div>
                  </div>
                </div>
                <div class="small-12 medium-6 column">
                  <h1>DNA Damaging Agents</h1>
                  <hr>
                  <ul class="disc">
                    <li><a href="#">Ultraviolet</a></li>
                    <ul>
                      <li><a href="#">Cyclobutane pyrimidine dimer (CPD)</a></li>
                      <li><a href="#">(6-4)Photoproduct</a></li>
                    </ul>
                    <li><a href="#">Cisplatin</a></li>
                    <li><a href="#">Oxiloplatin</a></li>
                    <li><a href="#">Benzo[a]pyrene</a></li>
                    <li><a href="#">Aflotoxin</a></li>
                  </ul>
                </div>
              </div>
              <div class="wrap row">
                  <div class="small-12 medium-6 column">
                    <h1>Upload Your Data</h1>
                    <hr>
                    <p>Our ultimate aim is to collect all data sets relevant to DNA Damage and Repair. If you think you can contribute, let us know! We will be happy to organize your data, make them available and browsable to anyone!</p>
                    <a href="#" class="button">Contact Us</a>
                  </div>
                  <div class="small-12 medium-6 column">
                    <h1>Search Here</h1>
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
            </section>

            <!-- FOOTER -->

            <footer>
                <section class="hero">
                  </section>
              <div class="wrap row small-up-1 medium-up-3 margin20">
                <div class="column">
                  <h4>Contact Info</h4>
                  <hr>
                  <a href="mailto:adebali@unc.edu"><span>Email</span> adebali@unc.edu</a>
                </div>
                <div class="column">
                  <h4>Site Map</h4>
                  <hr>
                  <a href="#">Browse</a>
                  <a href="#">Search</a>
                  <a href="#">Download</a>
                  <a href="#">Help</a>
                </div>
                <div class="column">
                  <h4>Social Media :)</h4>
                  <hr>
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                </div>
              </div>
              <section class="hero">
                </section>
            </footer>

          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
</script>
