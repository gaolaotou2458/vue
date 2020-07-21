<template>
    <nav>
        <ul>
            <router-link to="/flim" tag="li" activeClass="myactive">film</router-link>
            <router-link to="/cinema" tag="li" activeClass="myactive">cinema</router-link>
            <router-link to="/center" tag="li" activeClass="myactive">center</router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
   .myactive {
       color:red
   }
</style>
