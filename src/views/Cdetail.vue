<template>
  <div>
    <AppTopBar title="爱他美三段幼儿配方奶粉" />
    <AppBotShopcar :commodity="commodity"/>
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
        <div :style="{ marginTop: 12 }">
          <p>
            送至:
            <span :style="{ marginLeft: 20 }">{{city1 ? city1 : '请选择'}}</span>
            <span>{{city2 ? city2 : '请选择'}}</span>
            <span :style="{ color: '#f2622d' }">有货</span>
          </p>
          <CitySelect
            title="xxxx"
            :data="cdetailData.cityList"
            v-on:handelCityChange="handelCityChange"
            type="0"
          />
          <CitySelect
            :data="city2Data"
            v-on:handelCityChange="handelCityChange"
            type="1"
          />
        </div>
        <div :style="{ marginTop: 12 }" />
        <Count v-on:handleCountChange="handleCountChange" />

        <div class="cdetail-2btn-wrapper">
          <cube-button>分享</cube-button>
          <cube-button>关注</cube-button>
        </div>

        <div class="cdetail-comment-wrapper">
          <div class="start-wrapper">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>
            已有<span :style="{ color: '#f2622d' }">333423</span>人评价>
          </p>
        </div>
        <div
          class="cdetail-cdesc-wrapper"
          v-html="cdetailData.commodityDesc"
        />
        <SegmentedControl v-on:handleSelectChange="handleSelectChange" />
        <ImageDesc v-if="!selectIndex" />
        <AfterSale v-else-if="selectIndex===1" />
        <HowBuy v-else />
        <div class="cdetail-bot-place" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import AppTopBar from "../components/AppTopBar";
import CitySelect from "../components/CitySelect";
import Count from "../components/Count";
import SegmentedControl from "../components/SegmentedControl";
import AfterSale from "./AfterSale";
import HowBuy from "./HowBuy";
import ImageDesc from "./ImageDesc";
import AppBotShopcar from "../components/AppBotShopcar";
export default {
  name: "Cdetail",
  components: {
    AppTopBar,
    CitySelect,
    Count,
    SegmentedControl,
    AfterSale,
    HowBuy,
    ImageDesc,
    AppBotShopcar
  },
  props: ["id"],
  data() {
    return {
      selectIndex: 0
    };
  },
  computed: {
    ...mapGetters("cdetails", {
      cdetailData: "getCDData",
      city2Data: "getCity2Data",
      commodity: "getCommodity"
    }),
    ...mapState({
      city1: state => state.cdetails.city1,
      city2: state => state.cdetails.city2
    })
  },
  methods: {
    ...mapActions("cdetails", [
      "getCDetailData",
      "setCity",
      "getCity2Data",
      "modifyCount"
    ]),
    handelCityChange(item, type) {
      this.setCity({ type: type, ...item });
      if (type) {
        this.getCity2Data(item.addrid);
      }
    },
    handleCountChange(count) {
      this.modifyCount(count);
    },
    handleSelectChange(selectIndex) {
      this.selectIndex = selectIndex;
      console.log(selectIndex);
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
    .cube-btn {
      margin: 0.2rem auto;
      width: 40%;
      background-color: #f2622d;
      color: #fff;
    }

    .cube-btn-active {
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
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;

    color: #535353;
    font-weight: normal;
    line-height: 0.38rem;
    font-size: 12px;
  }
}

.cdetail-bot-place {
  margin-bottom: 0.666667rem;
}
</style>

