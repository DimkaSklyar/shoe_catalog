import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catagories: [],
    products: [],
    allProducts: [],
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
  },
  actions: {
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
        console.log(headers);
        commit("SET_PRODUCTS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async getAllProduct({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3001/products");
        commit("SET_ALL_PRODUCTS", data);
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
  },
});
