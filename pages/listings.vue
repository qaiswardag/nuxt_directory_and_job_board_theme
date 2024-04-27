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
  title: `${runtimeConfig.public.APP_NAME} | Listings`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Listings`,
  description:
    'Find fashion listings and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogDescription:
    'Find fashion listings and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogImage: () => {
    return getAppUrl('brand-images/home.jpg');
  },
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader title="Listings"></PageHeader>
      </template>
      <Items
        :pathList="`${getAppUrl('api/guest/stores/index')}`"
        nameList="listing"
      ></Items>
    </GuestsLayout>
  </MainLayout>
</template>
