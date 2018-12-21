<template>
  <div v-if="data">
    <div
      v-for="item in data"
      class="imgone"
      :key="item.id"
    >
      <a :href="item.linkUrl">
        <img
          :src="item.imgUrl"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCenterImg",
  props: {
    data: Array,
    required: true
  }
};
</script>

<style lang="less" scoped>
div {
  background: #fff;

  .imgone {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>

