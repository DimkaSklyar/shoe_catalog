<template>
  <div class="border-b mb-10">
    <div class="custom-container mx-auto my-20">
      <div class="about">
        <h1 class="text-center text-2xl text-black uppercase font-semibold">
          О нас
        </h1>
        <div>
          <div class="about">
            <p class="decor font-bold text-3xl">
              Sneakk – это интернет каталог обуви с 20 летним стажем.
            </p>
            <p class="decor">
              Каталог Sneakk – это воплощение парижского вкуса и стиля,
              выходящих далеко за рамки только модной обуви, аксессуаров и
              шопинга. Он, как мозаика, складывается из особенностей, изысканных
              деталей, оформления, переносящих посетителей на совершенно новый
              уровень.
            </p>
            <p class="decor">
              Сегодня количество товаров в Sneakk насчитывает более 10000, что
              делает каталог одним из лидеров сегмента.
            </p>
            <p class="decor">
              Портфель брендов каталога – более 100 имен, среди которых Calvin
              Klein, ASH, Katy Perry, Lacoste, LLoyd, Loake, MM6 Maison
              Margiela, Marc Jacobs, Nando Muzi и многие другие. Количество
              моделей исчисляется тысячами, среди которых всегда найдется пара
              на любой вкус и случай. Прямое взаимодействие с фабриками дает
              компании уникальную возможность адаптировать самые популярные
              модели из коллекций ведущих производителей. Несмотря на
              достигнутые высоты, Sneakk не стоит на месте, постоянно расширяя
              коллекцию и дополняя ее новыми именами.
            </p>
            <p class="decor">
              Широкая диверсифицированная линейка, представленная в каталоге
              обуви Sneakk – это уникальный выбор на любой вкус, который
              удовлетворит самых взыскательных покупателей.
            </p>
            <p class="decor">
              Еще одна отличительная черта Sneakk – индивидуальное внимание к
              каждому клиенту, которое лежит в основе философии компании. За
              этими словами – огромная кропотливая работа, постоянное
              совершенствование технологий сервиса.
            </p>
            <p class="decor">
              Клиентам каталога Sneakk доступна уникальная услуга – бесплатная
              профилактика и ремонт обуви с использованием оригинальных
              материалов от производителей и высококлассного оборудования в
              течение трех лет.
            </p>
            <p>Sneakk сегодня – это:</p>
            <ul class="list">
              <li>Уникальный выбор обуви и аксессуаров на любой вкус;</li>
              <li>Более 10000 моделей обуви;</li>
              <li>
                более 100 брендов в портфеле компании и тысячи моделей на ваш
                выбор.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  margin-top: 50px;
  text-align: justify;
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
  margin-top: -30px;
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
