<template>
  <button
    :type="type"
    class="py-3 px-5 uppercase font-bold shadow-md focus:outline-none hover:bg-black transition-all ease-in-out"
    :class="[isWhite ? 'bg-white text-blue-600' : 'bg-blue-600 text-white ']"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["text", "isWhite", "type"],
};
</script>
<style lang=""></style>
