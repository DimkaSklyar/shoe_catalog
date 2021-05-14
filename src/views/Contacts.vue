<template>
  <div class="container mx-auto my-10 border-b mb-14">
    <h1 class="text-center text-3xl text-black uppercase font-semibold mb-10">
      Контакты
    </h1>
    <div class="grid grid-cols-3 gap-28 mb-20">
      <div>
        <h2 class="uppercase mb-6 text-lg font-bold">Контакты</h2>
        <ul>
          <li class="flex items-center border-b py-6">
            <IconifyIcon
              :icon="icons.homeLine"
              :style="{ color: '#1d73dd', fontSize: '36px' }"
            />
            <div class="pl-3">
              <h3 class="text-lg uppercase font-bold leading-none">Адрес</h3>
              <p class="text-xs">г. Краснодар ул. Красная, д. 2 офис 3А</p>
            </div>
          </li>
          <li class="flex items-center border-b py-6">
            <IconifyIcon
              :icon="icons.phoneVoice"
              :style="{ color: '#1d73dd', fontSize: '36px' }"
            />
            <div class="pl-3">
              <h3 class="text-lg uppercase font-bold leading-none">Телефон</h3>
              <p class="text-xs">+7 (999) 999-99-99</p>
            </div>
          </li>
          <li class="flex items-center border-b py-6">
            <IconifyIcon
              :icon="icons.alarmClockLine"
              :style="{ color: '#1d73dd', fontSize: '36px' }"
            />
            <div class="pl-3">
              <h3 class="text-lg uppercase font-bold leading-none">
                Часы работы
              </h3>
              <p class="text-xs">Круглосуточно</p>
            </div>
          </li>
          <li class="flex items-center border-b py-6">
            <IconifyIcon
              :icon="icons.emailIcon"
              :style="{ color: '#1d73dd', fontSize: '36px' }"
            />
            <div class="pl-3">
              <h3 class="text-lg uppercase font-bold leading-none">Email</h3>
              <p class="text-xs">
                <a href="mailto:example@mail.ru">example@mail.ru</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-between">
        <form @submit.prevent="sendEmail" ref="form">
          <h2 class="uppercase mb-6 text-lg font-bold">Свяжитесь с нами</h2>
          <input
            type="text"
            class="border p-2 w-full mb-2"
            placeholder="Имя"
            name="name"
          />
          <input
            name="email"
            type="text"
            class="border p-2 w-full mb-2"
            placeholder="Email"
          />
          <textarea
            name="message"
            placeholder="Сообщение"
            class="border p-2 w-full mb-2"
            rows="7"
          ></textarea>
          <Button text="Отправить" type="submit" class="w-full" />
          <p class="text-green-300" v-if="isSubmit">
            Сообщение успешно отправленно
          </p>
          <p class="text-red-300" v-if="error">Ошибка отправки сообщения</p>
        </form>
      </div>
      <div>
        <h2 class="uppercase mb-6 text-lg font-bold">Мы в социальных сетях</h2>
        <ul>
          <li class="flex items-center border-b py-6">
            <a href="https://vk.com/" target="_blank" class="flex items-center">
              <IconifyIcon
                :icon="icons.vkFill"
                :style="{ color: '#1d73dd', fontSize: '36px' }"
              />
              <div class="pl-6">
                <h3 class="text-md uppercase font-bold leading-none">
                  В Контакте
                </h3>
              </div>
            </a>
          </li>
          <li class="flex items-center border-b py-6">
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              class="flex items-center"
            >
              <IconifyIcon
                :icon="icons.facebookAlt"
                :style="{ color: '#1d73dd', fontSize: '36px' }"
              />
              <div class="pl-6">
                <h3 class="text-md uppercase font-bold leading-none">
                  Facebook
                </h3>
              </div>
            </a>
          </li>
          <li class="flex items-center border-b py-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              class="flex items-center"
            >
              <IconifyIcon
                :icon="icons.twitterFill"
                :style="{ color: '#1d73dd', fontSize: '36px' }"
              />
              <div class="pl-6">
                <h3 class="text-md uppercase font-bold leading-none">
                  Twitter
                </h3>
              </div>
            </a>
          </li>
          <li class="flex items-center border-b py-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="flex items-center"
            >
              <IconifyIcon
                :icon="icons.instagramIcon"
                :style="{ color: '#1d73dd', fontSize: '36px' }"
              />
              <div class="pl-6">
                <h3 class="text-md uppercase font-bold leading-none">
                  Instagram
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import IconifyIcon from "@iconify/vue";
import homeLine from "@iconify/icons-clarity/home-line";
import phoneVoice from "@iconify/icons-carbon/phone-voice";
import alarmClockLine from "@iconify/icons-clarity/alarm-clock-line";
import emailIcon from "@iconify/icons-carbon/email";
import facebookAlt from "@iconify/icons-dashicons/facebook-alt";
import vkFill from "@iconify/icons-akar-icons/vk-fill";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import instagramIcon from "@iconify/icons-bi/instagram";
import Button from "../components/button/Button";
import emailjs from "emailjs-com";

export default {
  components: {
    IconifyIcon,
    Button,
  },
  data() {
    return {
      icons: {
        homeLine,
        phoneVoice,
        alarmClockLine,
        emailIcon,
        vkFill,
        facebookAlt,
        twitterFill,
        instagramIcon,
      },
      isSubmit: false,
      error: false,
    };
  },
  methods: {
    sendEmail(e) {
      const self = this;
      emailjs
        .sendForm(
          "service_09y0d27",
          "template_gmk3a16",
          e.target,
          "user_L9DWJeTPuHpzPxrX7MVr8"
        )
        .then(
          (result) => {
            self.isSubmit = true;
            console.log("SUCCESS!", result.status, result.text);
            e.target.reset();
          },
          (error) => {
            self.error = true;
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>
<style lang="scss"></style>
