<template>
  <li class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <img :src="item.poster" alt="" @mouseover="notShow">
    <div class="mockup" v-if="hover">
      <h3>{{ item.title }}</h3>
      <h4>{{ item.originalTitle }}</h4>
      <p>{{ item.language }}</p>
      <img class="flag" v-if="hasFlag" :src="flags[item.language]" alt="">
      <p>{{ item.vote }}</p>
      <div><font-awesome-icon v-for="star in numberOfStars" icon="fa-solid fa-star" /></div>
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
    methods: {
      notShow(){
        this.classList.toggle("d-none")
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
  li{
    list-style-type: none;
    border: 2px solid white;
    height: 312px;
    .flag{
      height: 30px;
    }    
  }
  .d-none{
    display: none;
  }
</style>