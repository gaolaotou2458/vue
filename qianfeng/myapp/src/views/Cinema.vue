<template>
<div>
  <ul>
    <li v-for="data in datalist" :key="data.cinemaId">
      
    </li>
  </ul>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      datalist:[]
    }
  },
  mounted () {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=9595825",
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "159538154712713103196161", "bc": "310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data);
    })
  }
};
</script>
 <style lang="scss" scoped>
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: #007aff;
    }
  </style>
