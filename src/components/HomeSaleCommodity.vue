<template>
  <div class="home-sale-commodity-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="item in data"
        :key="item.id"
      >
        <div class="content">
          <a :href="item.linkUrl">
            <img
              :src="item.imgUrl"
              alt=""
            />
            <p>{{item.title}}</p>
            <div>
              <span>¥{{item.pirce}}</span>
              <span class="rob">秒</span>
            </div>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSaleCommodity",
  props: {
    data: Array,
    required: true
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: "4"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.home-sale-commodity-wrapper {
  //   .swiper-wrapper {
  //     width: auto !important;
  //   }
  //   .swiper-slide {
  //     width: auto !important;
  //   }

  .content {
    background: #fff;
    box-sizing: border-box;
    // display: inline-block;
    padding-left: 0.2rem;
    // margin-left: 0.2rem;
    // padding : 0  0.1rem;
    width: 2.666667rem;

    img {
      width: 100%;
      margin: 0.2rem 0rem 0.04rem 0rem;
    }

    p {
      font-size: 12px;

      // width: 100%;
      line-height: 0.426667rem;
      height: 0.8rem;
      overflow: hidden;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    span {
      margin-top: 0.053333rem;
      color: #ff3c3c;
      float: left;
      font-size: 12px;

      // width: 100%;
      line-height: 0.266667rem;
    }

    .rob {
      float: right;
      background: #ffb000;
      font-size: 0.2rem;
      color: #fff;
      padding: 0.02rem 0.02rem 0.02rem 0.02rem;
      line-height: 0.24rem;
    }
  }
}
</style>

