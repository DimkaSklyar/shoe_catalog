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
    comparison: {
      productOne: null,
      productTwo: null,
    },
    wishList: [],
  },
  mutations: {
    SET_CATEGORIES(state, payload) {
      state.catagories = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
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
    async getProduct({ commit, dispatch }, params) {
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
        if (params.categorieId) {
          dispatch("getAllProduct", params);
        }
        commit("SET_PRODUCTS", data);
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
        console.log(data);
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
  },
});
