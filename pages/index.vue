<template>
  <div class="index-body">
  <welcome></welcome>
  <news></news>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
// import Logo1 from '~/components/Logo.1.vue'
import mynav from '~/components/mynav.vue'
import myfooter from '~/components/myFooter.vue'
import welcome from '~/components/welcome.vue'
import news from '~/components/news.vue'

export default {
  components: {
    Logo,
    mynav,
    myfooter,
    welcome,
    news
    // Logo1
  }
}
</script>

<style>
.index-body {
  height: 1500px;
}
</style>
