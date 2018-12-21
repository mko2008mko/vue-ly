<template>
  <header>
    <!-- <span onClick={getLogout}>{username}</span> -->
    <img
      class="login"
      src="//leyouimage.leyou.com.cn/mleyou/mall/images/home.png"
      alt=""
    />

  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="less" scoped>
header {
  background: #fff url(https://leyouimage.leyou.com.cn/mleyou/mall/images/logo.png)
    no-repeat 10px;
  background-size: 4.68rem auto;
  border-bottom: 1px solid #e9e9ea;
  position: relative;
  height: 1.06rem;
  padding: 0.15rem 0;

  .login {
    position: absolute;
    right: 0.3rem;
    width: 0.45rem;
    top: 50%;
    margin-top: -0.3rem;
  }

  //   span {
  //     position: absolute;
  //     right: 0.2rem;
  //     top: 50%;
  //     color: #f2622d;
  //     font-size: 0.25rem;
  //     margin-top: -0.25rem;
  //     font-weight: 600;
  //   }
}
</style>
