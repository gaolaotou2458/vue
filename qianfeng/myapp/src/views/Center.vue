<template>
    <div>
        center
    </div>
</template>
<script>
// const auth = {
//   isLogin () {
//     return false;
//   }
// };
export default {
  beforeRouteEnter (to, from, next) {
    // console.log('局部盘查');
    // // 在渲染该组件的对应路由被 confirm 前调用
    // // 不！能！获取组件实例 `this`
    // // 因为当守卫执行前，组件实例还没被创建
    // if (auth.isLogin()) {
    //   next('/center');
    // } else {
    //   next('/login');
    // }
    next();
  }
};
</script>
