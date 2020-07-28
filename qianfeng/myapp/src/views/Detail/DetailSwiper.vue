<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination" ></div>
  </div>
</template>

<script>
import Swiper from 'swiper'; // js
import 'swiper/dist/css/swiper.min.css';
export default {
  props: ['preview', 'myclassname'],
  mounted () {
    /* eslint-disable no-new */
    console.log(this.myclassname);
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.preview,
      spaceBetween: this.myclassname === 'actorswiper' ? 20 : 10,
      freeMode: true
    });
  }
};
</script>

<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
</style>
