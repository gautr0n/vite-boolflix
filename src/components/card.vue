<template>
  <li class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="item.poster" alt="" v-if="notShow">
    <div class="mockup" v-if="hover">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.originalTitle }}</h4>
      <p>{{ item.language }}</p>
      <img class="flag" v-if="hasFlag" :src="flags[item.language]" alt="">
      <p>{{ item.vote }}</p>
      <div><font-awesome-icon class="stars" v-for="star in numberOfStars" icon="fa-solid fa-star" /></div>
    </div>
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
        hover: false,
        flags: {
          it: '/it.png',
          en: '/en.png'
        },
      }
    },
    computed: {
      notShow(){
        return !this.hover;
      },
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
  li{
    list-style-type: none;
    border: 2px solid white;
    height: 100%;
    .mockup{
      padding: 20px 10px;
      color: white;
      .stars{
        color: #FFBD00;
      }
      .flag{
      height: 30px;
      }       
    }
  }
</style>