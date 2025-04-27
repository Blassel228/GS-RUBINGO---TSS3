<template>
  <div class="flex flex-col gap-[1rem]" :class="customClass"><slot></slot></div>
</template>

<script setup>
defineProps({
  customClass: String,
});
</script>
