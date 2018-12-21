<template>
  <div class="item-wrapper">
    <span>{{item.text}}</span>
    <span>{{item.index}}</span>
  </div>
</template>

<script>
export default {
  name: "testItem",
  props: {
    item: Object
  }
};
</script>

<style lang="less" scoped>
.item-wrapper {
  width: 200px;
  height: 100px;
  background: olive;
  text-align: center;

  span{
      display: block;
  }
}

</style>
