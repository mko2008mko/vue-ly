<template>
  <div class="register-wrapper">
    <AppTopBar title="注册" />
    <div class="content-wrapper">
      <div>
        <label>手机号</label>
        <input
          type="text"
          placeholder="请输入手机号"
          v-model="phone"
        />
      </div>
      <div>
        <label>短信验证码</label>
        <input
          type="text"
          placeholder="请输入验证码"
          v-model="pcode"
        />
        <input
          class="huoqu-btn"
          type="button"
          value="获取验证码"
          @click="handlePcodeClick"
        />
      </div>
      <div>
        <label>验证码</label>
        <input
          type="text"
          placeholder="右侧验证码"
          v-model="vcode"
        />
      </div>
      <p>同意《乐友网隐私权与服务条款》</p>
      <cube-button
        :primary="true"
        @click="handleSubmitClick"
      >提交</cube-button>
      <!-- <Button onClick={this.handleSubmit}>下一步</Button> -->
      {{username}}
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppTopBar from "../components/AppTopBar";

export default {
  name: "Register",
  data() {
    return {
      phone: "",
      pcode: "",
      vcode: ""
    };
  },
  components: {
    AppTopBar
  },
  methods: {
    ...mapActions("users", ["getRegister", "getPcCode"]),
    handleSubmitClick() {
      if (!this.phone) {
        this.$createToast({
          txt: "请输入手机号",
          type: "txt"
        }).show();
      } else if (!this.pcode) {
        this.$createToast({
          txt: "请输入手机验证码",
          type: "txt"
        }).show();
      } else if (this.pcode !== this.servercode) {
          console.log(servercode)
        this.$createToast({
          txt: "手机验证码不正确",
          type: "txt"
        }).show();
      } else {
        this.getRegister({ phone: this.phone });
      }
    },
    handlePcodeClick() {
      if (!this.phone) {
        this.$createToast({
          txt: "请输入手机号",
          type: "txt"
        }).show();
      } else if (!this.vcode) {
        this.$createToast({
          txt: "请输入图形验证码",
          type: "txt"
        }).show();
      } else {
        this.getPcCode(this.phone);
      }
    }
  },
  computed: {
    ...mapGetters("users", {
      username: "getUserName",
      servercode: "getCode"
    })
  },
    updated() {
    if (this.username) {
      this.$router.go(-2);
    }
  }
};
</script>

<style lang="less" scoped>
.register-wrapper {
  .content-wrapper {
    div {
      position: relative;
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding-left: 0.1rem;

      label {
        font-size: 0.25rem;
        color: #333;
      }

      input {
        text-indent: 0.2rem;
        margin: 0.2rem auto;
        border: none;
        font-size: 12px;
        height: 0.6rem;
        // border-bottom: 1px dashed #ccc;
      }

      .huoqu-btn {
        position: absolute;
        right: 0;
        margin: 0;
        margin-right: 0.1rem;
        height: 99%;
        background: #fff;
        width: 25%;
        border-left: 1px solid #ccc;
      }
    }
  }

  p {
    font-size: 0.25rem;
    // margin: 12px 0 22px;
    padding-left: 2%;
    line-height: 0.8rem;
  }
}
</style>

