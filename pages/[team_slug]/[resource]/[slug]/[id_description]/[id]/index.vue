<script setup>
import UniqueResource from '../../../../../../components/layouts/UniqueResource.vue';
import PageHeader from '../../../../../../components/headers/PageHeader.vue';
import MainLayout from '../../../../../../layouts/MainLayout.vue';
import GuestsLayout from '../../../../../../layouts/GuestsLayout.vue';
import { vueFetch } from '../../../../../../composables/vueFetch';
import SmallUniversalSpinner from '../../../../../../components/loaders/SmallUniversalSpinner.vue';
import { extractTextContentHTML } from '../../../../../../helpers/extract-text-content-html';
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
  handleData: handleGetPost,
  fetchedData: fetchedDataPost,
  isError: isErrorPost,
  error: errorPost,
  errors: errorsPost,
  isLoading: isLoadingPost,
  isSuccess: isSuccessPost,
} = vueFetch();

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Stores`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Stores`,
  description:
    'Find fashion stores and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogDescription:
    'Find fashion stores and discover everything you need in the world of fashion within the United Arab Emirates — all in one place.',
  ogImage: getAppUrl('brand-images/pink-lady-high-resolution.jpg'),
});

onMounted(async () => {
  const url = getAppUrl(
    `api/${teamSlug}/${resource}/${postSlug}/${id_description}/${postId}`
  );

  await handleGetPost(url);

  if (false && fetchedDataPost.value && fetchedDataPost.value.post) {
    useSeoMeta({
      title: `${runtimeConfig.public.APP_NAME} | ${fetchedDataPost.value.post.title}`,
      ogTitle: `${runtimeConfig.public.APP_NAME} | ${fetchedDataPost.value.post.title}`,

      description: extractTextContentHTML(
        fetchedDataPost.value.post.content,
        200
      ),
      ogDescription: extractTextContentHTML(
        fetchedDataPost.value.post.content,
        200
      ),

      ogImage: getAppUrl(
        fetchedDataPost.value.post?.cover_images &&
          `storage/uploads/${fetchedDataPost.value.post.cover_images[0].path}`
      ),
    });
  }
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
