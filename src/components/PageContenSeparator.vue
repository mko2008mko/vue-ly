<template>
  <div class="pcs-wrapper">
    <img
      src="../assets/index_title_left.png"
      alt=""
    />
    <span>
      {{title}}
    </span>
    <img
      src="../assets/index_title_right.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "PageContentSeparator",
  props: {
    title: String,
    required: true
  }
};
</script>

<style lang="less" scoped>
@color: #ffb000;

.pcs-wrapper {
  // width: 7.5rem;
  height: 1rem;
  background: #f2f2f2;
  text-align: center;
  padding-bottom: 0.2rem;
  box-sizing: border-box;

  img {
    width: 0.44rem;
    height: 0.1rem;
    margin-bottom: 0.1rem;
    display: inline-block;
    vertical-align: middle;
  }

  span {
    display: inline-block;
    padding: 0rem 0.2rem;
    line-height: 0.44rem;
    font-size: 14px;
    vertical-align: middle;
    color: @color;
  }
}
</style>

