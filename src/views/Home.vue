<template>
  <div class="home">
    <div class="container">
      <img alt="" src="">

    </div>
    <Carousel v-model="slide" />
    <HelloWorld />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Vue from 'vue'
  import Carousel from '@/components/Carousel.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import VueParallaxJs from 'vue-parallax-js'
  Vue.use(VueParallaxJs)

  export default {
    name: 'home',
    components: {
      Carousel,
      HelloWorld
    },
    methods: {
      prev() {
        this.$refs.Carousel.onSlideStart(slide)
      },
      next() {
        this.$refs.Carousel.onSlideEnd(slide)
      }
    }
  }
</script>