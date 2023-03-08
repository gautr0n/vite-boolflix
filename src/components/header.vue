<script>
import store from '../store'

  export default {
    data() {
      return {
        store,
        localSearch: ''
      }
    },
    methods: {
      setSearch() {
        this.store.search = this.localSearch
      }
    }
  }
</script>

<template>
  <header>
    <div class="container">
      <div>
        BOOLFIX
      </div>
      <div>
        <input type="text" placeholder="cerca un nome" @keyup.enter="$emit('onSearch')" v-model="localSearch">
        <button @click="$emit('onSearch')">cerca</button>        
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
