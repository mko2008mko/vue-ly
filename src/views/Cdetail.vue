<template>
  <div>
    <AppTopBar title="爱他美三段幼儿配方奶粉" />
    <div v-if="cdetailData">
      <cube-slide :data="cdetailData.bannerList">
        <cube-slide-item
          v-for="item in cdetailData.bannerList"
          :key="item.id"
        >
          <img
            class="cdetail-banner-img"
            :src="item.imgUrl"
            alt=""
          />
        </cube-slide-item>
      </cube-slide>
      <div class="cdetail-content-wrapper">
        <div class="cdetail-content-one">
          <span class="price span_yellow">¥ 205.00</span>
          <span class="rprice">厂家建议零售价¥215.00</span>
        </div>
        <hr />

        <p>爱他美3段幼儿配方奶粉</p>
        <p>
          积分：可得<span class="span_yellow">205</span>积分
        </p>
      </div>
      <CitySelect
        title="xxxx"
        :data="cdetailData.cityList"
        v-on:handelCityChange="handelCityChange"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppTopBar from "../components/AppTopBar";
import CitySelect from "../components/CitySelect";
export default {
  name: "Cdetail",
  components: {
    AppTopBar,
    CitySelect
  },
  props: ["id"],
  computed: mapGetters("cdetails", {
    cdetailData: "getCDData"
  }),
  methods: {
    ...mapActions("cdetails", ["getCDetailData"]),
    handelCityChange(item) {
      console.log({...item});
    }
  },
  created() {
    this.getCDetailData(this.id);
  }
};
</script>

<style lang="less" scoped>
.cdetail-banner-img {
  display: block;
  width: 100%;
  height: 5.066667rem;
}

.cdetail-content-wrapper {
  box-sizing: border-box;
  padding-left: 0.25rem;
  padding-right: 0.25rem;

  .cdetail-content-one {
    margin-top: 1rem;
    .rprice {
      margin-left: 0.25rem;
      color: #b2b2b2;
      font-family: "Arial";
      font-size: 0.25rem;
    }
    .price {
      font-size: 0.45rem;
    }
  }

  p {
    color: #000;
    font-weight: normal;
    line-height: 0.5rem;
    font-size: 0.28rem;
  }

  .span_yellow {
    color: #f2622d;
  }

  .cdetail-2btn-wrapper {
    display: flex;
    .am-button {
      margin: 0.2rem auto;
      width: 40%;
      background-color: #f2622d;
      color: #fff;
    }

    .am-button-active {
      background-color: #fff;
    }
  }

  .cdetail-comment-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .start-wrapper {
      span {
        display: inline-block;
        margin-right: 2px;
        width: 16px;
        height: 16px;
        background: url("http://leyouimage.leyou.com.cn/mleyou/single/images/evaluation.png")
          no-repeat 0 0px;
        background-size: cover;
      }
    }

    p {
      font-size: 13px;
    }
  }

  .cdetail-cdesc-wrapper {
    margin-top: 20px;
    margin-bottom: 15px;
    p {
      color: #535353;
      font-weight: normal;
      line-height: 0.38rem;
      font-size: 0.23rem;
    }
  }
}

.cdetail-bot-place {
  margin-bottom: 0.666667rem;
}
</style>

