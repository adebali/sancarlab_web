<template>
  <div class="contactPage">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="parallax text-center">
        <h1><b>Contact Us</b></h1>
      </div>
    </div>
  </div>
    <div class="wrap contactPage">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2>
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
            UNC Biochemistry/Biophysics <br />
            3070 Genetic Medicine Bldg <br />
            120 Mason Farm Rd. CB#7260<br />
            Chapel Hill, North Carolina
            27599-7260
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <labmap></labmap>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2><span class="glyphicon glyphicon-phone-alt"></span> Lab Phone</h2>
          <h2>
          +1 (919) 962-7642
          </h2>
        </div>
      </div>
      <div class="row contact-form">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <section id="contact" class="content-section text-center">
                    <p>Feel free to let us know your thoughts and scientific questions!</p>
                    <p>Invitations for Dr. Sancar should be sent directly to <a href="mailto:carolyn_clabo@med.unc.edu">carolyn_clabo@med.unc.edu</a></p>
                    <div class="row">
                      <div class="col-md-12">
                        <form lass="form-horizontal" action="https://formspree.io/sancarlab@gmail.com" method="POST">
                          <div class="form-group">
                            <label for="exampleInputName2">Name</label>
                            <input type="text" name="name" class="form-control" id="exampleInputName2" placeholder="Your name">
                            <input type="hidden" name="_next" value="/contact?thanks" />
                            <input type="hidden" name="_subject" value="A message from SancarLab web-site" />
                            <input type="hidden" name="_format" value="plain" />
                            <input type="text" name="_gotcha" style="display:none" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail2">E-mail Address</label>
                            <input type="email" class="form-control" name="_replyto" placeholder="Your e-mail address">
                          </div>
                          <div class="form-group ">
                            <label for="exampleInputText">Your Message</label>
                          <textarea class="form-control" name="message" placeholder="Your message"></textarea>
                          </div>
                          <button type="submit" class="btn btn-default">Send Message</button>
                        </form>

                      </div>
                    </div>
            </section>
          </div>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
import labmap from '~/components/map.vue'

export default {
  components: {
    labmap
  }
}
</script>

<style scoped>

.contact-form {
  background: #e1e1e1;
  margin: 0px;
  margin-top:40px;
  margin-bottom:40px;
}

.form-group textarea{
 min-height: 100px;
 width: 100%;
 max-width: 100%;
}

.form {
  margin: 20px;
}

.btn {
  margin-bottom:20px;
}

 p {
  margin-top:20px;
}



.glyphicon {
    font-size: 30px;
}
/*
.row {
  margin-top: 20px;
} */

.parallax {
  background-image: url('http://huntconstructiongroup.com/wp-content/uploads/2013/07/unc-4.jpg');
}

.parallax h1 {
  /* background: rgba(0,0,0,0.2); */
}

</style>
