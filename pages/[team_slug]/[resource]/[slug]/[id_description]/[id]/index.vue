<script setup>
import UniqueResource from '../../../../../../components/layouts/UniqueResource.vue';
import PageHeader from '../../../../../../components/headers/PageHeader.vue';
import MainLayout from '../../../../../../layouts/MainLayout.vue';
import GuestsLayout from '../../../../../../layouts/GuestsLayout.vue';
// import { vueFetch } from '../../../../../../composables/vueFetch';
import SmallUniversalSpinner from '../../../../../../components/loaders/SmallUniversalSpinner.vue';
import { extractTextContentHTML } from '../../../../../../helpers/extract-text-content-html';
import { parseISO, format } from 'date-fns';

const route = useRoute();
const teamSlug = route.params.team_slug;
const resource = route.params.resource;
const postSlug = route.params.slug;
const id_description = route.params.id_description;
const postId = route.params.id;

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  if (!path) {
    return;
  }
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

const {
  data: fetchedDataPost,
  pending: isLoadingPost,
  error: isErrorPost,
} = await useFetch(
  getAppUrl(
    `api/${teamSlug}/${resource}/${postSlug}/${id_description}/${postId}`
  ),
  {}
);

if (fetchedDataPost.value && fetchedDataPost.value.post) {
  console.log(`eer:`, fetchedDataPost.value.post.created_at);
  useSeoMeta({
    title: () => {
      return `${runtimeConfig.public.APP_NAME} | ${fetchedDataPost.value.post.title}`;
    },
    ogTitle: () => {
      return `${runtimeConfig.public.APP_NAME} | ${fetchedDataPost.value.post.title}`;
    },

    description: () => {
      return extractTextContentHTML(fetchedDataPost.value.post.content, 200);
    },
    ogDescription: () => {
      return extractTextContentHTML(fetchedDataPost.value.post.content, 200);
    },

    articlePublishedTime: () => {
      // Parse the original date string
      const originalDate = parseISO(fetchedDataPost.value.post.created_at);

      // Format the date to the desired format
      const formattedDate = format(originalDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");

      return formattedDate;
    },
    articleModifiedTime: () => {
      // Parse the original date string
      const originalDate = parseISO(fetchedDataPost.value.post.updated_at);

      // Format the date to the desired format
      const formattedDate = format(originalDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");

      return formattedDate;
    },

    ogType: 'article',

    ogImage: () => {
      if (
        Array.isArray(fetchedDataPost.value.post.cover_images) &&
        fetchedDataPost.value.post.cover_images.length >= 1
      ) {
        return getAppUrl(
          `storage/uploads/${fetchedDataPost.value.post.cover_images[0]?.path}`
        );
      }
    },
  });
}
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
        <!-- isErrorPost # start -->
        <template v-if="!isLoadingPost && isErrorPost">
          <p class="myPrimaryParagraphError">
            {{ isErrorPost }}
          </p>
        </template>
        <!-- isErrorPost # end -->

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
