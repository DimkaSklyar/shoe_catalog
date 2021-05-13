<template>
  <div class="min-h-screen">
    <div class="container mx-auto">
      <div class="flex items-center py-5">
        <div class="logo flex-none">
          <router-link to="/"><img :src="LOGO" alt="logo" /></router-link>
        </div>
        <ListNavigation class="flex-grow" />
        <div class="flex-none text-base font-bold">
          <router-link to="/comparison">Сравнение</router-link>
        </div>
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
body {
  min-width: 989px;
  padding-left: 20px;
  padding-right: 20px;
}
.router-link-exact-active {
  color: #2563eb;
}
</style>
