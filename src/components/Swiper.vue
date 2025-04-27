<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import image1 from "../images/school1.jpg";
import image2 from "../images/school2.jpg";
import image3 from "../images/school3.jpg";
import OrbButton from "@/components/OrbButton.vue";
import SlideItem from "@/components/SlideItem.vue";

const slides = [image1, image2, image3];

const swiperRef = ref(null);
const activeIndex = ref(0);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const changeSlide = (index) => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const handleSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex;
};
</script>

<template>
  <div class="relative w-full h-screen">
    <Swiper
      @swiper="onSwiper"
      :modules="[EffectFade]"
      effect="fade"
      loop
      class="absolute top-0 left-0 w-full h-full"
      @slideChange="handleSlideChange"
    >
      <SwiperSlide v-for="(image, index) in slides" :key="index">
        <SlideItem :image="image" />
      </SwiperSlide>
    </Swiper>

    <div
      class="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
    >
      <h2 class="text-white text-5xl font-bold">GS RUBINGO / TSS3</h2>
    </div>

    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 z-50"
    >
      <OrbButton
        v-for="(_, index) in slides"
        :key="index"
        :slideIndex="index"
        :changeSlide="() => changeSlide(index)"
        :activeIndex="activeIndex"
      />
    </div>
  </div>
</template>
