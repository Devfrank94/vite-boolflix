import {reactive} from 'vue';

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=cdf53e91c5e183d5e9639c1057dd8b4c&language=it-IT",

  searchTitle: '',
  filmArray: [],

  isLoad: true,


})