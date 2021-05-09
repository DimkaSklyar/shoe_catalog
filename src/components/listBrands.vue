<template>
  <ul class="flex items-center justify-between p-7 bg-white">
    <li v-for="brand in brands" :key="brand.id">
      <router-link :to="brand.link">
        <figure class="brand">
          <img :src="brand.path" :alt="brand.name" />
        </figure>
      </router-link>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  name: "ListBrands",
  data() {
    return {
      brands: [],
    };
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3001/brands");
    this.brands = data;
  },
};
</script>
<style lang="scss">
.brand {
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
}
</style>
