<template>
  <div class="border-b mb-10">
    <div class="container mx-auto my-20">
      <div class="catalog">
        <h1
          class="text-center text-2xl text-black uppercase font-semibold mb-8"
        >
          Каталог
        </h1>
        <div class="grid gap-20 grid-cols-12">
          <div class="col-span-2">
            <h2 class="font-bold uppercase tracking-widest mb-3">Категории</h2>
            <ul>
              <li v-for="category in categories" :key="category.id">
                <router-link
                  :to="category.link"
                  class="text-sm hover:text-blue-600"
                  >{{ category.name }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-span-10">
            <div class="border p-3 mb-6 flex items-center justify-between">
              <div>
                Сортировать по:
                <select
                  v-model="sortSelected"
                  @change="sorting()"
                  class="border"
                >
                  <option disabled value="">По умолчанию</option>
                  <option value="name_asc">По имени: A-Z</option>
                  <option value="name_desc">По имени: Z-A</option>
                  <option value="price_asc">По цене: возрастанию</option>
                  <option value="price_desc">По цене: убыванию</option>
                </select>
              </div>
              <p>Количество товаров: {{ productCount }}</p>
            </div>
            <div class="grid auto-rows-auto grid-cols-4">
              <CardProduct
                :product="product"
                v-for="product in products"
                :key="product.id"
                class="mb-5 mx-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardProduct from "../components/CarcProduct";
export default {
  name: "Catalog",
  computed: {
    categories() {
      return this.$store.getters.getCategory;
    },
    products() {
      return this.$store.getters.getProducts;
    },
    productCount() {
      return this.$store.getters.getProductCount;
    },
  },
  data() {
    return {
      sortSelected: "",
      params: {
        _limit: 10,
        _sort: "",
        _order: "",
      },
    };
  },
  methods: {
    sorting() {
      if (this.sortSelected) {
        this.params._sort = this.sortSelected.split("_")[0];
        this.params._order = this.sortSelected.split("_")[1];
      }
      this.params._order = this.$store.dispatch("getProduct", this.params);
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getProduct", { _limit: 5, _page: 1 });
  },
  components: {
    CardProduct,
  },
};
</script>
<style lang="scss"></style>
