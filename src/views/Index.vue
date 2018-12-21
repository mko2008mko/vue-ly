<template>
  <div id="app">
    <AppHeader />
    <ScrollNavBar/>
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import ScrollNavBar from "../components/ScrollNavBar";

export default {
  components: {
    AppHeader,
    ScrollNavBar
  }
};
</script>


<style lang="less">

</style>
