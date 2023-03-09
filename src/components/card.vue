<template>
    <li class="card">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.originalTitle }}</h4>
      <p>{{ item.language }}</p>
      <img v-if="hasFlag" :src="flags[item.language]" alt="">
      <p>{{ item.vote }}</p>
    </li>
  </template>
  
  <script>
    export default {
      props: {
        item: {
          type: Object,
          required: true
        }
      },
      data() {
        return {
          flags: {
            it: '/it.png',
            en: '/en.png'
          }
        }
      },
      computed: {
        hasFlag (){
          return this.flags[this.item.language]
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
    img{
      height: 30px;
    }
  </style>