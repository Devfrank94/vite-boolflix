
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
    getApi(){
      store.isLoad = true;
      console.log("getApi", store.apiUrl)
      console.log("getApi", store.searchTitle)
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

},

mounted(){
    // this.getApi();
    // this.getCardTypes()
  }

}

</script>
<template>

  <Header @searchFilm="getApi" />

  <Loader v-if="store.isLoad"/>

  <div v-else>

  <Main />

  <Footer />

  </div>
  
</template>


<style lang="scss">

  @use './scss/main.scss' as *;

</style>