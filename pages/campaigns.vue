<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header> campaigns </template>
      this is campaigns layout
    </GuestsLayout>
  </MainLayout>
</template>
