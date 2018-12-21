<template>
  <div>
    <div
      v-for="item in data"
      :key="item.id"
    >
      <HomeCenterImg :data="item.adImg" />
      <HomeSaleCommodity :data="item.adList" />
    </div>
  </div>
</template>

<script>
import HomeCenterImg from "./HomeCenterImg";
import HomeSaleCommodity from "./HomeSaleCommodity";

export default {
  name: "HomeActiveList",
  components: { HomeCenterImg, HomeSaleCommodity },
  props: {
    data: Array
  }
};
</script>

<style lang="less" scoped>
</style>

