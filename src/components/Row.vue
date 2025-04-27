<template>
  <div class="flex flex-row justify-center" :class="customClass">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  customClass: String,
});
</script>
