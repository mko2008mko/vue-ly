<template>
  <div v-if="qqgData">
    <HomeCategory :data="qqgData.categoryList1" />
    <PageContentSeparator title="每周特价" />
    <HomeSaleCommodity :data="qqgData.commodityList" />
    <PageContentSeparator title="热销推荐" />
    <HomeSaleCommodity :data="qqgData.commodityList" />
    <PageContentSeparator title="精选活动" />
    <HomeActiveList :data="qqgData.qqgActiveList" />
    <PageContentSeparator title="更多推荐" />
    <RecommodityList :data="qqgData.qqgRCommodityList" />

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageContentSeparator from "../components/PageContenSeparator";
import HomeCategory from "../components/HomeCategory";
import HomeSaleCommodity from "../components/HomeSaleCommodity";
import HomeActiveList from "../components/HomeActiveList";
import RecommodityList from "../components/RecommodityLIst";

export default {
  name: "Qqg",
  components: {
    PageContentSeparator,
    HomeCategory,
    HomeSaleCommodity,
    HomeActiveList,
    RecommodityList
  },
  computed: mapGetters("qqgs", {
    qqgData: "getQggData"
  }),
  methods: mapActions("qqgs", ["requestQqgData"]),
  created() {
    this.requestQqgData();
  }
};
</script>

<style>
</style>