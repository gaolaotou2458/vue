<template>
    <div>
        <swiper :key="looplist.length" ref="myswiper">
            <div class="swiper-slide" v-for="data in looplist" :key="data.filmId">
                <img :src= "data.poster">
            </div>
        </swiper>
        <filmheader :class="isFixed?'fixed':''"></filmheader>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/views/film/Swiper';
import filmheader from '@/views/film/FilmHeader';
import axios from 'axios';
// import Vue from 'vue';
// Vue.use(swiper);
export default {
  data () {
    return {
      looplist: [],
      isFixed: false
    };
  },
  components: {
    swiper,
    filmheader
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9501917',
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "159538154712713103196161"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.looplist = res.data.data.films;
      // Indicator.close()
    });

    window.onscroll = this.handleScroll;
  },
  destroyed () {
    window.onscroll = null;
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight);
      var scrollTop = document.documentElement.scrollTop;
      var offsetHeight = this.$refs.myswiper.$el.offsetHeight;
      if (scrollTop >= offsetHeight) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  img{
    height:300px;
  }
</style>
