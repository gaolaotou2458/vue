<template>
    <div>
        <swiper :key="looplist.length">
            <div class="swiper-slide" v-for="data in looplist" :key="data.filmId">
                <img :src= "data.poster">
            </div>
        </swiper>
        <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/views/film/Swiper';
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios';
import Vue from 'vue';
Vue.use(swiper);
export default {
  data () {
    return {
      looplist: [],
      isFixed: false
    };
  },
  components: {
    swiper
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
  }
};
</script>
<style lang="scss" scoped>

</style>
