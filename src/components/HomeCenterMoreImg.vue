<template>
  <div
    class="home-center-moreimg-wrapper"
    style={fstyle}
  >

    <a
      v-for="item in data"
      :href="item.linkUrl"
      :key="item.id"
    >
      <img
        alt=""
        :src="item.imgUrl"
      />
    </a>

  </div>
</template>

<script>
export default {
  name: "HomeCenterMoreImg",
  props: {
    data: Array,
    required: true
  }
};
</script>

<style lang="less" scoped>
.home-center-moreimg-wrapper {
  margin-bottom: 0.1rem;
  display: flex;

  a {
    display: block;
    flex: 1;

    img {
      width: 100%;
    }
  }
}
</style>

