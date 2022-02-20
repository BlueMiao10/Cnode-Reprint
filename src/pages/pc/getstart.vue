<template>
  <div class="getStart">
    <Header/>
    <main>
      <MemberGuide class="getstart"></MemberGuide>
      <div class="side">
        <Standings class="standings"></Standings>
        <Aside></Aside>
      </div>
    </main>
      <Footer/>
  </div>
</template>

<script>
import Standings from "../../components/Standings.vue";
import Aside from "../../components/Adside.vue";
import MemberGuide from "../../components/MemberGuide.vue";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default {
  components: {
    Footer,
    Standings,
    Aside,
    MemberGuide,
    Header
  }
};
</script>

<style lang="scss" scoped>
.getStart {
  display: flex;
  flex-direction: column;


  main{
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

</style>
