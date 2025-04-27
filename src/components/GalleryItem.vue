<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
});
</script>

<template>
  <div class="image-card group rounded-xl">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-75"
    />

    <div
      class="search-icon opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      <FontAwesomeIcon :icon="faSearch" class="text-white text-4xl" />
    </div>
  </div>
</template>

<style scoped>
.image-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
