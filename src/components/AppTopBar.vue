<template>
  <div class="app-topbar-wrapper">
    <img
      @click="hlandleCLickBack"
      src="../assets/back.png"
      alt=""
    />
    <span>{{title}}</span>
    <img
      @click="handleMenuClick"
      class="right"
      src="../assets/menu.png"
      alt=""
    />
    <transition name="fade">
      <TopLefNavPop v-if="isShow" />
    </transition>

  </div>
</template>

<script>
import TopLefNavPop from "./TopLefNavPop";
export default {
  name: "AppTopBar",
  components: {
    TopLefNavPop
  },
  data() {
    return {
      isShow: false
    };
  },
  props: {
    title: String
  },
  methods: {
    hlandleCLickBack() {
      // console.log('click...')
      this.$router.go(-1);
    },
    handleMenuClick() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.app-topbar-wrapper {
  background: #f6f4f4;
  padding: 0.2rem 0;
  text-align: center;
  height: 0.533333rem;
  display: flex;
  justify-content: space-between;

  img {
    // float: left;
    height: 100%;
  }

  .right {
    // float: right;
    margin-right: 0.2rem;
  }

  span {
    display: inline-block;
    width: 50%;
    color: #f2622d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    line-height: 0.533333rem;
    font-weight: 600;
  }
}
</style>

