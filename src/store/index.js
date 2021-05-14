import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catagories: [],
    products: [],
    allProducts: [],
    pagination: [],
    brands: [],
    newProducts: [],
    comparison: {
      productOne: null,
      productTwo: null,
    },
    wishList: [],
    isComparison: null,
  },
  mutations: {
    TOGGLE_COMPARISON(state, payload) {
      state.isComparison = payload;
    },
    SET_CATEGORIES(state, payload) {
      state.catagories = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_NEW_PRODUCTS(state, payload) {
      state.newProducts = payload;
    },
    SET_ALL_PRODUCTS(state, payload) {
      state.allProducts = payload;
    },
    SET_PAGINATION(state, payload) {
      if (payload.length > 0) {
        const links = payload.split(",");
        links.map((link) => {
          return {
            link: link.trim().split("<")[1].split(">")[0],
            rel: link.split(";")[1].trim(),
          };
        });
        state.pagination = links;
      } else {
        state.pagination = [];
      }
    },
    SET_COMPARISON(state, { id, product }) {
      if (id === 1) {
        state.comparison.productOne = product;
      } else {
        state.comparison.productTwo = product;
      }
    },
    SET_WISHLIST(state, paylod) {
      state.wishList = paylod;
    },
    SET_BRANDS(state, paylod) {
      state.brands = paylod;
    },
  },
  actions: {
    toggleComparison({ commit }, payload) {
      commit("TOGGLE_COMPARISON", payload);
    },
    async getBrands({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3001/brands");
        commit("SET_BRANDS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCategories({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3001/categories");
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProduct({ commit }, params) {
      try {
        const { data, headers } = await axios.get(
          "http://localhost:3001/products",
          {
            params,
          }
        );
        if (headers.link) {
          commit("SET_PAGINATION", headers.link);
        }
        commit("SET_PRODUCTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getNewProduct({ commit }) {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/products?new=true&_limit=4"
        );
        commit("SET_NEW_PRODUCTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductFromCategory({ commit }, params) {
      try {
        const { data, headers } = await axios.get(
          `http://localhost:3001/categories/${params.categoryId}`,
          {
            params: params.query,
          }
        );
        if (headers.link) {
          commit("SET_PAGINATION", headers.link);
        }
        commit("SET_PRODUCTS", data.products);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductFromBrands({ commit }, params) {
      try {
        const { data, headers } = await axios.get(
          `http://localhost:3001/brands/${params.brandId}`,
          {
            params: params.query,
          }
        );
        if (headers.link) {
          commit("SET_PAGINATION", headers.link);
        }
        commit("SET_PRODUCTS", data.products);
      } catch (error) {
        console.log(error);
      }
    },
    async getAllProduct({ commit }, params) {
      try {
        const { data, headers } = await axios.get(
          "http://localhost:3001/products",
          {
            params,
          }
        );
        if (!headers.link) {
          commit("SET_PAGINATION", []);
        }
        commit("SET_ALL_PRODUCTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    setComparison({ commit }, payload) {
      commit("SET_COMPARISON", payload);
    },
    async setWishList({ commit, state }, payload) {
      const newList = state.products.map((product) => {
        if (product.id === payload.id) {
          product.wishList = !product.wishList;
          return product;
        }
        return product;
      });
      commit("SET_PRODUCTS", newList);
      try {
        await axios.patch(`http://localhost:3001/products/${payload.id}`, {
          wishList: payload.isWish,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getWishList({ commit }) {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/products?wishList=true`
        );
        commit("SET_WISHLIST", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    getCategory: (state) => state.catagories,
    getProducts: (state) => state.products,
    getProductCount: (state) => state.allProducts.length,
    getPagination: (state) => state.pagination,
    getComparison: (state) => state.comparison,
    getWishList: (state) => state.wishList,
    getBrands: (state) => state.brands,
    isComparison: (state) => state.isComparison,
    getNewProduct: (state) => state.newProducts,
  },
});
