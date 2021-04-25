<template>
  <footer class="mb-20">
    <div class="grid grid-cols-4 gap-5">
      <div>
        <h3 class="text-blue-600 mb-7">О нас</h3>
        <p class="text-xs pr-20">
          Битва, возможность, одержимость, самовыражение - какой бы ни была игра
          для вас, правильная обувь поможет вам выделиться на линии и произвести
          фурор.
        </p>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Категории</h3>
        <div class="flex">
          <ul class="mr-10">
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Кроссовки</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Ботинки</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Бутсы</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Туризм</router-link>
            </li>
          </ul>
          <ul>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Бег</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Тренировки</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Новики</router-link>
            </li>
            <li class="text-sm hover:text-blue-600">
              <router-link to="/">Кеды</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Информация о магазине</h3>
        <ul>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">О нас</router-link>
          </li>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">Каталог</router-link>
          </li>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">Контакты</router-link>
          </li>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">Политика конфиденциальности</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-blue-600 mb-7">Личное</h3>
        <ul>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">В сравнение</router-link>
          </li>
          <li class="text-sm hover:text-blue-600">
            <router-link to="/">Историй сравнений</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss"></style>
