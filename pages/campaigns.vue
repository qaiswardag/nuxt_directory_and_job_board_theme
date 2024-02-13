<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import PageHeader from '../components/headers/PageHeader.vue';
import Items from '../layouts/Items.vue';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Campaigns`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Campaigns`,
  description:
    'Looking for in-store campaigns? myself.ae is the best site in the United Arab Emirates for finding product promotions.',
  ogDescription:
    'Looking for in-store campaigns? myself.ae is the best site in the United Arab Emirates for finding product promotions.',
});

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader title="Campaigns"></PageHeader>
      </template>
      <Items
        :pathList="`${getAppUrl('api/guest/campaigns/index')}`"
        nameList="posts"
      ></Items>
    </GuestsLayout>
  </MainLayout>
</template>
