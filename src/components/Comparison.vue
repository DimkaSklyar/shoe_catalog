<template>
  <button
    ref="comparison"
    class="bg-blue-600 p-3 text-white uppercase font-semibold hover:shadow-md transition-all relative hover:bg-blue-800"
    @click="toggleComparison"
    @mouseleave="isShowComparison = false"
  >
    <IconifyIcon
      v-if="!text"
      :icon="icons.bxGitCompare"
      :style="{ color: '#ffffff', fontSize: '20px' }"
    />
    <p v-if="text" class="uppercase font-bold text-white m-0 p-0">
      {{ text }}
    </p>
    <div
      class="comparison grid grid-cols-2 absolute z-50 gap-2"
      v-if="isShowComparison"
    >
      <div
        class="p-0.5 border-1 border-blue-400 shadow-2xl bg-blue-200 hover:bg-blue-100 transition-all relative"
        @click.prevent="setComparison(1, product)"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
        <div
          v-if="comparisonProducts.productOne && isHover"
          class="bg-red-400 p-0.5 px-1 text-xs normal-case absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Заменить
        </div>
        <img
          :src="comparisonProducts.productOne.images[0]"
          alt=""
          v-if="comparisonProducts.productOne !== null"
        />
      </div>
      <div
        class="p-0.5 border-1 border-blue-400 shadow-2xl bg-blue-200 hover:bg-blue-100 transition-all relative"
        @click.prevent="setComparison(2, product)"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
        <div
          v-if="comparisonProducts.productTwo && isHover"
          class="bg-red-400 p-0.5 px-1 text-xs normal-case absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Заменить
        </div>
        <img
          :src="comparisonProducts.productTwo.images[0]"
          alt=""
          v-if="comparisonProducts.productTwo !== null"
        />
      </div>
    </div>
  </button>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import bxGitCompare from "@iconify/icons-bx/bx-git-compare";
export default {
  name: "Comparison",
  components: {
    IconifyIcon,
  },
  props: ["product", "text"],
  data() {
    return {
      isShowComparison: false,
      isHover: false,
      icons: {
        bxGitCompare,
      },
    };
  },
  computed: {
    comparisonProducts() {
      return this.$store.getters.getComparison;
    },
  },
  methods: {
    toggleComparison() {
      this.isShowComparison = !this.isShowComparison;
    },
    setComparison(id, product) {
      if (
        product !== this.comparisonProducts.productOne &&
        product !== this.comparisonProducts.productTwo
      )
        this.$store.dispatch("setComparison", { id, product });
    },
  },
};
</script>
<style lang="scss">
.comparison {
  width: 150px;
  height: 70px;
}
</style>
