import {reactive} from 'vue';

export const store = reactive({

  // Chiavi API
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=cdf53e91c5e183d5e9639c1057dd8b4c&language=it-IT",

  apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=cdf53e91c5e183d5e9639c1057dd8b4c&language=it-IT",

  apiUrlPopular: "https://api.themoviedb.org/3/movie/popular?api_key=cdf53e91c5e183d5e9639c1057dd8b4c&language=it-IT",
  
  // Valore vuoto per ricerca in v-model
  searchTitle: '',

  // Array delle varie chiamate
  filmArray: [],
  seriesArray: [],
  popularArray: [],

  isLoad: false,


})