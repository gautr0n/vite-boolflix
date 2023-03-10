<template>
  <header>

    <div class="container">
      <div class="title">
        BOOLFLIX
      </div>

      <div>
        <input type="text" placeholder="Carca per nome" @keyup.enter="setSearch" v-model="localSearch">
        <button @click="setSearch">Cerca</button>
      </div>
    </div>

  </header>
</template>

<script>
  import store from '../store'
  export default {
    data() {
      return  {
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

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 15px;
  .title{
    color: #C50000;
    font-size: 24px;
  }
}
</style>