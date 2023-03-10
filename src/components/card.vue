<template>
    <li class="card">
      <img :src="item.poster" alt="">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.originalTitle }}</h4>
      <p>{{ item.language }}</p>
      <img class="flag" v-if="hasFlag" :src="flags[item.language]" alt="">
      <p>{{ item.vote }}</p>
      <div><font-awesome-icon v-for="star in numberOfStars" icon="fa-solid fa-star" /></div>
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
          },
        }
      },
      computed: {
        hasFlag (){
          return this.flags[this.item.language]
        },
        numberOfStars (){
          let stars = []
          for (let i = 0 ; i < this.item.vote ; i++){
            stars.push(i);
          }          
          return stars

        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
    .flag{
      height: 30px;
    }
  </style>