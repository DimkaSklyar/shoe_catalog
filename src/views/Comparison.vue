<template>
  <div class="border-b mb-10">
    <div class="custom-container mx-auto my-20">
      <div>
        <h1 class="text-center text-2xl text-black uppercase font-semibold">
          В сравнение
        </h1>
        <div
          class="grid grid-cols-2 mt-16 gap-5"
          v-if="comparisonProducts.productOne || comparisonProducts.productTwo"
        >
          <div
            v-if="comparisonProducts.productOne"
            class="shadow-md p-4 rounded relative pb-16"
          >
            <img
              :src="comparisonProducts.productOne.images[0]"
              alt=""
              class="w-full p-20 img"
            />
            <p>
              <span class="font-bold">Наименование:</span>
              {{ comparisonProducts.productOne.name }}
            </p>
            <p>
              <span class="font-bold">Цена:</span>
              {{ comparisonProducts.productOne.price }}
            </p>
            <p>
              <span class="font-bold">Назначение:</span>
              {{ comparisonProducts.productOne.appointment }}
            </p>
            <p>
              <span class="font-bold">Страна:</span>
              {{ comparisonProducts.productOne.county }}
            </p>
            <p>
              <span class="font-bold">Комплектация:</span>
              {{ comparisonProducts.productOne.equipment }}
            </p>
            <p>
              <span class="font-bold">Состав:</span>
              {{ comparisonProducts.productOne.structure }}
            </p>
            <p>
              <span class="font-bold">Описание:</span>
              {{ comparisonProducts.productOne.description }}
            </p>
            <p>
              <span class="font-bold">Новинка:</span>
              {{ comparisonProducts.productOne.new ? "Да" : "Нет" }}
            </p>
            <p @click="handleRemove(1)" class="absolute bottom-3 right-3">
              <Button text="Удалить" class="ml-auto block">Удалить</Button>
            </p>
          </div>
          <div
            v-else
            class="flex items-center justify-center font-bold uppercase flex-col"
          >
            Нет продукта для сравнения
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
          <div
            v-if="comparisonProducts.productTwo"
            class="shadow-md p-4 rounded relative pb-16"
          >
            <img
              :src="comparisonProducts.productTwo.images[0]"
              alt=""
              class="w-full p-20 img"
            />
            <p>
              <span class="font-bold">Наименование:</span>
              {{ comparisonProducts.productTwo.name }}
            </p>
            <p>
              <span class="font-bold">Цена:</span>
              {{ comparisonProducts.productTwo.price }}
            </p>
            <p>
              <span class="font-bold">Назначение:</span>
              {{ comparisonProducts.productTwo.appointment }}
            </p>
            <p>
              <span class="font-bold">Страна:</span>
              {{ comparisonProducts.productTwo.county }}
            </p>
            <p>
              <span class="font-bold">Комплектация:</span>
              {{ comparisonProducts.productTwo.equipment }}
            </p>
            <p>
              <span class="font-bold">Состав:</span>
              {{ comparisonProducts.productTwo.structure }}
            </p>
            <p>
              <span class="font-bold">Описание:</span>
              {{ comparisonProducts.productTwo.description }}
            </p>
            <p>
              <span class="font-bold">Новинка:</span>
              {{ comparisonProducts.productTwo.new ? "Да" : "Нет" }}
            </p>
            <p @click="handleRemove(2)" class="absolute bottom-3 right-3">
              <Button text="Удалить" class="ml-auto block">Удалить</Button>
            </p>
          </div>
          <div
            v-else
            class="flex items-center justify-center font-bold uppercase flex-col"
          >
            Нет продукта для сравнения
            <router-link to="/catalog"
              ><Button text="В каталог" />
            </router-link>
          </div>
        </div>
        <div v-else class="text-center text-4xl uppercase mt-9">
          Нет продуктов для сравнения
          <p>
            <router-link to="/catalog"
              ><Button text="В каталог" class="mt-9" />
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/button/Button";
export default {
  name: "Comparison",
  computed: {
    comparisonProducts() {
      return this.$store.getters.getComparison;
    },
  },
  components: {
    Button,
  },
  methods: {
    handleRemove(id) {
      this.$store.dispatch("setComparison", { id, product: null });
    },
  },
};
</script>
<style lang="scss">
.custom-container {
  width: 900px;
}
</style>
