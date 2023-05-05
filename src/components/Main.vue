<script>

import {store} from "../data/store";
import Card from "./Card.vue";

export default {
  name:'Main',
  components:{
    Card
  },
  data(){
    return {
    store,  
    }
  },
}

</script>
<template>

  <body>
    <div class="fmcontainer">

      <div class="container-fluid">

        <h1 v-if="store.filmArray.length > 0">Film</h1>
        <div class="row row-cols-5">
          <Card
              v-for
              ="film in store.filmArray"
              :key="film.id"
              :image="film.poster_path"
              :title="film.title"
              :original_title="film.original_title"
              :original_language="film.original_language"
              :vote_average="Math.ceil(film.vote_average/2)" />
            
        </div>

      </div>
      <div class="container-fluid">

        <h1 v-if="store.seriesArray.length > 0">Serie TV</h1>
        <div class="row row-cols-5">
          <Card
              v-for
              ="serie in store.seriesArray"
              :key="serie.id"
              :image="serie.poster_path"
              :title="serie.name"
              :original_title="serie.original_name"
              :original_language="serie.original_language"
              :vote_average="Math.ceil(serie.vote_average/2)" />
            
        </div>

      </div>

      <div class="container-fluid">

        <h1 v-if="store.popularArray.length > 0">Popolari</h1>
        <div class="row row-cols-5">
          <Card
              v-for
              ="film in store.popularArray"
              :key="film.id"
              :image="film.poster_path"
              :title="film.title"
              :original_title="film.original_title"
              :original_language="film.original_language"
              :vote_average="Math.ceil(film.vote_average/2)" />
              
        </div>
      </div>

    </div>



  </body>
  


  
</template>


<style lang="scss" scoped>

  @use '../scss/main.scss' as *;

  body{
    background-color: $bg-secondary;
    color: white; 
  }

</style>