<script setup>
import UniqueResource from '../../../../../../components/layouts/UniqueResource.vue';
import PageHeader from '../../../../../../components/headers/PageHeader.vue';
import MainLayout from '../../../../../../layouts/MainLayout.vue';
import GuestsLayout from '../../../../../../layouts/GuestsLayout.vue';
import { vueFetch } from '../../../../../../../../resources/js/composables/vueFetch';

const route = useRoute();
const teamSlug = route.params.team_slug;
const resource = route.params.resource;
const postSlug = route.params.slug;
const id_description = route.params.id_description;
const postId = route.params.id;

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | ${
    resource[0].toUpperCase() + resource.slice(1)
  }`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | ${
    resource[0].toUpperCase() + resource.slice(1)
  }`,
  description: 'Looking for a job in fashion? myself.ae ',
  ogDescription: 'Looking for a job in fashion? myself.ae ',
});

const {
  handleData: handleGetPost,
  fetchedData: fetchedDataPost,
  isError: isErrorPost,
  error: errorPost,
  errors: errorsPost,
  isLoading: isLoadingPost,
  isSuccess: isSuccessPost,
} = vueFetch();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

onMounted(() => {
  console.log(`resource:`, resource);
  const url = getAppUrl(
    `api/${teamSlug}/${resource}/${postSlug}/${id_description}/${postId}`
  );

  console.log(`url:`, url);
  handleGetPost(url);
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader
          :title="resource[0].toUpperCase() + resource.slice(1)"
        ></PageHeader>
      </template>
      <!-- Show Unique Resorce - start -->
      <main class="myPrimaryContentSection">
        <p class="py-12">fetchedDataPost: {{ fetchedDataPost }}</p>
        <UniqueResource>
          <!-- :post="post"
					:onlyForCurrentTeam="false"
          :team="team"
          :authors="authors"
          :countries="countries"
          :states="states"
          :jobTypes="jobTypes"
          :categories="categories"
          :stores="stores"
          :postType="postType" -->
        </UniqueResource>
      </main>
      <!-- sShow Unique Post - end -->
    </GuestsLayout>
  </MainLayout>
</template>
