<template>
  <div>
    <div
      class="home"
      v-if="homeData"
    >
      <cube-slide :data="homeData.bannerList">
        <cube-slide-item
          v-for="item in homeData.bannerList"
          :key="item.id"
        >
        <router-link :to="{ name: 'Cdetail', params: { id: 123 }}">
          <img
            :src="item.imgUrl"
            alt=""
          />
          </router-link>
        </cube-slide-item>
      </cube-slide>
      <HoemCategory :data="homeData.categoryList1" />
      <HomeCenterImg :data="homeData.homeAdImgList" />
      <HoemCategory :data="homeData.categoryList2" />
      <SaleTime :time="homeData.saleTime[0].time" />
      <HomeSaleCommodity :data="homeData.saleTime" />
      <HomeCenterImg :data="homeData.homeAdImgList2" />
      <HomeCenterMoreImg :data="homeData.homeCenterMoreImgList" />
      <HomeCenterMoreImg :data="homeData.homeCenterMoreImgList2" />
      <HomeCenterImg :data="homeData.homeAdImgList3" />
      <HomeCenterMoreImg :data="homeData.homeCenterMoreImgList3" />
      <HomeCenterImg :data="homeData.homeAdImgList4" />
      <HomeActiveList :data="homeData.homeActiveList" />
    </div>
    <ListLoader v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import { ListLoader } from "vue-content-loader";
import HelloWorld from "@/components/HelloWorld.vue";
import HoemCategory from "../components/HomeCategory";
import HomeCenterImg from "@/components/HomeCenterImg";
import SaleTime from "@/components/SaleTime";
import HomeSaleCommodity from "../components/HomeSaleCommodity";
import HomeCenterMoreImg from "../components/HomeCenterMoreImg";
import HomeActiveList from "../components/HomeActiveList";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    ListLoader,
    HoemCategory,
    HomeCenterImg,
    SaleTime,
    HomeSaleCommodity,
    HomeCenterMoreImg,
    HomeActiveList
  },
  computed: mapState({
    homeData: state => state.homes.homeData
  }),
  methods: mapActions("homes", ["getHomeData"]),
  created() {
    this.$store.dispatch("homes/getHomeData");
  }
};
</script>
<style lang="less" scoped>
img {
  display: block;
  width: 100%;
}
</style>

