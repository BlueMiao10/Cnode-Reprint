<template>
  <div class="main">
    <Header/>
    <main>
      <TopicList class="topicList"></TopicList>
      <div class="side">
        <Standings class="standings"></Standings>
        <Aside></Aside>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import TopicList from '../../components/TopicList.vue';
import Standings from "../../components/Standings.vue";
import Aside from "../../components/Adside.vue";
import Header from "../../components/Header";
import Footer from "../../components/Footer"

export default {
  components: {
    TopicList,
    Standings,
    Aside,
    Header, Footer
  }
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;


  main {
    display: flex;
    justify-content: center;

    > .side {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      > .standings {
        margin-bottom: 20px;
      }
    }
  }
}

@media screen and (max-width: 1050px) {
  .main {
    display: flex;
    flex-direction: column;

    main {
      display: flex;
      justify-content: center;

      > .topicList {
        width: 80%;
      }

      > .side {
        > .standings {
          display: none;
        }
      }
    }
  }
}
</style>
