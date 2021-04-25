<template>
  <div
    class="card p-4 hover:shadow-2xl transition-all duration-500 shadow-lg rounded"
  >
    <div class="card__inner">
      <router-link to="/">
        <div
          class="cart__img p-5 relative"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <img :src="product.images[0]" alt="" />
          <img
            :src="product.images[1]"
            alt=""
            class="absolute top-0 left-0 transition-all duration-700"
            :class="isHover ? 'opacity-1' : 'opacity-0'"
          />
        </div>
      </router-link>
      <div class="card__info flex justify-between relative">
        <router-link to="/" class="flex"
          ><div class="cart__name leading-none text-sm text-gray-700">
            {{ product.name }}
          </div>
        </router-link>
        <div class="absolute z-10 bottom-12 right-0 flex">
          <div class="card__option cursor-pointer mr-1">
            <IconifyIcon
              :icon="icons.searchPlus"
              :style="{ color: '#2563eb', fontSize: '16px' }"
            />
          </div>
          <div class="card__option cursor-pointer">
            <IconifyIcon
              :icon="icons.heartFill"
              :style="{ color: '#2563eb', fontSize: '16px' }"
            />
          </div>
        </div>
        <button
          class="bg-blue-600 p-3 text-white uppercase font-semibold hover:shadow-md transition-all"
        >
          <IconifyIcon
            :icon="icons.bxGitCompare"
            :style="{ color: '#ffffff', fontSize: '20px' }"
          />
        </button>
      </div>
      <div class="price text-sm text-blue-600 font-semibold">
        {{ product.price }}р.
      </div>
    </div>
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import bxGitCompare from "@iconify/icons-bx/bx-git-compare";
import heartFill from "@iconify/icons-bi/heart-fill";
import searchPlus from "@iconify/icons-fe/search-plus";
export default {
  name: "CardProduct",
  props: ["product"],
  components: {
    IconifyIcon,
  },
  data() {
    return {
      isHover: false,
      icons: {
        bxGitCompare,
        heartFill,
        searchPlus,
      },
    };
  },
};
</script>
<style scoped lang="scss">
.card {
  &__option {
    transition: 0.3s;
    &:hover {
      transform: scale(1.25);
    }
  }
}
</style>
