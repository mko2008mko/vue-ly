<template>
  <div v-if="nfnbData">
    <HomeCenterImg :data="nfnbData.nfnbAdImgList" />
    <HomeCenterMoreImg :data="nfnbData.nfnbCenterMoreImg" />
    <HomeCenterImg :data="nfnbData.nfnbAdImgList2" />
    <HomeCenterMoreImg
      v-if="nfnbData.nfnbCenterMoreImgList.length"
      v-for="item in nfnbData.nfnbCenterMoreImgList"
      :key="item.id"
      :data="item.item"
    />
    <HomeCenterImg :data="nfnbData.nfnbAdImgList3" />
    <HomeCenterMoreImg
      v-if="nfnbData.nfnbCenterMoreImgList2.length"
      v-for="item in nfnbData.nfnbCenterMoreImgList2"
      :key="item.id"
      :data="item.item"
    />
    <HoemCategory :data="nfnbData.categoryList1" />
    <HomeActiveList :data="nfnbData.nfnbActiveList" />

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import HoemCategory from "../components/HomeCategory";
import HomeActiveList from "../components/HomeActiveList";
import HomeCenterImg from "@/components/HomeCenterImg";
import HomeCenterMoreImg from "../components/HomeCenterMoreImg";

export default {
  name: "Nfnb",
  components: {
    HomeCenterImg,
    HomeCenterMoreImg,
    HoemCategory,
    HomeActiveList
  },
  computed: mapGetters("nfnbs", {
    nfnbData: "getNfnbData"
  }),
  methods: mapActions("nfnbs", ["requestNfnbData"]),
  created() {
    this.requestNfnbData();
  }
};
</script>

<style>
</style>