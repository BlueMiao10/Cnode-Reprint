<template>
  <div id="user">
    <Header/>
    <main>
      <UserInfo></UserInfo>
      <div class="side">
        <DetailSideBar></DetailSideBar>
        <Aside class="adSide"></Aside>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import UserInfo from "../../components/UserInfo.vue";
import DetailSideBar from "../../components/DetailSideBar.vue";
import Aside from "../../components/Adside.vue";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default {
  components: {
    Footer,
    UserInfo,
    DetailSideBar,
    Aside,
    Header
  }
};
</script>

<style lang="scss"scoped>
#user {
  display: flex;
  flex-direction: column;


  main{
    display: flex;
    justify-content: center;
    margin: 0 20px;
    .adSide{
      margin-left: 20px;
    }
  }
}

@media screen and (max-width: 480px) {
  #user {
     margin: 0 2%;
  }
}

</style>
