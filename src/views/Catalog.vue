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
                <p
                  @click="setCategories(category.id)"
                  class="text-sm hover:text-blue-600 cursor-pointer"
                >
                  {{ category.name }}
                </p>
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
              <div>
                Показать:
                <select
                  v-model="showSelected"
                  @change="showCount()"
                  class="border"
                >
                  <option value="8">8</option>
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
              </div>
            </div>
            <div class="grid auto-rows-auto grid-cols-4">
              <CardProduct
                :product="product"
                v-for="product in products"
                :key="product.id"
                class="mb-5 mx-2"
              />
            </div>
            <div class="border p-3 mb-6 flex items-center justify-between">
              <p>1 - {{ showSelected }} товаров из {{ productCount }}</p>
              <div>
                <div class="text-xs" v-if="pagination.length > 0">
                  <button
                    @click="setPage(params._page - 1)"
                    :disabled="params._page === 1"
                  >
                    Назад
                  </button>
                  <button
                    v-for="(item, index) in pagination.length - 1"
                    :key="index"
                    @click="setPage(index + 1)"
                    class="hover:text-blue-600 inline-block p-0.5 w-6 h-6 mx-1"
                  >
                    {{ index + 1 }}
                  </button>
                  <button
                    @click="setPage(params._page - 1)"
                    :disabled="params._page === 1"
                  >
                    Далее
                  </button>
                </div>
              </div>
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
    pagination() {
      return this.$store.getters.getPagination;
    },
  },
  data() {
    return {
      sortSelected: "",
      showSelected: 8,
      params: {
        _limit: 8,
        _sort: "",
        _order: "",
        _page: 1,
        _embed: "",
      },
    };
  },
  methods: {
    sorting() {
      if (this.sortSelected) {
        this.params._sort = this.sortSelected.split("_")[0];
        this.params._order = this.sortSelected.split("_")[1];
      }
      this.$store.dispatch("getProduct", this.params);
    },
    showCount() {
      this.params._limit = this.showSelected;
      this.$store.dispatch("getProduct", this.params);
    },
    setPage(page) {
      this.params._page = page;
      this.$store.dispatch("getProduct", this.params);
    },
    setCategories(idCategories) {
      this.params = { categorieId: idCategories, _page: 1 };
      this.$store.dispatch("getProduct", this.params);
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getProduct", { _limit: 8, _page: 1 });
  },
  components: {
    CardProduct,
  },
};
</script>
<style lang="scss"></style>
