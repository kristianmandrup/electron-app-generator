<template>
  <div>
    <landing-page></landing-page>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import LandingPage from './components/LandingPage'

  export default {
    components: {
      LandingPage
    },
    store
  }
</script>
<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic);
  @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    background-position: center;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
</style>