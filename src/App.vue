<template>
  <div>
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
  </div>
</template>
<script>
import listNavigation from "./components/listNavigation.vue";
import LOGO from "./assets/logo.png";
export default {
  components: {
    ListNavigation: listNavigation,
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
</style>
