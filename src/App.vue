
<script>

import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import Loader from "./components/partials/Loader.vue";
import {store} from './data/store';
import axios from 'axios';

export default {
  name:'App',
  data(){
    return{
      store
    }
  },

  components:{
    Header,
    Main,
    Footer,
    Loader
  },

  methods:{

        // Richiamo API per Popolari
        getApiPopular(){
      store.isLoad = true;
      axios.get(store.apiUrlPopular)

      .then(result => {
        store.isLoad = false;
        store.popularArray = result.data.results;
        console.log(store.popularArray)
      })
      .catch(error => {
        console.log(error.response)
      })
    },


    // Richiamo API per Film
    getApi(){
      store.isLoad = true;
      axios.get(store.apiUrl, {
        params:{
          query: store.searchTitle,
          
        }
      })
      .then(result => {
        store.isLoad = false;
        store.filmArray = result.data.results;
        console.log(store.filmArray)
      })
      .catch(error => {
        console.log(error.response)
      })
    },

    // Richiamo API Serie Tv
    getApiSeries(){
      store.isLoad = true;
      axios.get(store.apiUrlTv, {
        params:{
          query: store.searchTitle,
          
        }
      })
      .then(result => {
        store.isLoad = false;
        store.seriesArray = result.data.results;
        console.log(store.seriesArray)
      })
      .catch(error => {
        console.log(error.response)
      })
    },

},

mounted(){
  this.getApiPopular()

  }

}

</script>
<template>

  <Header @searchFilm="getApi" @searchSeries="getApiSeries" />

  <Loader v-if="store.isLoad"/>

  <div v-else>

  <Main />

  <Footer />

  </div>
  
</template>


<style lang="scss">

  @use './scss/main.scss' as *;

</style>