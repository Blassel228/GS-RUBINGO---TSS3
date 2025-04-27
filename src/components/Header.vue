<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="w-full fixed top-0 left-0 px-10 py-4 transition-colors duration-300 z-9999 flex justify-between items-center"
    :class="{ 'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <div class="flex items-center space-x-3">
      <img
        class="object-cover w-[70px] h-8"
        src="../images/school1.jpg"
        alt="students"
      />
    </div>

    <div
      class="hidden lg:flex space-x-6 flex-row gap-0.5"
      :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }"
    >
      <a href="#swiper">Home</a>
      <a href="#about">About us</a>
      <a href="#statistics">Statistics</a>
      <a href="#map">Map</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>

    <button
      class="lg:hidden p-2 focus:outline-none"
      @click="isMenuOpen = !isMenuOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <div
      v-if="isMenuOpen"
      class="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 lg:hidden"
      :class="{ 'text-black': isScrolled, 'text-white': !isScrolled }"
    >
      <a href="#swiper" @click="isMenuOpen = false">Home</a>
      <a href="#about" @click="isMenuOpen = false">About us</a>
      <a href="#statistics" @click="isMenuOpen = false">Statistics</a>
      <a href="#map" @click="isMenuOpen = false">Map</a>
      <a href="#gallery" @click="isMenuOpen = false">Gallery</a>
      <a href="#contact" @click="isMenuOpen = false">Contact</a>
    </div>
  </header>
</template>

<style scoped>
@media (max-width: 1070px) {
  header {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>