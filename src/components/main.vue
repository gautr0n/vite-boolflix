<template>
    <main>
      <div class="container">
        <ul class="grid">
          <Card v-for="el in items" :key="el.id" :item="el" />
        </ul>
      </div>
    </main>
  </template>
  
  <script>
    import store from '../store'
    import Card from './Card.vue'
    export default {
      components: {
        Card
      },
      data() {
        return {
          store
        }
      },
      computed: {
        movies() {
          return this.store.movies
        },
        items() {
          const movies = this.store.movies;
          const tv = this.store.tv;
          const items = movies.concat(tv);

          return items.map((item) => {
            const isMovie = item.title !== undefined;

            return{
              title: isMovie ? item.title : item.name,
              poster: 'https://image.tmdb.org/t/p/w342' + item.poster_path,
              originalTitle: isMovie ? item.original_title : item.original_name,
              language: item.original_language,
              vote: parseInt(item.vote_average / 2) 
            }
          })
        }
      } 
    }
  </script>
  
  <style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 40px;
  }
  </style>