<template>
  <div id="app">
    <!-- <test msg="Merhaba"></test> -->
    <h1>Publications</h1>
    <pubmed id="28798238"></pubmed>
    <pubmed id="28607063"></pubmed>
    <pubmed id="28607059"></pubmed>
    <pubmed id="28484044"></pubmed>
    <pubmed id="28167766"></pubmed>
    <pubmed id="27802571"></pubmed>
    <pubmed id="27049771"></pubmed>
    <pubmed id="26890452"></pubmed>
    <pubmed id="25527097"></pubmed>

  </div>
</template>

<script>
import Test from '~/components/test'
import Pubmed from '~/components/pubmed'

export default {
  name: 'app',
  components: {
    Test,
    Pubmed
  }
}
</script>

<style>
