<script setup>
defineProps({
  slideIndex: Number,
  changeSlide: Function,
  activeIndex: Object,
});
</script>

<template>
  <button
    @click="changeSlide"
    class="w-4 h-4 bg-white rounded-full hover:bg-blue-500 transition cursor-pointer"
    :class="{ 'bg-blue-500': activeIndex?.value === slideIndex }"
  ></button>
</template>
