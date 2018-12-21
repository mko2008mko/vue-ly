<template>
  <div>
    <div class="login-wrapper">
      <AppTopBar title="登录" />
      <div class="login-form-wrapper">
        <input
          type="text"
          placeholder="输入用户/手机号"
          v-model="phone"
        />
        <input
          type="password"
          placeholder="输入密码"
          v-model="pwd"
        />
        <input
          type="text"
          placeholder="输入验证码"
          v-model="vcode"
        />
        <cube-button :primary="true" @click="handleSubmitClick">提交</cube-button>

        <div>
          <span class="left valign">注册</span>
          <span class="right valign">></span>
        </div>

        <div>
          <span class="left valign">找回</span>
          <span class="right valign">></span>
        </div>
      </div>
    </div>

    登陆页面
  </div>
</template>

<script>
import AppTopBar from "../components/AppTopBar";

export default {
  name: "Login",
  components: {
    AppTopBar
  },
  data() {
    return {
      phone: "",
      pwd: "",
      vcode: ""
    };
  },
  props: {
    title: String
  },
  methods:{
      handleSubmitClick(){
          console.log(this.phone,this.pwd,this.vcode);
      }
  }
};
</script>

<style lang="less">
.login-form-wrapper {
  text-align: center;
  background: #fff;
  padding-bottom: 0.2rem;
  input {
    font-size: 0.28rem;
    text-indent: 0.2rem;
    margin: 0.2rem auto;
    border: none;
    height: 0.8rem;
    width: 90%;
    border-bottom: 1px dashed #ccc;
  }

  div {
    position: relative;
    margin: 0.2rem auto;
    height: 0.8rem;
    width: 90%;
    border-bottom: 1px dashed #ccc;

    .left {
      position: absolute;
      left: 0;
      top: 0.4rem;
      font-size: 0.22rem;
      margin-top: -0.22rem;
    }
    .right {
      position: absolute;
      right: 0;
      top: 0.4rem;
      font-size: 0.28rem;
      margin-top: -0.28rem;
      color: #f2622d;
    }
  }

  .cube-btn {
    margin: 0.2rem auto;
    width: 90%;
    background-color: #f2622d;
  }

  // .am-button{
  //     margin: 0.2rem auto;
  //     width: 90%;
  //     background-color: #f2622d;
  //     color:#fff;
  // }

  // .am-button-active{
  //     background-color: #fff;
  // }

  .valign {
    text-align: center;
  }
  .valign img {
    vertical-align: middle;
  }
  .valign:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}
</style>

