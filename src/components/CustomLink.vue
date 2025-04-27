<template>
  <router-link :to="to" class="text-black hover:transition no-underline">
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
