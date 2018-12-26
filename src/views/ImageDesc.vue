<template>

  <div class="cdetail-imgdesc-wrapper">
    <h3>
      <img
        src="../assets/titleicon.png"
        alt=""
      />
    </h3>

    <ul v-if="imglist.length">
      <li
        v-for="item in imglist"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          alt=""
        />
      </li>
    </ul>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ImageDesc",
  computed: mapGetters("cdetails", {
    imglist: "getimglist"
  })
};
</script>

<style lang="less" scoped>
.cdetail-imgdesc-wrapper {
  padding: 1em 0;

  border-bottom: 1px solid #c9c7c7;

  h3 {
    img {
      width: 35%;
    }
    border-bottom: 1px solid #f2632f;
  }

  ul {
    img {
      width: 100%;
    }
  }
}
</style>

