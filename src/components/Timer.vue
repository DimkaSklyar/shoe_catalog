<template>
  <div
    class="timer flex space-x-10 text-6xl font-extrabold text-blue-600 text-center"
  >
    <div class="days">
      <div class="count">
        {{ d }}
        <span class="text-sm block text-gray-500 font-normal">Дни</span>
      </div>
    </div>
    <div class="hours">
      <div class="count">
        {{ h }}
        <span class="text-sm block text-gray-500 font-normal">Часы</span>
      </div>
    </div>
    <div class="min">
      <div class="count">
        {{ m }}
        <span class="text-sm block text-gray-500 font-normal">Минуты</span>
      </div>
    </div>
    <div class="sec">
      <div class="count">
        {{ s }}
        <span class="text-sm block text-gray-500 font-normal">Секунды</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Timer",
  data() {
    return {
      deadline: "Oct 5, 2021 20:45:00",
      d: 0,
      h: 0,
      m: 0,
      s: 0,
    };
  },
  created() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      const t = setInterval(() => {
        const countDownDate = new Date(this.deadline).getTime();
        const now = Date.now();
        const diff = countDownDate - now;

        this.d = Math.floor(diff / (1000 * 60 * 60 * 24));
        this.h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        this.s = Math.floor((diff % (1000 * 60)) / 1000);

        if (diff < 0) {
          clearInterval(t);
        }
      }, 1000);
    },
  },
};
</script>
<style lang=""></style>
