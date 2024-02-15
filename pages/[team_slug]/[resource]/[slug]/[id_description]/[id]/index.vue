<script setup>
import UniqueResource from '../../../../../../components/layouts/UniqueResource.vue';
import PageHeader from '../../../../../../components/headers/PageHeader.vue';
import MainLayout from '../../../../../../layouts/MainLayout.vue';
import GuestsLayout from '../../../../../../layouts/GuestsLayout.vue';
import { vueFetch } from '../../../../../../composables/vueFetch';
import SmallUniversalSpinner from '../../../../../../components/loaders/SmallUniversalSpinner.vue';
const route = useRoute();
const teamSlug = route.params.team_slug;
const resource = route.params.resource;
const postSlug = route.params.slug;
const id_description = route.params.id_description;
const postId = route.params.id;

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

const {
  handleData: handleGetPost,
  fetchedData: fetchedDataPost,
  isError: isErrorPost,
  error: errorPost,
  errors: errorsPost,
  isLoading: isLoadingPost,
  isSuccess: isSuccessPost,
} = vueFetch();

onMounted(() => {
  const url = getAppUrl(
    `api/${teamSlug}/${resource}/${postSlug}/${id_description}/${postId}`
  );
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
        <!-- error # start -->
        <template v-if="!isLoadingPost && isErrorPost">
          <p class="myPrimaryParagraphError">
            {{ errorPost }}
          </p>
        </template>
        <!-- error # end -->

        <!-- Loading # start -->
        <template v-if="isLoadingPost">
          <SmallUniversalSpinner
            width="w-8"
            height="h-8"
            border="border-4"
          ></SmallUniversalSpinner>
        </template>
        <!-- Loading # end -->
        <template v-if="fetchedDataPost">
          <UniqueResource
            :post="fetchedDataPost.post"
            :onlyForCurrentTeam="false"
            :team="fetchedDataPost.team"
            :authors="fetchedDataPost.authors"
            :countries="fetchedDataPost.countries"
            :states="fetchedDataPost.states"
            :jobTypes="fetchedDataPost.jobTypes"
            :categories="fetchedDataPost.categories"
            :stores="fetchedDataPost.stores"
            :postType="fetchedDataPost.postType"
          >
          </UniqueResource>
        </template>
      </main>
      <!-- sShow Unique Post - end -->
    </GuestsLayout>
  </MainLayout>
</template>
