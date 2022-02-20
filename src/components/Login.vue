<template>
  <div class="loginWrapper">
    <Header class="header"/>
    <div id="login">
      <label>请输入您的<span> Access Token</span>，来登陆CNode社区</label>
      <div class="tokenInput">
        <el-input
          placeholder="请输入Token"
          v-model="token"
          show-password
        ></el-input>
      </div>
      <el-button type="primary">确认登陆</el-button>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {Footer, Header},
  data() {
    return {
      token: ""
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/base.scss";

.loginWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header, .footer {
    width: 100%;
  }

}

#login {
  font-size: 16px;
  background-color: #fff;
  width: 690px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  > label {
    > span {
      font-weight: bold;
      color: $theme-color;
    }
  }

  > .tokenInput {
    width: 500px;
    margin: 20px 0;
  }
}

@media screen and (max-width: 480px) {
  #login {
    height: 100%;
    width: 100vw;
    margin: 2%;

    > .tokenInput {
      width: 80%;
      margin: 20px 0;
    }
  }
}
</style>
