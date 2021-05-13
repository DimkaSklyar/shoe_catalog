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
            class="shadow-md p-4 rounded relative flex flex-col justify-between"
          >
            <div class="">
              <img
                :src="comparisonProducts.productOne.images[0]"
                alt=""
                class="img"
              />
              <p class="paragrah">
                <span class="font-bold">Наименование:</span>
                {{ comparisonProducts.productOne.name | maxSring }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Цена:</span>
                от {{ comparisonProducts.productOne.price }} руб.
              </p>
              <p class="paragrah">
                <span class="font-bold">Назначение:</span>
                {{ comparisonProducts.productOne.appointment }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Страна:</span>
                {{ comparisonProducts.productOne.county }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Комплектация:</span>
                {{ comparisonProducts.productOne.equipment }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Состав:</span>
                {{ comparisonProducts.productOne.structure }}
              </p>
              <p
                class="paragrah"
                v-if="comparisonProducts.productOne.description !== ''"
              >
                <span class="font-bold">Описание:</span>
                {{ comparisonProducts.productOne.description }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Новинка:</span>
                {{ comparisonProducts.productOne.new ? "Да" : "Нет" }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Доступные размеры:</span>
                <span
                  v-for="(size, index) in comparisonProducts.productOne.size"
                  :key="index"
                  class="px-1 border inline-block mx-1"
                  >{{ size }}</span
                >
              </p>
            </div>
            <div class="flex justify-between items-center mt-9">
              <p @click="handleRemove(1)">
                <Button text="Удалить" class="ml-auto block">Удалить</Button>
              </p>
              <router-link
                to="/contacts"
                class="py-3 px-5 uppercase font-bold shadow-md focus:outline-none hover:bg-black transition-all ease-in-out hover:text-white"
                >Уточнить наличие</router-link
              >
            </div>
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
            class="shadow-md p-4 rounded relative flex flex-col justify-between"
          >
            <div>
              <img
                :src="comparisonProducts.productTwo.images[0]"
                alt=""
                class="img"
              />
              <p class="paragrah">
                <span class="font-bold">Наименование:</span>
                {{ comparisonProducts.productTwo.name | maxSring }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Цена:</span>
                от {{ comparisonProducts.productTwo.price }} руб.
              </p>
              <p class="paragrah">
                <span class="font-bold">Назначение:</span>
                {{ comparisonProducts.productTwo.appointment }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Страна:</span>
                {{ comparisonProducts.productTwo.county }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Комплектация:</span>
                {{ comparisonProducts.productTwo.equipment }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Состав:</span>
                {{ comparisonProducts.productTwo.structure }}
              </p>
              <p
                class="paragrah"
                v-if="comparisonProducts.productOne.description !== ''"
              >
                <span class="font-bold">Описание:</span>
                {{ comparisonProducts.productTwo.description }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Новинка:</span>
                {{ comparisonProducts.productTwo.new ? "Да" : "Нет" }}
              </p>
              <p class="paragrah">
                <span class="font-bold">Доступные размеры:</span>
                <span
                  v-for="(size, index) in comparisonProducts.productTwo.size"
                  :key="index"
                  class="px-1 border inline-block mx-1"
                  >{{ size }}</span
                >
              </p>
            </div>
            <div class="flex justify-between items-center mt-9">
              <p @click="handleRemove(2)">
                <Button text="Удалить" class="ml-auto block">Удалить</Button>
              </p>
              <router-link
                to="/contacts"
                class="py-3 px-5 uppercase font-bold shadow-md focus:outline-none hover:bg-black transition-all ease-in-out hover:text-white"
                >Уточнить наличие</router-link
              >
            </div>
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
  filters: {
    maxSring: function (value) {
      if (value.length > 20) {
        return value.slice(0, 20) + "...";
      }
      return value;
    },
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
.img {
  height: 200px;
  margin: 0 auto 30px;
  margin-bottom: 30px;
}
.paragrah {
  margin-bottom: 7px;
}
</style>
