<template>
  <header>

    <router-link
      to="/login"
      v-if="userData===null"
    >
      <img
        class="login"
        src="//leyouimage.leyou.com.cn/mleyou/mall/images/home.png"
        alt=""
      />
    </router-link>
    <span
      v-else
      @click="handleLogoutClick"
    >{{username}}</span>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapState({
      userData: state => state.users.userData
    }),
    ...mapGetters("users", {
      username: "getUserName"
    })
  },
  methods: {
    ...mapActions("users", ["getLogout"]),
    handleLogoutClick() {
      this.$createDialog({
        type: "confirm",
        icon: "cubeic-alert",
        title: "提示",
        content: "确定要推出吗",
        confirmBtn: {
          text: "退出",
          active: true,
          disabled: false
        },
        cancelBtn: {
          text: "取消",
          active: false,
          disabled: false,
          href: "javascript:;"
        },
        onConfirm: () => {
          this.getLogout();
        },
        onCancel: () => {
          console.log("onCancel");
        }
      }).show();
    }
  }
};
</script>

<style lang="less" scoped>
header {
  background: #fff
    url(https://leyouimage.leyou.com.cn/mleyou/mall/images/logo.png) no-repeat
    10px;
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

  span {
    position: absolute;
    right: 0.2rem;
    top: 50%;
    color: #f2622d;
    font-size: 0.25rem;
    margin-top: -0.25rem;
    font-weight: 600;
  }
}
</style>
