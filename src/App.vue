<template>
  <div class="min-h-screen">
    <div class="container mx-auto">
      <div class="flex items-center py-5">
        <div class="logo flex-none">
          <router-link to="/"><img :src="LOGO" alt="logo" /></router-link>
        </div>
        <ListNavigation class="flex-grow" />
        <div class="comparison flex-none">Сравнение</div>
      </div>
    </div>
    <router-view />
    <div class="container mx-auto">
      <Footer />
    </div>
    <div class="bg-blue-600 py-1 text-center text-white">
      © Интернет каталог Sneakk. Все права защищены
    </div>
  </div>
</template>
<script>
import listNavigation from "./components/listNavigation.vue";
import Footer from "./components/Footer";
import LOGO from "./assets/logo.png";

export default {
  components: {
    ListNavigation: listNavigation,
    Footer,
  },
  data() {
    return {
      LOGO,
    };
  },
  mounted() {
    console.log(1);
    this.$store.dispatch("getAllProduct");
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
