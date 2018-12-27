<template>
  <div class="absc-wrapper">
    <div>

      <img
        src="../assets/Scan.png"
        alt=""
      />
      <span>立即结算</span>
      <em>{{count}}</em>

    </div>
    <cube-button @click="handleAddShopcarClick">加入购物车</cube-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AppBotShopcar",
  props: {
    commodity: Object
  },
  computed: mapState("shopcars", {
    count: state => state.count
  }),
  methods: {
    ...mapActions("shopcars", ["addShopCar"]),
    handleAddShopcarClick() {
      this.addShopCar(this.commodity);
    }
  }
};
</script>

<style lang="less" scoped>
.absc-wrapper {
  background: rgba(255, 255, 255, 0.9);
  background-color: #e2e2e4;
  position: fixed;
  left: 0;
  padding: 0.133333rem 0.133333rem;
  bottom: 0;
  display: flex;
  width: 100%;
  z-index: 1;
  justify-content: space-between;
  box-sizing: border-box;

  div {
    margin-top: 0.04rem;
    position: relative;
    span {
      display: inline-block;
      color: #f2622d;
      font-size: 14px;
      line-height: 0.4rem;
      width: 0.8rem;
      margin-left: 0.133333rem;
      vertical-align: middle;
    }

    img {
      display: inline-block;
      width: 0.666667rem;
      height: 0.666667rem;
      vertical-align: middle;
    }

    em {
      min-width: 0.293333rem;
      height: 0.266667rem;
      line-height: 0.266667rem;
      border-radius: 0.2rem;
      background-color: #f2622d;
      color: #fff;
      //   display: inline-block;
      position: absolute;
      left: 0.533333rem;
      top: -0.093333rem;
      font-size: 12px;
      text-align: center;
      //   font-family: '微软雅黑';
      //   font-style: normal;
    }
  }

  .cube-btn {
    width: 36%;
    font-size: 14px;
    background-color: #f2622d;
    color: #fff;
  }
}
</style>

