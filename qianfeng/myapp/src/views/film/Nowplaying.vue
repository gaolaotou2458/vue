<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src= "data.poster">
                <h3>{{data.name}}</h3>
                <p>观众评分{{data.grade}}</p>
                <p>主演{{data.actors | actorfilter}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
Vue.filter('actorfilter', function (data) {
  if (data) {
    // console.log('=============');
    // console.log(data);
    var newlist = data.map(item => item.name);
    return newlist.join(' ');
  } else {
    return '暂无主演';
  }
});

export default {
  data () {
    return {
      datalist: []
    };
  },
  mounted () {
    // axios.get('https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9501917')
    //   .then(res => {
    //     console.log(res.data);
    //   });
    // 由于直接请求网站加了特殊字段验证，因此要用axios原始写法，把验证字段带过去
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9501917',
      headers: {
        'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.0.4", "e": "159538154712713103196161"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data);
      this.datalist = res.data.data.films;
    });
  },
  methods: {
    handleChangePage (id) {
      // console.log(id);
      // 编程式导航  这个router式main.js 里面new Vue对象带过来的
      // 通过路径跳转
      // this.$router.push(`/detail/${id}`);
      // 通过名称跳转
      this.$router.push({ name: 'kerwindetail', params: { myid: id } });
    }
  }
};
</script>
<style lang="scss" scoped>
  ul{
    bottom: 20px;
    li{
      padding: 20px 20px 20px 20px;
      overflow: hidden;
      img{
        float: left;
        width:30%;
        padding-right: 20px;
        height: 30%;
      }
    }
  }
</style>
