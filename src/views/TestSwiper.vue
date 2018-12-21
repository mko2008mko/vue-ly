<template>
  <div>
    <div class="hello">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide
          v-for="(slide,i) in bannerData.banner"
          :key="i"
        >
          <img
            :src="slide.img"
            alt="slide.title"
          >
        </swiper-slide>
        <!-- <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>-->
        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
        <div
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
        ></div>
      </swiper>
    </div>

  </div>
</template>

<script>
export default {
  name: "testSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [0, 1, 2, 3, 4, 5, 6],
      bannerData: {
        banner: []
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    callback() {
      console.log("callback");
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    this.$axios
      .get("/sxtstu/blueberrypai/getIndexBanner.php")
      .then(res => {
        this.bannerData = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.hello {
  width: 400px;
  height: 250px;
  img {
    width: 400px;
    height: 250px;
  }
}
</style>
