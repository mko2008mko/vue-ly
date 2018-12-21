<template>
  <div>
    <h1>{{msg}}</h1>
    <button v-on:click="reverseMessage">逆转</button>
    <h1 class="hh" v-bind:title="message2">{{message}}</h1>
    <input v-model="message">
    <h3>{{computedNow}}  {{methodNow()}}</h3>
    <ul>
      <li v-for="item  in todos" v-bind:key="item.index">
        <TestItemComp v-bind:item="item"/>
        <!-- {{item.text}} -->
      </li>
    </ul>
  </div>
</template>
<script>
import TestItemComp from "./TestItemComp";

export default {
  name: "testComp",
  components: {
    TestItemComp
  },
  props: {
    msg: String
  },
  data() {
    return {
      message: "Hello Vue!",
      message2: " 页面加载于 " + new Date().toLocaleString(),
      todos: [
        { text: "学习 JavaScript", index: 1 },
        { text: "学习 Vue", index: 2 },
        { text: "学习Java开发", index: 3 }
      ]
    };
  },
  //    created(){
  //       console.log('create()....');
  //   },
  methods: {
    reverseMessage() {
      console.log(this.message);
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    methodNow() {
      return Date.now();
    }
  },
  computed: {
    computedNow() {
      return Date.now();
    }
  }
};
</script>
<style lang="less" scoped>
.hh {
  color: red;
  //   margin-top: 100px;
  //   margin-left: 100px;
}

li {
  list-style-type: none;
}
</style>


