<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import PageHeader from '../components/headers/PageHeader.vue';
import Items from '../layouts/Items.vue';

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Stores`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Stores`,
  description:
    'Find fashion stores and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogDescription:
    'Find fashion stores and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogImage: getAppUrl('brand-images/pink-lady-high-resolution.jpg'),
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader title="Stores"></PageHeader>
      </template>
      <Items
        :pathList="`${getAppUrl('api/guest/stores/index')}`"
        nameList="store"
      ></Items>
    </GuestsLayout>
  </MainLayout>
</template>
