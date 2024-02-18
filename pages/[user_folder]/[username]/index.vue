<script setup>
const route = useRoute();
const userFolder = route.params.user_folder;
const username = route.params.username;
import SmallUniversalSpinner from '../../../components/loaders/SmallUniversalSpinner.vue';
import PageHeader from '../../../components/headers/PageHeader.vue';
import MainLayout from '../../layouts/MainLayout.vue';
import GuestsLayout from '../../layouts/GuestsLayout.vue';
import ThumbnailSmallImageSlider from '../../../components/sliders/ThumbnailSmallImageSlider.vue';

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  if (!path) {
    return;
  }
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

const {
  data: fetchedDataUser,
  pending: isLoadingUser,
  error: isErrorUser,
} = await useFetch(getAppUrl(`api/me/${username}`), {});

const processedPostContent = function () {
  if (fetchedDataUser.value && fetchedDataUser.value.userData) {
    // Find all image tags with src attribute
    const modifiedContent = fetchedDataUser.value.userData.content.replace(
      /<img([^>]*)src="([^"]*)"/g,
      (match, attributes, src) => {
        // Check if the src is a relative path and does not start with the main domain
        if (
          src.startsWith('/') &&
          !src.startsWith(runtimeConfig.public.LARAVEL_APP_URL)
        ) {
          // Concatenate the main domain to the src attribute
          return `<img${attributes}src="${runtimeConfig.public.LARAVEL_APP_URL}${src}"`;
        } else {
          return match; // Return the original match if no modification is needed
        }
      }
    );
    return modifiedContent;
  }
  if (!fetchedDataUser.value || !fetchedDataUser.value.userData) {
    return '';
  }
};
</script>
<template>
  <MainLayout>
    <GuestsLayout>
      <!-- Show Unique Resorce - start -->
      <main class="myPrimaryContentSection">
        <!-- isErrorUser # start -->
        <template v-if="!isLoadingUser && isErrorUser">
          <p class="myPrimaryParagraphError">
            {{ isErrorUser }}
          </p>
        </template>
        <!-- isErrorUser # end -->

        <!-- Loading # start -->
        <template v-if="isLoadingUser">
          <SmallUniversalSpinner
            width="w-8"
            height="h-8"
            border="border-4"
          ></SmallUniversalSpinner>
        </template>

        <template v-if="fetchedDataUser && fetchedDataUser.userData">
          <div class="myPrimarySection">
            <div
              v-if="
                fetchedDataUser.userData.user_photo &&
                Array.isArray(fetchedDataUser.userData.user_photo) &&
                fetchedDataUser.userData.user_photo.length !== 0
              "
              class="flex justify-center items-center w-full mb-8"
            >
              <ThumbnailSmallImageSlider
                :images="fetchedDataUser.userData.user_photo"
                imageSize="large_path"
                imageHeight="h-32"
                imageWidth="w-32"
                :roundedFull="true"
              ></ThumbnailSmallImageSlider>
            </div>

            <h1 class="myPrimaryHeader text-center">
              {{ fetchedDataUser.userData.first_name }}
              {{ fetchedDataUser.userData.last_name }}
            </h1>
          </div>
          <div id="page-builder-editor">
            <section v-html="processedPostContent()"></section>
          </div>
        </template>

        <!-- Loading # end -->
      </main>
    </GuestsLayout>
  </MainLayout>
</template>
