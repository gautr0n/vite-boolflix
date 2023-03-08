<script>
  import header from './components/header.vue';
  import main from './components/main.vue';
  import store from './store';
  import axios from 'axios';

  export default {
    components: {
      header,
      main,
    },
    data() {
      return {
        store: store
      }
    },
    computed: {
      API_KEY() {
        return this.store.config.API_KEY
      },
      BASE_URI() {
        return this.store.config.BARE_URI
      },
      moviesEndpoint() {
        return this.BASE_URI + '/search/movie'
      }
    },
    watch: {
      search(newVal,oldVal){
        this.fetchData()
      }
    },
    methods: {
      fetchData(){
        console.log('fetch data')

        this.fetchMovies()
      },
      fetchMovies(){
        const url = this.store.config.BARE_URI + '/search/movie'
        axios.get(url,{
          params:{
            api_key: this.store.config.API_KEY,
            query: this.store.search,
            language: 'it-IT'
          }
        }).then(res => {
          const { results } = res.data
          this.store.movies = results
          console.log(this.store.movies)
        }).catch(err =>{
          this.store.movies = []
        })
      }
    }
  }
</script>

<template>
  <div>
    <header></header>
    <main></main>
  </div>
</template>

<style lang="scss" scoped>
</style>
