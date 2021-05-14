<template>
  <div
    class="card p-4 hover:shadow-2xl transition-all duration-500 shadow-lg rounded"
  >
    <div class="card__inner">
      <div class="cursor-pointer flex items-center justify-center">
        <div
          @click="showModal"
          class="card__img p-2 relative flex items-center justify-center"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <img
            :src="product.images[0]"
            alt=""
            class="w-full"
            :class="!isHover ? 'opacity-1' : 'opacity-0'"
          />
          <img
            :src="product.images[1]"
            alt=""
            class="absolute top-50 left-50 transition-all duration-700 w-full"
            :class="isHover ? 'opacity-1' : 'opacity-0'"
          />
        </div>
      </div>
      <div class="card__info flex justify-between relative">
        <div class="flex cursor-pointer">
          <div class="cart__name leading-none text-sm text-gray-700">
            {{ product.name }}
          </div>
        </div>
        <div class="absolute z-10 bottom-12 right-0 flex">
          <div class="card__option cursor-pointer mr-1">
            <IconifyIcon
              @click="showModal"
              :icon="icons.searchPlus"
              :style="{ color: '#2563eb', fontSize: '16px' }"
            />
          </div>
          <div class="card__option cursor-pointer">
            <IconifyIcon
              @click="addWishList(product)"
              :icon="product.wishList ? icons.heartFill : icons.heartOutlined"
              :style="{ color: '#2563eb', fontSize: '16px' }"
            />
          </div>
        </div>
        <Comparison :product="product" :id="product.id" />
      </div>
      <div class="price text-sm text-blue-600 font-semibold">
        Цена: от {{ product.price }}р.
      </div>
    </div>
    <Modal :product="product" v-if="isShowModal" @showModal="showModal" />
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import bxGitCompare from "@iconify/icons-bx/bx-git-compare";
import heartFill from "@iconify/icons-bi/heart-fill";
import searchPlus from "@iconify/icons-fe/search-plus";
import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import Modal from "./Modal.vue";
import Comparison from "./Comparison.vue";

export default {
  name: "CardProduct",
  props: ["product"],
  components: {
    IconifyIcon,
    Modal,
    Comparison,
  },
  data() {
    return {
      isHover: false,
      isShowModal: false,
      icons: {
        bxGitCompare,
        heartFill,
        searchPlus,
        heartOutlined,
      },
    };
  },
  methods: {
    showModal() {
      this.isShowModal = !this.isShowModal;
    },
    async addWishList(product) {
      await this.$store.dispatch("setWishList", {
        id: product.id,
        isWish: !product.wishList,
      });
      this.$store.dispatch("getWishList");
    },
  },
};
</script>
<style scoped lang="scss">
.card {
  &__img {
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  &__option {
    transition: 0.3s;
    &:hover {
      transform: scale(1.25);
    }
  }
}
</style>
