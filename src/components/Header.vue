<script>
import {store} from "../data/store";

export default {
  name: "Header",
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <header>

    <div class="d-flex">
      <div class="container-fluid d-flex al-item-cent">
        <img src="../assets/img/logo-boolflix.png" alt="Logo">

          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <button class="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Serie Tv</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Film</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Originali</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Aggiunti di recente</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">La mia Lista</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
        <!-- submit.prevent disattiva invio del submit -->
      <form class="fm-form d-flex al-item-cent" @submit.prevent role="search">
        <input v-model="store.searchTitle" @keyup.enter="$emit('searchFilm'), $emit('searchSeries')" class="form-control me-3" type="search" placeholder="Cerca un film o una serie Tv" aria-label="Search">
        <button class="btn me-5 text-bg-light" @click="$emit('searchFilm'), $emit('searchSeries')" type="submit">Cerca</button>
      </form>
    </div>

  </header>



</template>


<style lang="scss" scoped>

@use '../scss/main.scss' as *;


header{

  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,45,47,1) 25%); 
  
  .fm-form{
    
    .form-control{
      width: 250px;
    }

  }

.container-fluid{
  img{
    width: 100px;
    margin: 1.5rem .5rem;
  }

  .navbar{

    .navbar-toggler{
      color: white;
    }


    a{
      color: rgb(202, 202, 202);
      font-size: .8rem;
      font-weight: 600;

      &:hover{
        color: white;
      }
    }


  }

}


}

</style>