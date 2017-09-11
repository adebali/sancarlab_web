<template>
  <div class="wrap contactPage">
    <h1 class="text-center">Contact Us</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 contactColumn">
        <section id="contact" class="content-section text-center">
                  <p>Feel free to let us know your thoughts and questions!</p>
                  <div class="row">
                    <div class="col-md-12">
                      <form lass="form-horizontal" action="https://formspree.io/sancarlab@gmail.com" method="POST">
                        <div class="form-group">
                          <label for="exampleInputName2">Name</label>
                          <input type="text" name="name" class="form-control" id="exampleInputName2" placeholder="Your name">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail2">E-mail Address</label>
                          <input type="email" class="form-control" name="email" placeholder="Your e-mail address">
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
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
           <h3>Our Address</h3>
                      <p>
                        3070 Genetic Medicine Bldg <br />
                        120 Mason Farm Rd. <br />
                        Chapel Hill, North Carolina
                        27599-7260
                      </p>
        </div>
      </div>
      <labmap></labmap>
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

<style>
.contactPage {
  height:1000px;
}

.contactColumn {
  background: #e1e1e1;
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

.contactColumn p {
  margin-top:20px;
}

h1 {
  margin: 40px;
}
</style>
