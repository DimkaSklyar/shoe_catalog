<template>
  <div class="container mx-auto">
    <div class="p-28 bg-blue-500">
      <Slider />
    </div>
    <div class="categories">
      <Categories class="pt-20" />
    </div>
    <div class="grid grid-cols-9 gap-10 pt-20">
      <div class="big-sale text-blue-600 self-center col-span-4">
        <h2 class="font-extrabold text-blue-600 text-4xl">
          Выгодное предложение
        </h2>
        <h3
          class="font-extrabold text-10xl text-stroke text-transparent leading-none"
        >
          -30%
        </h3>
        <p class="text-right text-black uppercase font-bold mt-4">
          Баскетбольная коллекция
        </p>
        <Timer class="justify-end pt-5" />
      </div>
      <div class="discount-img shadow-2xl col-span-5">
        <img src="../../public/img/bigdiscount.webp" alt="" />
      </div>
    </div>
    <section class="py-20">
      <div
        class="section__title text-center uppercase font-semibold text-blue-600 text-xl mb-8"
      >
        Новики
      </div>
      <div class="grid grid-cols-4 gap-3">
        <CarcProduct
          v-for="item in newProducts"
          :key="item.id"
          :product="item"
        />
      </div>
    </section>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
import Slider from "../components/Slider.vue";
import Categories from "../components/categories.vue";
import Timer from "../components/Timer.vue";
import CarcProduct from "../components/CarcProduct.vue";
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      newProducts: [],
    };
  },
  components: {
    Slider,
    Categories,
    Timer,
    CarcProduct,
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3001/products?_limit=4");
    this.newProducts = data;
  },
};
</script>

<style lang="scss">
.text-stroke {
  -webkit-text-stroke: #1d73dd 2px;
}
</style>
