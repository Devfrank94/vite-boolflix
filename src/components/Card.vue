<script>
export default {
  name: 'Card',
  props:{
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number
  }
}
</script>

<template>
  <div class="fm-card col mb-3">
    <!-- <img :src="img[0].image_url" :alt="name"> -->
    <div class="info pt-2">
      <h4 class="py-1">{{ title }}</h4>
      <h6 class="py-1">{{ original_title }}</h6>
      <h6 class="py-1">{{ original_language }}</h6>
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