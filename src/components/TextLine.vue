<template>
  <p class="font-bold text-[3rem]" :class="customClass"><slot></slot></p>
</template>

<script setup>
defineProps({
  customClass: String,
});
</script>
