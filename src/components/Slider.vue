<template>
  <div class="flex justify-center items-center">
    <div class="slider shadow-2xl">
      <slither-slider :options="optionsClider" @changed="setNewSlideIndex">
        <div v-for="(slide, index) in slides" :key="index">
          <router-link :to="slide.link"
            ><img :src="slide.path" alt=""
          /></router-link>
        </div>
        <template slot="previous">
          <IconifyIcon
            class="slider__arrow mr-2"
            :icon="icons.bxsChevronLeft"
            :style="{ fontSize: '24px' }"
          />
        </template>
        <template slot="next">
          <IconifyIcon
            class="slider__arrow"
            :icon="icons.bxsChevronRight"
            :style="{ fontSize: '24px' }"
          />
        </template>
      </slither-slider>
      <div class="absolute bottom-6 right-2 font-bold text-xs">
        {{ eventIndexSlide + 1 }} / {{ getCountSlide }}
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import IconifyIcon from "@iconify/vue";
import bxsChevronLeft from "@iconify/icons-bx/bxs-chevron-left";
import bxsChevronRight from "@iconify/icons-bx/bxs-chevron-right";
export default {
  name: "Slider",
  data() {
    return {
      slides: [],
      eventIndexSlide: 0,
      optionsClider: {
        dots: false,
        touch: true,
      },
      icons: {
        bxsChevronLeft,
        bxsChevronRight,
      },
    };
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3001/slides");
    this.slides = data;
  },
  methods: {
    setNewSlideIndex(newIndex) {
      this.eventIndexSlide = newIndex;
    },
  },
  computed: {
    getCountSlide() {
      return this.slides.length;
    },
  },
  components: {
    IconifyIcon,
  },
};
</script>
<style lang="scss">
.slider {
  position: relative;
  &__index {
    position: absolute;
  }
  &:hover .slither-slider-controls {
    opacity: 1;
  }
  &__arrow {
    cursor: pointer;
  }
}
.slither-slider-controls {
  position: absolute;
  bottom: 20px;
  right: 40px;
  display: flex;
  opacity: 0;
  transition: 0.3s;
}
</style>
