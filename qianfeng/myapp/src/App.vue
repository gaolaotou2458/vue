<template>
  <div id="app">
    <tabbar></tabbar>
    Hello vue
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script>

// import Vue from 'vue';
import axios from 'axios';
import tabbar from './components/Tabbar';

export default {
  data () {
    return {

    };
  },
  methods: {

  },
  components: {
    tabbar: tabbar
  },
  mounted () {
    axios.get('/json/data.json').then(res => {
      console.log(res.data);
    });
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}
</style>
