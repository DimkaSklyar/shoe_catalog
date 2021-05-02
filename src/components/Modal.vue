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
      <div>
        <img :src="product.images[0]" alt="" class="w-full" />
      </div>
      <div>
        <h2 class="uppercase font-bold text-lg">{{ product.name }}</h2>
        <p class="uppercase font-bold text-lg text-blue-600">
          Цена: {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import closeIcon from "@iconify/icons-carbon/close";

export default {
  name: "Modal",
  props: ["product"],
  components: {
    IconifyIcon,
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
  width: 50%;
  min-height: 500px;
}
</style>
