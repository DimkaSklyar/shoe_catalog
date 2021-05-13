<template>
  <nav>
    <ul class="flex justify-center">
      <li
        v-for="item in MAIN_MANU"
        :key="item.id"
        class="px-3 text-base font-bold"
      >
        <router-link :to="item.link" class="inline-block">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { MAIN_MANU } from "../assets/consts/menus.js";
export default {
  name: "ListNavigation",
  data() {
    return {
      MAIN_MANU,
    };
  },
};
</script>
<style lang="scss"></style>
