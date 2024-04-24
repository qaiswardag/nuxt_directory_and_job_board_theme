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
  title: `${runtimeConfig.public.APP_NAME} | Posts`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Posts`,
  description: 'Laravel and Vue Directory & Job Board Theme',
  ogDescription: 'Laravel and Vue Directory & Job Board Theme',
  ogImage: () => {
    return getAppUrl('brand-images/home.jpg');
  },
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader title="Campaigns"></PageHeader>
        <Items
          :pathList="`${getAppUrl('api/guest/campaigns/index')}`"
          nameList="campaign"
        ></Items>
      </template>
    </GuestsLayout>
  </MainLayout>
</template>
