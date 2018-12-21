<template>
  <div class="tf-nav-pop-wrapper">
    <ul>
      <li>
        <router-link to="/">
          <span>首页</span>
        </router-link>

      </li>
      <li>
        <span>购物车</span>
      </li>
      <li>
        <span>我的乐友</span>
      </li>
    </ul>
    <div class="dd" />
  </div>
</template>

<script>
export default {
  name: "TopLefNavPop"
};
</script>

<style lang="less" scoped>
.tf-nav-pop-wrapper {
  position: absolute;
  z-index: 99;
  right: 1%;
  top: 6%;
  width: 30%;
  background-color: #404042;
  border-radius: 10px;

  .dd {
    // font: 0/0 '宋体';
    border: 13px solid;
    border-color: transparent transparent #404042 transparent;
    float: left;
    background-color: transparent;
    position: absolute;
    top: -22px;
    left: 65%;
    display: block;
  }

  span {
    text-align: left;
    color: #fff;
    font-size: 0.22rem;
    line-height: 0.6rem;
  }
}
</style>

