<template>
    <div v-if="filmInfo">
        <img :src="filmInfo.poster" alt="" class="poster" >
        <h2>{{filmInfo.name}}</h2>
        <h3>演职人员</h3>
        <swiper  preview="3" class="actorswiper"  myclassname="actorswiper">
          <div class="swiper-slide" v-for = "data in filmInfo.actors" :key="data.name">
            <img :src="data.avatarAddress"/>
            <p>{{data.name}}</p>
          </div>
        </swiper>
        <h3>剧照</h3>
        <swiper preview="4" class="photoswiper" myclassname="photoswiper">
          <div class="swiper-slide" v-for = "(data,index) in filmInfo.photos" :key="index">
            <img :src="data"/>
          </div>
        </swiper>
    </div>
</template>
<script>
import axios from 'axios';
import swiper from './Detail/DetailSwiper';
export default {
  data () {
    return {
      filmInfo: null
    };
  },
  mounted () {
    console.log('要id获取详细信息', this.$route.params.myid);
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}`,
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "159538154712713103196161", "bc": "310100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data);
      this.filmInfo = res.data.data.film;
    });
  },
  components: {
    swiper
  }
};
</script>
<style lang="scss" scoped>
  .poster{
    width:100%;
    height: 200px;
  }
</style>
