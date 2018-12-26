<template>
  <div class="sc-wrapper">
    <ul>
      <li
        v-for="(item,index) in data"
        :key="item"
        @click="handleItemClick(index)"
        :class="{selected:selectIndex===index}"
      >

        {{item}}

      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "SegmentedControl",
  data() {
    return {
      data: ["图文详情", "售后服务", "如何购买"],
      selectIndex: 0
    };
  },
  methods: {
    handleItemClick(i) {
      // console.log(i);
      this.selectIndex = i;
      this.$emit("handleSelectChange", i);
    }
  }
};
</script>

<style lang="less" scoped>
.sc-wrapper {
  ul {
    display: flex;
    li {
      flex: 1;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      border: 1px solid #f2622d;
      color: #f2622d;
    }
    li:first-child {
      border-radius: 5px 0px 0px 5px;
    }
    li:nth-of-type(2) {
      border-left: none;
      border-right: none;
    }
    li:last-child {
      border-radius: 0 5px 5px 0;
    }

    .selected {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #f2622d;
      color: #fff;
    }
  }
}
</style>

