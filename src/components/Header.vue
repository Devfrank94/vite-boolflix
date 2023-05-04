<script>

export default {
  name: "Header",
  data(){
    return{
      
    }
  }
}
</script>

<template>

  <header>

    <div class="container-fluid d-flex al-item-cent">
        <img src="../assets/img/logo-boolflix.png" alt="Logo">

        <nav class="navbar al-item-cent navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Serie Tv</a>
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

  </header>



</template>


<style lang="scss" scoped>

@use '../scss/main.scss' as *;

.container-fluid{
  img{
    width: 100px;
    margin: 1.5rem .5rem;
  }

}

</style>