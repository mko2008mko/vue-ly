<template>
  <div id="app">
    <AppHeader />
    <ScrollNavBar/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link>|
      <router-link to="/tswiper">Swiper</router-link>|
      <router-link to="/tstabr">Tabr</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import ScrollNavBar from "./components/ScrollNavBar";

export default {
  components: {
    AppHeader,
    ScrollNavBar
  }
};
</script>


<style lang="less">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
