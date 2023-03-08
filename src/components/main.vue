<script>
    import store from '../store'
    import card from './card.vue'

    export default {
        components:{
            card
        },
        data() {
            return {
                store
            }
        },
        computed: {
            movies() {
                return this.store.movies
            }
        }
    }
</script>

<template>
    <main>
        <div class="container">
            <ul class="grid">
                <li v-for="movie in store.movies" :key="movie.id">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>
                    <p>{{ movie.language }}</p>
                    <p>{{ movie.vote_average }}</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;

}
</style>