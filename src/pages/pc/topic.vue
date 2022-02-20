<template>
  <div class="topic">
    <Header/>
    <main>
      <Detail class="detail"></Detail>
      <div>
        <DetailSideBar :loginname="loginname" v-if="loginname"></DetailSideBar>
        <Aside class="adSide"></Aside>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Detail from "../../components/Detail.vue";
import DetailSideBar from "../../components/DetailSideBar.vue";
import topic from "../../api/topic.js";
import Aside from "../../components/Adside.vue";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default {
  data() {
    return {
      loginname: null
    };
  },
  components: {
    Footer,
    Detail,
    DetailSideBar,
    Aside,
    Header
  },
  created() {
    this.id = this.$route.params.id;

    topic.getTopicById({id: this.id}).then(res => {
      this.loginname = res.data.data.author.loginname;
    });
  }
};
</script>

<style lang="scss" scoped>
.topic {
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
  .topic {
    height: 100%;
    width: 100%;
    margin: 2%;
  }
}
</style>
