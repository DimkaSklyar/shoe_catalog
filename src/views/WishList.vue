<template>
  <div class="border-b mb-10">
    <div class="custom-container mx-auto my-20">
      <div class="about">
        <h1 class="text-center text-2xl text-black uppercase font-semibold">
          Избранное
        </h1>
        <div>
          <div class="grid auto-rows-auto grid-cols-3">
            <CardProduct
              :product="product"
              v-for="product in wishList"
              :key="product.id"
              class="mb-5 mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardProduct from "../components/CarcProduct";
export default {
  name: "WishList",
  components: {
    CardProduct,
  },
  computed: {
    wishList() {
      return this.$store.getters.getWishList;
    },
  },
  mounted() {
    this.$store.dispatch("getWishList");
  },
};
</script>

<style lang="scss">
.about {
  margin-top: 50px;
  p {
    margin-bottom: 15px;
    line-height: 1.7;
    position: relative;
    padding-bottom: 20px;
    &.decor::before {
      content: "";
      position: absolute;
      height: 1px;
      width: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: blue;
      bottom: 0;
    }
  }
}
.custom-container {
  width: 900px;
}
.list {
  li {
    padding-left: 20px;
    position: relative;
    &:before {
      content: "-";
      position: absolute;
      left: 0;
    }
  }
}
</style>
