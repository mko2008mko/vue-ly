<template>
  <div class="count-wrapper">
    <span
      class="count-btn"
      @click="handleAddClick"
    >
      +
    </span>
    <span
      :style="{ marginLeft: 5, marginRight: 5 }"
      class="count-xinashi"
    >
      {{this.count}}
    </span>
    <span
      class="count-btn"
      @click="handleMinClick"
    >
      -
    </span>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      count: 1
    };
  },
  methods: {
    handleAddClick() {
      this.count++;
      this.$emit("handleCountChange", this.count);
    },
    handleMinClick() {
      if (this.count > 0) {
        this.count--;
        this.$emit("handleCountChange", this.count);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.count-wrapper {
  span {
    font-size: 0.3rem;
    color: #000;
    vertical-align: middle;
  }

  // .input {
  //   width: 60px;
  //   text-align: center;
  //   height: 24px;
  //   font-size: 16px;
  //   line-height: 24px;
  //   border: 1px solid #e6e6e6;
  //   background-color: #fff;
  //   vertical-align: middle;
  // }

  .count-xinashi {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    height: 24px;
    width: 60px;
    display: inline-block;
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    font-family: "微软雅黑";
    vertical-align: middle;
  }

  .count-btn {
    background-color: #fff;
    border: 1px solid #e6e6e6;
    height: 24px;
    width: 36px;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-family: "微软雅黑";
    vertical-align: middle;
  }
}
</style>

