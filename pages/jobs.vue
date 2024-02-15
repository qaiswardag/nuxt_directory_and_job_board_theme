<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import PageHeader from '../components/headers/PageHeader.vue';
import Items from '../layouts/Items.vue';

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Jobs`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Jobs`,
  description:
    'Looking for a job in fashion? myself.ae is the United Arab Emirates best site for finding jobs in the fashion, luxury and retail industries. Start your career here!',
  ogDescription:
    'Looking for a job in fashion? myself.ae is the United Arab Emirates best site for finding jobs in the fashion, luxury and retail industries. Start your career here!',
});

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};
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
