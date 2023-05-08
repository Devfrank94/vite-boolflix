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
<div class="wrapper">
  <div class="fm-card col mb-3">

    <!-- In questa condizione se non esiste immagine poster viene sotituita con immagine default(No image) -->
    <div class="front">
      <img v-if="image != null" :src="`https://image.tmdb.org/t/p/w342${image}`" :alt="original_title" :title="original_title">
      <img v-else src="../assets/img/No-Image-Placeholder.png" :alt="original_title" :title="original_title">
    </div>
      <div class="cont-info p-2 d-flex j-cont-cent">
        <div class="info pt-3 al-item-cent">
          <h1 class="py-1">{{ title }}</h1>
          <h2 class="py-1">{{ original_title }}</h2>

          <span>Lingua:</span>
            <img :src="`/src/assets/img/flags/language-${original_language}.svg`" class="ms-2 flag" :alt="original_language" :title="original_language">

            <!-- Media voti abbiamo il ciclo che gestisce le stelle piene -->
          <div class="me-2 mt-2">Media voti:
            <span v-for="starSolid in vote_average" :key="starSolid"><i class="fa-solid fa-star" style="color: #f2ca28;"></i></span>

            <!-- Media voti abbiamo il ciclo che gestisce le stelle vuote -->
            <span v-for="starEmpty in (5-vote_average)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

.fm-card{
  text-align: center;
  cursor: pointer;
  
  img{
    height: 445px;
  }

  

  .cont-info{
    background-color: gray;

    .info{
      min-height: 250px;
  
      h1{
        font-size: 1.6rem;
      }
  
      h2{
        font-size: 1.2rem;
      }
  
      img{
        height: 15px;
      }
    }
  }
    h5{
      color: white;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;
    }

}


</style>

.wrapper, .single-card {
	height: 450px;
	max-width: 300px;
	margin: 0 auto;
	position: relative;
}
.wrapper {
	perspective: 900px;
}
.single-card {
	text-align: center;
	transition: all 1.5s cubic-bezier(0.7, -0.5, 0.3, 1.8);
	transform-style: preserve-3d;
}
.wrapper:hover .single-card {
	transform: rotateY(180deg);
}
.front, .back {
	width: 300px;
	position: relative;
	top: 0;
	left: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}
.front {
	cursor: pointer;
	height: 100%;
	background-image: url(1.jpg);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border-radius: 50px;
	background-size: cover;
	background-position: center center;
}
.back {
	transform: rotateY(180deg);
	position: absolute;
	border-radius: 50px;
	height: 450px;
	background: #fff;
}
.content {
	padding-top: 25%;
}
.content h2 {
	font-size: 35px;
	margin: 0;
	font-weight: 300;
}
.content h4 {
	margin: 0;
}