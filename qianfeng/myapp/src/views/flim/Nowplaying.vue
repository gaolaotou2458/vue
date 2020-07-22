<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: ['1111', '22222', '33333']
    };
  },
  methods: {
    handleChangePage (id) {
      console.log(id);
      // 编程式导航  这个router式main.js 里面new Vue对象带过来的
      // 通过路径跳转
      // this.$router.push(`/detail/${id}`);
      // 通过名称跳转
      this.$router.push({ name: 'kerwindetail', params: { myid: id } });
    }
  }
};
</script>
