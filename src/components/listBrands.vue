<template>
  <ul class="flex items-center justify-between p-7 bg-white">
    <li v-for="brand in brands" :key="brand.id">
      <a href="/">
        <figure class="brand">
          <img :src="brand.path" :alt="brand.name" />
        </figure>
      </a>
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
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
}
</style>
