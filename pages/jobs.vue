<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import PageHeader from '../components/headers/PageHeader.vue';
import Items from '../layouts/Items.vue';

const runtimeConfig = useRuntimeConfig();

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
        nameList="jobs"
      ></Items>
    </GuestsLayout>
  </MainLayout>
</template>
