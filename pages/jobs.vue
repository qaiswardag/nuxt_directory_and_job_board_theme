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
  title: `${runtimeConfig.public.APP_NAME} | Jobs`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Jobs`,
  description:
    'Laravel, Vue & Nuxt, a Listing Directory, Blog & Job Board Theme with Page Builder.',
  ogDescription:
    'Laravel, Vue & Nuxt, a Listing Directory, Blog & Job Board Theme with Page Builder.',
  ogImage: () => {
    return getAppUrl('brand-images/home.jpg');
  },
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader title="Jobs"></PageHeader>
      </template>
      <Items
        :pathList="`${getAppUrl('api/guest/jobs/index')}`"
        nameList="job"
      ></Items>
    </GuestsLayout>
  </MainLayout>
</template>
