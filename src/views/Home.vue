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
        Новинки
      </div>
      <div class="grid grid-cols-4 gap-3">
        <CarcProduct
          v-for="item in newProducts"
          :key="item.id"
          :product="item"
        />
      </div>
    </section>
    <section class="pb-20">
      <div class="p-10 bg-blue-600">
        <ListBrands />
      </div>
    </section>
    <section>
      <div class="grid gap-7 grid-rows-2 grid-flow-col grid-cols-2">
        <div>
          <div
            class="banner banner-1 shadow-md p-20 flex flex-col items-end h-full"
          >
            <strong class="text-2xl uppercase">Наслаждайтесь скидкой</strong>
            <p class="text-2xl font-light mb-3">На Все Кроссовки для Бега</p>
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
        <div>
          <div class="banner banner-2 shadow-md p-20 h-full">
            <strong class="font-bold uppercase text-2xl mb-5 block"
              >Наши Бестселлеры</strong
            >
            <router-link to="/catalog" class="inline-block"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
        <div class="row-span-2">
          <div
            class="banner banner-3 shadow-md p-20 h-full flex flex-col justify-center"
          >
            <strong class="font-light text-3xl uppercase"
              >Лучшее в одном шаге</strong
            >
            <p
              class="font-extrabold text-7xl text-stroke text-transparent leading-none mb-5"
            >
              Просто взгляни
            </p>
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20">
      <div
        class="section__title text-center uppercase font-semibold text-blue-600 text-xl mb-8"
      >
        Лидеры продаж
      </div>
      <div class="grid grid-cols-4 gap-3">
        <CarcProduct v-for="item in products" :key="item.id" :product="item" />
      </div>
    </section>
    <section>
      <div class="grid grid-cols-2">
        <div>
          <div
            class="banner banner-4 px-20 py-5 h-full justify-end flex flex-col"
          >
            <strong class="uppercase font-normal text-3xl">Выбирай для</strong>
            <p class="font-bold text-2xl mb-5 uppercase">
              Спорта, ходьбы или прогулок
            </p>
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
        <div>
          <div
            class="banner banner-5 shadow-2xl px-20 py-28 h-full flex flex-col justify-center"
          >
            <p
              class="font-extrabold text-7xl text-stroke text-transparent leading-none mb-5"
            >
              Самые лучшие модели
            </p>
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="bg-blue-600 py-8 px-10">
        <form class="grid grid-cols-2 items-center" @submit.prevent="Subscribe">
          <p class="text-white">
            Подпишитесь на рассылку,чтобы получать предложения и многое другое
          </p>
          <div class="flex items-center relative">
            <input type="email" class="input" name="email" />
            <Button text="Подписаться" :isWhite="true" type="submit" />
            <p class="text-green-300 absolute notification" v-if="isSubmit">
              Сообщение успешно отправленно
            </p>
            <p class="text-red-300 notification" v-if="error">
              Ошибка отправки сообщения
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Categories from "../components/categories.vue";
import Timer from "../components/Timer.vue";
import CarcProduct from "../components/CarcProduct.vue";
import ListBrands from "../components/listBrands.vue";
import Button from "../components/button/Button.vue";
import emailjs from "emailjs-com";

export default {
  name: "Home",
  components: {
    Slider,
    Categories,
    Timer,
    CarcProduct,
    ListBrands,
    Button,
  },
  data() {
    return {
      isSubmit: false,
      error: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    newProducts() {
      return this.$store.getters.getNewProduct;
    },
  },
  async mounted() {
    this.$store.dispatch("getCategories");
    await this.$store.dispatch("getProduct", {
      ...this.params,
      _limit: 4,
      _page: 1,
    });
    this.$store.dispatch("getNewProduct");
  },
  methods: {
    Subscribe(e) {
      const self = this;
      emailjs
        .sendForm(
          "service_09y0d27",
          "template_xatuhhj",
          e.target,
          "user_L9DWJeTPuHpzPxrX7MVr8"
        )
        .then(
          (result) => {
            self.isSubmit = true;
            console.log("SUCCESS!", result.status, result.text);
            e.target.reset();
          },
          (error) => {
            self.error = true;
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss">
.text-stroke {
  -webkit-text-stroke: #1d73dd 2px;
}
.banner {
  background-repeat: no-repeat;
  background-size: cover;
  &-1 {
    background-image: url("../../public/img/banner/banner-1.jpg");
  }
  &-2 {
    background-image: url("../../public/img/banner/banner-2.jpg");
  }
  &-3 {
    background-image: url("../../public/img/banner/banner-3.jpg");
  }
  &-4 {
    background-image: url("../../public/img/banner/banner-4.jpg");
  }
  &-5 {
    background-image: url("../../public/img/banner/banner-5.jpg");
  }
}
.input {
  padding: 12px;
  width: 100%;
}
.notification {
  bottom: -25px;
}
</style>
