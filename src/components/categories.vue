<template>
  <div class="grid grid-cols-4">
    <div
      class="categories__item text-center"
      v-for="(item, index) in categories"
      :key="item.id"
    >
      <router-link
        :to="item.link"
        class="font-bold uppercase block p-24 hover:shadow-2xl transition-all"
        :class="{
          'border-b': index < 4,
          'border-l': index !== 0 && index !== 4,
        }"
        >{{ item.name }}</router-link
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3001/categories");
    this.categories = data;
  },
};
</script>
<style lang=""></style>
