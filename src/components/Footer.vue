<template>
  <footer class="mb-20">
    <div class="grid grid-cols-4 gap-5">
      <div>
        <h3 class="text-blue-600 mb-7">О нас</h3>
        <p class="text-xs pr-20">
          Битва, возможность, одержимость, самовыражение - какой бы ни была игра
          для вас, правильная обувь поможет вам выделиться на линии и произвести
          фурор
        </p>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Категории</h3>
        <div class="flex">
          <ul class="mr-10" v-if="categories">
            <li
              class="text-sm hover:text-blue-600"
              v-for="(category, index) in categories.slice(0, 4)"
              :key="index"
            >
              <router-link :to="category.link">{{ category.name }}</router-link>
            </li>
          </ul>
          <ul>
            <li
              class="text-sm hover:text-blue-600"
              v-for="(category, index) in categories.slice(4)"
              :key="index"
            >
              <router-link :to="category.link">{{ category.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Информация о магазине</h3>
        <ul>
          <li
            class="text-sm hover:text-blue-600"
            v-for="(item, index) in MAIN_MANU.slice(1)"
            :key="index"
          >
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Личное</h3>
        <ul>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/comparison">Cравнение</router-link>
          </li>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/WishList">Избранное</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
import { MAIN_MANU } from "../assets/consts/menus.js";
export default {
  name: "Footer",
  data() {
    return {
      MAIN_MANU,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
  },
};
</script>
<style lang="scss"></style>
