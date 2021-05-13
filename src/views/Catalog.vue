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
              <li>
                <router-link
                  to="/catalog"
                  class="text-sm hover:text-blue-600 cursor-pointer"
                >
                  Все
                </router-link>
              </li>
              <li v-for="category in categories" :key="category.id">
                <router-link
                  :to="category.link"
                  class="text-sm hover:text-blue-600 cursor-pointer"
                >
                  {{ category.name }}
                </router-link>
              </li>
            </ul>
            <h2 class="font-bold uppercase tracking-widest mb-3 mt-3">
              Бренды
            </h2>
            <ul>
              <li v-for="brand in brands" :key="brand.id">
                <router-link
                  :to="brand.link"
                  class="text-sm hover:text-blue-600 cursor-pointer"
                >
                  {{ brand.name }}
                </router-link>
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
    brands() {
      return this.$store.getters.getBrands;
    },
  },
  data() {
    return {
      sortSelected: "",
      showSelected: 8,
      countProduct: 0,
      params: {
        _limit: 8,
        _sort: "",
        _order: "",
        _page: 1,
        _embed: "",
      },
    };
  },
  watch: {
    // eslint-disable-next-line prettier/prettier
    $route: "fetchData",
  },

  methods: {
    async fetchData() {
      await this.$store.dispatch("getCategories");
      const { category, brands } = this.$route.params;

      if (category) {
        const categoryId = this.categories.find((cat) =>
          cat.link.includes(category)
        ).id;
        this.params = { _page: 1, _limit: 8, _embed: "products" };
        this.$store.dispatch("getProductFromCategory", {
          categoryId,
          query: {
            ...this.params,
            _limit: 8,
            _page: 1,
          },
        });
        this.$store.dispatch("getAllProduct", {
          categoryId,
        });
      } else if (brands) {
        const brandId = this.brands.find((cat) => cat.link.includes(brands)).id;
        this.params = { _page: 1, _limit: 8, _embed: "products" };
        this.$store.dispatch("getProductFromBrands", {
          brandId,
          query: {
            ...this.params,
            _limit: 8,
            _page: 1,
          },
        });
        this.$store.dispatch("getAllProduct", {
          brandId,
        });
      } else {
        this.$store.dispatch("getProduct", { _limit: 8, _page: 1 });
        this.$store.dispatch("getAllProduct");
      }
    },
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
  },
  async mounted() {
    await this.$store.dispatch("getBrands");
    await this.$store.dispatch("getCategories");
    const { category, brands } = this.$route.params;

    if (category) {
      const categoryId = this.categories.find((cat) =>
        cat.link.includes(category)
      ).id;
      this.params = { _page: 1, _limit: 8, _embed: "products" };
      this.$store.dispatch("getProductFromCategory", {
        categoryId,
        query: {
          ...this.params,
          _limit: 8,
          _page: 1,
        },
      });
      this.$store.dispatch("getAllProduct", {
        categoryId,
      });
    } else if (brands) {
      const brandId = this.brands.find((cat) => cat.link.includes(brands)).id;
      this.params = { _page: 1, _limit: 8, _embed: "products" };
      this.$store.dispatch("getProductFromBrands", {
        brandId,
        query: {
          ...this.params,
          _limit: 8,
          _page: 1,
        },
      });
      this.$store.dispatch("getAllProduct", {
        brandId,
      });
    } else {
      this.$store.dispatch("getProduct", { _limit: 8, _page: 1 });
      this.$store.dispatch("getAllProduct");
    }
  },
  components: {
    CardProduct,
  },
};
</script>
<style lang="scss"></style>
