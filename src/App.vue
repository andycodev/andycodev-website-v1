<template>
  <div id="app">
    <div class="preloader">
      <div class="sk-spinner sk-spinner-pulse"></div>
    </div>

    <NavigationComponent />
    <HomeComponent />
    <AboutComponent :END_POINT="url" />
    <!-- <PortfolioComponent/> -->
    <SkillsComponent :END_POINT="url" />
    <FooterComponent />

    <a href="#" class="go-top"><i class="fa fa-angle-up"></i></a>
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import SkillsComponent from "./components/SkillsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";



export default {
  name: "App",
  components: {
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
  },

  data(){
    return{
      url: "/data.json"
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
