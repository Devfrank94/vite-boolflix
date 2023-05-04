
<script>

import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import Loader from "./components/partials/Loader.vue";
// import axios from 'axios';
// import {store} from './data/store';

export default {
  name:'App',
  components:{
    Header,
    Main,
    Footer,
    Loader
  }
}
</script>
<template>

  <Header />

  <Loader />

  <div>

  <Main />

  <Footer />

  </div>
  
</template>


<style lang="scss">

  @use './scss/main.scss' as *;

</style>