<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 right-0 bg-opacity-5 bg-black z-20 flex items-center shadow-2xl"
  >
    <div class="modal bg-white relative mx-auto grid gap-10 grid-cols-2 p-10">
      <IconifyIcon
        @click="$emit('showModal')"
        :icon="icons.closeIcon"
        :style="{ fontSize: '50px' }"
        class="absolute right-2 top-2 cursor-pointer"
      />
      <div class="wrap_img">
        <img :src="product.images[0]" alt="" class="modal_img" />
      </div>
      <div>
        <h2 class="uppercase font-bold text-lg">{{ product.name }}</h2>
        <p>
          <span class="font-bold">Наименование:</span>
          {{ product.name }}
        </p>
        <p>
          <span class="font-bold text-blue-600"
            >Цена: от {{ product.price }}руб.</span
          >
        </p>
        <p>
          <span class="font-bold">Назначение:</span>
          {{ product.appointment }}
        </p>
        <p>
          <span class="font-bold">Страна:</span>
          {{ product.county }}
        </p>
        <p>
          <span class="font-bold">Комплектация:</span>
          {{ product.equipment }}
        </p>
        <p>
          <span class="font-bold">Состав:</span>
          {{ product.structure }}
        </p>
        <p>
          <span class="font-bold">Описание:</span>
          {{ product.description }}
        </p>
        <p>
          <span class="font-bold">Новинка:</span>
          {{ product.new ? "Да" : "Нет" }}
        </p>
        <p class="mb-3">
          <span class="font-bold">Доступные размеры:</span>
          <span
            v-for="(size, index) in product.size"
            :key="index"
            class="px-1 border inline-block mx-1"
            >{{ size }}</span
          >
        </p>
        <div class="flex justify-between">
          <Comparison :product="product" :id="product.id" text="К сравнению" />
          <router-link
            to="/contacts"
            class="py-3.5 px-5 uppercase font-bold shadow-md focus:outline-none hover:bg-black transition-all ease-in-out hover:text-white"
            >Уточнить наличие</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import closeIcon from "@iconify/icons-carbon/close";
import Comparison from "../components/Comparison";

export default {
  name: "Modal",
  props: ["product"],
  components: {
    IconifyIcon,
    Comparison,
  },
  data() {
    return {
      icons: {
        closeIcon,
      },
    };
  },
};
</script>
<style lang="scss">
.modal {
  width: 850px;
  min-height: 200px;
  &_img {
    max-height: 200px;
    height: 100%;
    margin: 0 auto;
  }
  .wrap_img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
