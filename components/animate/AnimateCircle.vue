<script setup>
defineProps({
  bgColorLight: {
    required: true,
  },
});
</script>
<template>
  <span class="relative flex h-3 w-3">
    <span
      :class="[`${bgColorLight}`]"
      class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
    ></span>
    <span
      :class="[`${bgColorLight}`]"
      class="relative inline-flex rounded-full h-3 w-3"
    ></span>
  </span>
</template>
