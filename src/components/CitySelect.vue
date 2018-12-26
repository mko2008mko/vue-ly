<template>
  <div>
    <div class="sspick-content-wrapper">
      <span class="sbSelector">{{title ? title : '请选择'}}</span>
      <span
        class="bottom-btn"
        @click="handleBBtnClick"
      >
        >
      </span>
      <ul v-if="data.length&&isShow">
        <li
          v-for="item in data"
          :key="item.addrid"
          @click="handleItemClick(item)"
        >
          <span>{{item.addrname}}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "CitySelect",
  props: {
    data: Array,
    title: String,
    type: String
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleBBtnClick() {
      this.isShow = !this.isShow;
    },
    handleItemClick(item) {
      this.isShow = false;
      this.$emit("handelCityChange", item, this.type);
    }
  }
};
</script>

<style lang="less" scoped>
.sspick-content-wrapper {
  position: relative;
  width: 70%;
  margin-left: 50px;
  margin-top: 10px;
  height: 30px;
  position: relative;
  .sbSelector {
    display: block;

    line-height: 28px;
    font-size: 12px;
    overflow: hidden;
    text-indent: 10px;
    width: 86%;
    border: 1px solid #f2622d;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }
  .bottom-btn {
    color: #fff;
    background: #f2622d;
    display: block;
    line-height: 30px;
    font-size: 15px;
    width: 14%;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
  }

  ul {
    display: block;
    position: absolute;
    top: 30px;
    // margin-top: 30px;
    width: 99%;
    height: 300px;
    z-index: 1;
    background-color: #fff;
    border: solid 1px #f2622d;
    border-top: none;
    overflow-y: auto;

    li {
      padding-left: 7px;
      padding-right: 7px;
      span {
        border-bottom: dotted 1px #515151;
        display: block;
        padding: 2%;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }
}
</style>

