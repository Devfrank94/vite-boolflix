<script>
export default {
  name: 'Card',
  props:{
    image: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number
  }
}
</script>

<template>
  <div class="fm-card col mb-3">

    <!--  -->
    <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="original_title" :title="original_title">
    <img v-else src="../assets/img/No-Image-Placeholder.png" :alt="original_title" :title="original_title">

      <div class="info pt-2">
        <h4 class="py-1">{{ title }}</h4>
        <h6 class="py-1">{{ original_title }}</h6>
        <span>Lingua:</span>
          <img :src="`/src/assets/img/flags/language-${original_language}.svg`" class="ms-2" :alt="original_language" :title="original_language">

        <p class="py-1">{{ vote_average }}</p>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

.fm-card{
  text-align: center;
  

  .info{
    background-color: gray;
    min-height: 130px;

    h5{
      color: white;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

  }

}


</style>