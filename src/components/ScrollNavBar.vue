<template>
  <!-- <cube-scroll-nav>
    <cube-scroll-nav-panel
      v-for="item in tabs"
      :key="item.title"
      :label="item.title"
    />
  </cube-scroll-nav> -->
  <nav ref="navwrapper">
    <cube-scroll-nav-bar
      :current="current"
      :labels="tabs"
      @change="changeHandler"
    />
  </nav>
</template>

<script>
const tabs = [
  "首页",
  "奶粉尿布",
  "全球购",
  "童装",
  "食品",
  "用品",
  "玩具",
  "车床椅",
  "运营服饰"
];

export default {
  name: "ScrollNavBar",
  data() {
    return {
      current: "首页",
      tabs: tabs
    };
  },
  methods: {
    changeHandler(tab) {
      switch (tab) {
        case "首页":
          this.$router.push("/");
          break;
        case "奶粉尿布":
          this.$router.push("/nfnb");
          break;
        case "全球购":
          this.$router.push("/qqg");
          break;
        case "童装":
          this.$router.push("/tz");
          break;
        case "食品":
          this.$router.push("/sp");
          break;
        case "用品":
          this.$router.push("/yp");
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    const wrapper = this.$refs.navwrapper;
    console.log(wrapper);
    let timeId;
    window.addEventListener(
      "scroll",
      () => {
        if (timeId) {
          clearTimeout(timeId);
        }

        timeId = setTimeout(() => {
          let btop =
            document.body.scrollTop || document.documentElement.scrollTop;
          const titleTop = wrapper.offsetTop;

          // console.log(btop, titleTop);

          if (btop > titleTop) {
            wrapper.className = "clearfix fix";
          } else {
            wrapper.className = "clearfix";
          }
        }, 8);
      },
      false
    );
  }
};
</script>

<style lang="less" scoped>
nav {
  z-index: 1;
}
.fix {
  position: fixed;
  top: 0;
  left: 0;
}
</style>

