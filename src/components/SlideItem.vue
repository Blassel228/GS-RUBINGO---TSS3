<template>
  <div
    class="w-full h-full bg-cover bg-center"
    :style="{ backgroundImage: `url(${image})` }"
  ></div>
</template>

<script setup>
defineProps({
  image: String,
});
</script>
