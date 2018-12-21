<template>
  <div>
    <h1>This is an about page</h1>
    <ul v-if="homeData">
      <li
        v-for="banner in homeData.bannerList"
        :key="banner.id"
      >
        <img
          :src="banner.imgUrl"
          alt
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "about",
  computed: mapState({
    homeData: state => state.homes.homeData
  }),
  methods: mapActions("homes", ["getHomeData"]),
  created() {
    this.$store.dispatch("homes/getHomeData");
  }
};
</script>

