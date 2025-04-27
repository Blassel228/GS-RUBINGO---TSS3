<template>
  <img class="object-cover" :class="customClass" :alt="text" :src="image" />
</template>

<script setup>
defineProps({
  image: String,
  text: String,
  customClass: String,
});
</script>
