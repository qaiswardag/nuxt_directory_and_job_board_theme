<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import FullScreenSpinner from '../components/loaders/FullScreenSpinner.vue';
import { delay } from '../helpers/delay';

const isLoading = ref(true);

onMounted(async () => {
  await delay(100);
  isLoading.value = false;
});
</script>

<template>
  <template v-if="isLoading">
    <FullScreenSpinner></FullScreenSpinner>
  </template>
  <slot />
</template>
