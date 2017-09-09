<template>
  <div class="wrap contact">
    <section id="contact" class="content-section text-center">
        <div class="contact-section">
            <div class="container">
              <h2>Contact Us</h2>
              <p>Feel free to shout us by feeling the contact form or visiting our social network sites like Fackebook,Whatsapp,Twitter.</p>
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <form lass="form-horizontal" action="https://formspree.io/sancarlab@gmail.com" method="POST">
                    <div class="form-group">
                      <label for="exampleInputName2">Name</label>
                      <input type="text" name="name" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail2">Email</label>
                      <input type="email" class="form-control" name="email" placeholder="Your email">
                    </div>
                    <div class="form-group ">
                      <label for="exampleInputText">Your Message</label>
                     <textarea class="form-control" name="message" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-default">Send Message</button>
                  </form>
                  <h3>Our Address</h3>
                  <p>
                    3070 Genetic Medicine Bldg <br />
                    120 Mason Farm Rd. <br />
                    Chapel Hill, North Carolina
                    27599-7260
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <!-- <labmap></labmap> -->
  </div>
</template>

<script>
// import labmap from '~/components/map.vue'

export default {
  components: {
    // labmap
  }
}
</script>

<style>
.contact {
  height:1000px;
}
</style>
