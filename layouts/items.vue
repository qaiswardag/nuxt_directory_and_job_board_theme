<script setup>
import { vueFetch } from '../../../resources/js/composables/vueFetch';
import { onMounted, ref, watch } from 'vue';
import SmallUniversalSpinner from '../components/loaders/SmallUniversalSpinner.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import ThumbnailSmallImageSlider from '../components/sliders/ThumbnailSmallImageSlider.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { parseISO, format } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import ItemDisplaySelection from '../layouts/items/ItemDisplaySelection.vue';

const props = defineProps({
  nameList: {
    required: true,
  },
  pathList: {
    required: true,
  },
  oldInput: {
    search_query: {
      required: false,
    },
  },
});

const {
  handleData: handleGetPosts,
  fetchedData: fetchedDataPosts,
  isError: isErrorPosts,
  error: errorPosts,
  errors: errorsPosts,
  isLoading: isLoadingPosts,
  isSuccess: isSuccessPosts,
} = vueFetch();

const categorySelected = ref([]);
const typeSelected = ref([]);
const countrySelected = ref([]);
const stateSelected = ref([]);

const goToSinglePost = function () {
  console.log(`click.....`);
};
const fetchComponents = function (page) {
  //remember old search value while paginating
  // if (fetchedDataPosts.value?.oldInput?.search_query) {
  //   searchForm.search_query = fetchedDataPosts.value?.oldInput?.search_query;
  // }

  handleGetPosts(props.pathList, {
    page: page,
    // search_query: searchForm.search_query,
    // tags_or_content: searchForm.tags_or_content,
    type: typeSelected.value,
    category: categorySelected.value,
    country: countrySelected.value,
    state: stateSelected.value,
  });
};

const handleRemoveState = function (selectedItem) {};
const handleSelectState = function (selectedItem) {};
const handleSelectCategory = function (selectedItem) {};
const handleRemoveCategory = function (selectedItem) {};

onMounted(() => {
  fetchComponents(1);
});
</script>

<template>
  <div class="min-h-screen">
    <FullWidthElement
      :descriptionArea="true"
      :headerArea="false"
    >
      <template #content>
        <div class="flex flex-col gap-2 border-b border-gray-200 pb-2 mb-8">
          <!-- error # start -->
          <template v-if="!isLoadingPosts && isErrorPosts">
            <p class="myPrimaryParagraphError">
              {{ errorPosts }}
            </p>
          </template>
          <!-- error # end -->

          <!-- Loading # start -->
          <template v-if="isLoadingPosts">
            <SmallUniversalSpinner
              width="w-8"
              height="h-8"
              border="border-4"
            ></SmallUniversalSpinner>
          </template>
          <!-- Loading # end -->

          <!-- Successfull data # start -->
          <!-- <div class="py-12 remove-this-div">
            fetchedDataPosts: {{ fetchedDataPosts }}
          </div> -->
          <!-- Successfull data # end -->
        </div>

        <template v-if="!isLoadingPosts && !isErrorPosts && isSuccessPosts">
          <!-- List Grid # start -->
          <div v-if="fetchedDataPosts && fetchedDataPosts.posts">
            <ul
              v-if="
                Array.isArray(fetchedDataPosts.posts.data) &&
                fetchedDataPosts.posts.data.length !== 0
              "
              role="list"
              class="grid myPrimaryGap lg:grid-cols-4 sm:grid-cols-2"
            >
              <TransitionGroup>
                <li
                  v-for="post in fetchedDataPosts.posts.data"
                  :key="post.id"
                  class="overflow-hidden whitespace-pre-line flex-1 h-auto rounded bg-myPrimaryLightGrayColor"
                >
                  <!-- start photo -->

                  <template v-if="post && post.cover_images !== null">
                    <ThumbnailSmallImageSlider
                      :images="post.cover_images"
                      :isLoading="isLoadingPosts"
                      imageSize="medium_path"
                      imageHeight="max-h-96"
                      imageWidth="w-full object-cover rounded-b-none"
                      :roundedFull="false"
                      :squareButtons="true"
                      @firstButtonClick="
                        goToSinglePost(post.team.slug, post.slug, post.id)
                      "
                      :imageClickable="true"
                    ></ThumbnailSmallImageSlider>
                  </template>

                  <section class="pt-8 pb-4 px-4">
                    <button
                      @click="
                        goToSinglePost(post.team.slug, post.slug, post.id)
                      "
                      type="button"
                      class="w-full text-left"
                    >
                      <p class="myQuaternaryHeader">
                        {{ post.title }}
                      </p>
                    </button>

                    <template
                      v-if="
                        Array.isArray(post.team?.coverImagesWithLogos?.logos) &&
                        post.team?.coverImagesWithLogos?.logos.length !== 0
                      "
                    >
                      <div class="my-2">
                        <ThumbnailSmallImageSlider
                          :images="post.team?.coverImagesWithLogos?.logos"
                          :isLoading="isLoadingPosts"
                          imageSize="medium_path"
                          imageHeight="h-16"
                          imageWidth="w-16"
                          :roundedFull="false"
                        ></ThumbnailSmallImageSlider>
                      </div>
                    </template>

                    <template
                      v-if="
                        post.started_at && post.ended_at && nameList === 'posts'
                      "
                    >
                      <div class="flex gap-4">
                        <div
                          class="myPrimaryTag text-[10px] py-1 px-2 flex items-center min-h-[1rem]"
                        >
                          From:
                          <span class="font-medium">
                            {{
                              format(parseISO(post.started_at), 'dd. MMMM yyyy')
                            }}
                          </span>
                        </div>

                        <div
                          class="myPrimaryTag text-[10px] py-1 px-2 flex items-center min-h-[1rem]"
                        >
                          To:
                          <span class="font-medium">
                            {{
                              format(parseISO(post.ended_at), 'dd. MMMM yyyy')
                            }}
                          </span>
                        </div>
                      </div>
                    </template>

                    <template
                      v-if="
                        Array.isArray(post.team?.coverImagesWithLogos?.logos) &&
                        post.team?.coverImagesWithLogos?.logos.length === 0
                      "
                    >
                      <div
                        class="text-xs h-16 flex items-center justify-center font-medium"
                      >
                        {{ post.team.name }}
                      </div>
                    </template>

                    <!-- Country # start -->
                    <template v-if="post.countries">
                      <ItemDisplaySelection
                        :list="post.countries"
                        :listSelected="countrySelected"
                        icon="GlobeAmericasIcon"
                        @removeItem="handleRemoveCountry"
                        @selectItem="handleSelectCountry"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Country # end -->

                    <!-- State # start -->
                    <template v-if="post.states">
                      <ItemDisplaySelection
                        :list="post.states"
                        :listSelected="stateSelected"
                        icon="MapPinIcon"
                        @removeItem="handleRemoveState"
                        @selectItem="handleSelectState"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- State # end -->

                    <!-- Type # start -->
                    <template v-if="post.types">
                      <ItemDisplaySelection
                        :list="post.types"
                        :listSelected="typeSelected"
                        icon="NewspaperIcon"
                        @removeItem="handleRemoveType"
                        @selectItem="handleSelectType"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Type # end -->

                    <!-- Category # start -->
                    <template v-if="post.categories">
                      <ItemDisplaySelection
                        :list="post.categories"
                        :listSelected="categorySelected"
                        icon="interests"
                        @removeItem="handleRemoveCategory"
                        @selectItem="handleSelectCategory"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Category # end -->
                  </section>
                </li>
              </TransitionGroup>
            </ul>
          </div>
          <!-- List Grid # end -->
        </template>
        <!-- Pagination # start -->

        <!-- Pagination # end -->
      </template>
    </FullWidthElement>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
