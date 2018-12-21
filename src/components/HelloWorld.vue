<template>
  <div class="hello">
    <h1 @click="testmincount">{{ msg }}</h1>
    <P @click="testaddcount">来自store的数据:{{getCount}}</P>
    <button @click="testGetData">获取数据</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    getCount() {
      return this.$store.getters["counts/getCount"];
    }
  },
  methods: {
    testaddcount() {
      this.$store.dispatch("counts/add");
    },
    testmincount() {
      this.$store.dispatch("counts/min");
    },
    testGetData() {
      this.$store.dispatch("getHomeData");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
