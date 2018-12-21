<template>
  <div class="home-category-wrapper">
    <ul v-if="data">

      <li
        v-for="item in data"
        :key="item.id"
        style={fstyle}
      >
        <a :href="item.linkUrl">
          <img
            :src="item.imgUrl"
            alt=""
          />
          <p>{{item.title}}</p>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "HoemCategory",
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.home-category-wrapper {
  background: #fff;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
      width: 25%;
      margin-top: 0.28rem;
      text-align: center;
      // flex:1

      img {
        width: 0.88rem;
        height: 0.88rem;
        border-radius: 50%;
        border: 0.01rem solid #fff;
      }

      p {
        font-size: 0.26rem;
        margin-top: 0.18rem;
        margin-bottom: 0.28rem;
      }
    }
  }
}
</style>
