<script setup>
import { vueFetch } from '../../../resources/js/composables/vueFetch';
import { onMounted, ref, watch } from 'vue';
import SmallUniversalSpinner from '../components/loaders/SmallUniversalSpinner.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import ThumbnailSmallImageSlider from '../components/sliders/ThumbnailSmallImageSlider.vue';
import { parseISO, format } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import ItemDisplaySelection from '../layouts/items/ItemDisplaySelection.vue';
import ItemsFilterSelection from '../layouts/items/ItemsFilterSelection.vue';

import { TailwindPagination } from 'laravel-vue-pagination';

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

const search_query = ref('');
const tags_or_content = ref(false);

const fetchComponents = function (page) {
  //remember old search value while paginating
  if (fetchedDataPosts.value?.oldInput?.search_query) {
    search_query.value = fetchedDataPosts.value?.oldInput?.search_query;
  }

  const params = new URLSearchParams({
    page: page,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
    type: typeSelected.value,
    category: categorySelected.value,
    country: countrySelected.value,
    state: stateSelected.value,
  });

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url);
};

const handleSearch = function () {
  const params = new URLSearchParams({
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
    type: typeSelected.value,
    category: categorySelected.value,
    country: countrySelected.value,
    state: stateSelected.value,
  });

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url);
};

const searchInTagsAndContent = ref(false);
const showJobCountriesAndTypes = ref(false);

watch(showJobCountriesAndTypes, (newValue) => {
  if (!newValue) {
    typeSelected.value = [];
    countrySelected.value = [];

    const params = new URLSearchParams({
      page: 1,
      search_query: search_query.value,
      tags_or_content: tags_or_content.value ? 1 : 0,
    });

    appendSelectedParams(params);
  }
});

watch(searchInTagsAndContent, (newValue) => {
  if (newValue) {
    tags_or_content.value = true;
    searchTagsOrContent();
  }
  if (!newValue) {
    tags_or_content.value = false;
    searchTagsOrContent();
  }
});

const searchTagsOrContent = function () {
  const params = new URLSearchParams({
    page: 1,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  appendSelectedParams(params);
};

// Scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
// get result for "laravel pagination" package
const getResultsForPage = (page = 1) => {
  fetchComponents(page);
  scrollToTop();
};

// handle category # start
const handleSelection = function (selectedItem, nameOfSelection) {
  if (!selectedItem) {
    return;
  }

  // Check if there is no object with the same id
  if (nameOfSelection === 'Categories') {
    if (categorySelected.value.some((item) => item.id === selectedItem.id)) {
      return;
    }

    categorySelected.value.push(selectedItem);

    // Save only categories ids
    categorySelected.value = categorySelected.value.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  if (nameOfSelection === 'Types') {
    if (typeSelected.value.some((item) => item.id === selectedItem.id)) {
      return;
    }

    typeSelected.value.push(selectedItem);

    // Save only categories ids
    typeSelected.value = typeSelected.value.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  if (nameOfSelection === 'Countries') {
    if (countrySelected.value.some((item) => item.id === selectedItem.id)) {
      return;
    }
    countrySelected.value.push(selectedItem);

    // Save only categories ids
    countrySelected.value = countrySelected.value.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  if (nameOfSelection === 'States') {
    if (stateSelected.value.some((item) => item.id === selectedItem.id)) {
      return;
    }
    stateSelected.value.push(selectedItem);

    // Save only categories ids
    stateSelected.value = stateSelected.value.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  const params = new URLSearchParams({
    page: 1,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  appendSelectedParams(params);
};
const handleRemoveSelection = function (selectedItem, nameOfSelection) {
  if (!selectedItem) {
    return;
  }

  if (nameOfSelection === 'Categories') {
    // Find the index of the selected item in categorySelected.value
    const index = categorySelected.value.findIndex(
      (item) => item.id === selectedItem.id
    );

    // If the item is found, remove it from the array
    if (index !== -1) {
      categorySelected.value.splice(index, 1);
    }
  }
  if (nameOfSelection === 'Types') {
    // Find the index of the selected item in categorySelected.value
    const index = typeSelected.value.findIndex(
      (item) => item.id === selectedItem.id
    );

    // If the item is found, remove it from the array
    if (index !== -1) {
      typeSelected.value.splice(index, 1);
    }
  }

  if (nameOfSelection === 'Countries') {
    // Find the index of the selected item in categorySelected.value
    const index = countrySelected.value.findIndex(
      (item) => item.id === selectedItem.id
    );

    // If the item is found, remove it from the array
    if (index !== -1) {
      countrySelected.value.splice(index, 1);
    }
  }

  if (nameOfSelection === 'States') {
    // Find the index of the selected item in categorySelected.value
    const index = stateSelected.value.findIndex(
      (item) => item.id === selectedItem.id
    );

    // If the item is found, remove it from the array
    if (index !== -1) {
      stateSelected.value.splice(index, 1);
    }
  }

  const params = new URLSearchParams({
    page: 1,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  appendSelectedParams(params);
};
// handle category # end

//
//
//
const appendSelectedParams = function (params) {
  categorySelected.value.forEach((item) => {
    params.append(`category[0][id]`, item.id);
  });

  typeSelected.value.forEach((item) => {
    params.append(`type[0][id]`, item.id);
  });

  countrySelected.value.forEach((item) => {
    params.append(`country[0][id]`, item.id);
  });

  stateSelected.value.forEach((item) => {
    params.append(`state[0][id]`, item.id);
  });

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url);
};
//
//
//
//
//
//
//
//
//
//
//

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
        <!-- Search in Tags Or Content # start -->
        <div class="py-2 px-2 rounded-xl bg-gray-100 grid gap-8 mb-8">
          <div v-if="fetchedDataPosts && fetchedDataPosts.posts">
            <!-- options dropdow # start -->
            <Menu
              as="div"
              class="relative inline-block text-left"
            >
              <div>
                <MenuButton
                  class="myPrimaryParagraph pl-3 pr-3 py-2 text-xs font-medium inline-flex w-full items-center justify-center gap-2 rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <span class="material-symbols-outlined"> filter_alt </span>
                  <span> Filter </span>
                  <span class="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <!-- Search in tags and content # start -->
                    <div class="py-1">
                      <div
                        class="pl-4 pr-2 pt-2 pb-2 w-full text-sm flex items-center justify-start gap-2 my-2 hover:bg-myPrimaryLightGrayColor"
                      >
                        <div class="relative flex items-center">
                          <div class="flex h-6 items-center">
                            <input
                              id="show_seach_in_tags_content"
                              name="show_seach_in_tags_content"
                              v-model="searchInTagsAndContent"
                              type="checkbox"
                              class="h-5 w-5 rounded border-gray-300 text-myPrimaryBrandColor focus:ring-myPrimaryBrandColor"
                            />
                          </div>
                          <div class="ml-3 min-w-0 flex-1 text-sm leading-6">
                            <label
                              for="show_seach_in_tags_content"
                              class="select-none font-medium text-gray-900"
                            >
                              Search in Tags & Content
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Search in tags and content # end -->
                  </div>

                  <template v-if="nameList === 'job'">
                    <div class="py-1">
                      <div
                        class="pl-4 pr-2 pt-2 pb-2 w-full text-sm flex items-center justify-start gap-2 my-2 hover:bg-myPrimaryLightGrayColor"
                      >
                        <div class="relative flex items-center">
                          <div class="flex h-6 items-center">
                            <input
                              id="show_countries"
                              name="show_countries"
                              v-model="showJobCountriesAndTypes"
                              type="checkbox"
                              class="h-5 w-5 rounded border-gray-300 text-myPrimaryBrandColor focus:ring-myPrimaryBrandColor"
                            />
                          </div>
                          <div class="ml-3 min-w-0 flex-1 text-sm leading-6">
                            <label
                              for="show_countries"
                              class="select-none font-medium text-gray-900"
                              >Countries & Job Type
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <!-- options dropdow # end -->
          <!-- Search in Tags Or Content # end -->

          <div class="flex md:flex-row flex-col myPrimaryGap">
            <div
              v-if="fetchedDataPosts && fetchedDataPosts.posts"
              class="w-full"
              :class="[
                {
                  'md:w-1/3': nameList !== 'campaign',
                },
                {
                  'md:w-1/2': nameList === 'campaign',
                },
              ]"
            >
              <!-- Search # start -->

              <form @submit.prevent="handleSearch">
                <div class="relative w-full">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <span class="material-symbols-outlined"> search </span>
                  </div>
                  <input
                    v-model="search_query"
                    type="search"
                    id="search_query"
                    class="myPrimaryInput pl-10 shadow-none min-h-[3.5rem] h-[3.5rem]"
                    autocomplete="off"
                    :placeholder="`${
                      nameList === 'store'
                        ? 'Company or Brand name'
                        : `Search ${nameList}`
                    }..`"
                  />
                </div>
              </form>
            </div>

            <!-- Categories # start -->
            <div
              class="w-full"
              :class="[
                {
                  'md:w-1/3': nameList !== 'campaign',
                },
                {
                  'md:w-1/2': nameList === 'campaign',
                },
              ]"
              v-if="
                categorySelected &&
                Array.isArray(categorySelected) &&
                fetchedDataPosts &&
                Array.isArray(fetchedDataPosts.categories)
              "
            >
              <ItemsFilterSelection
                nameOfList="Categories"
                :list="fetchedDataPosts.categories"
                :listSelected="categorySelected"
                icon="interests"
                @removeItem="handleRemoveSelection"
                @selectItem="handleSelection"
              ></ItemsFilterSelection>
            </div>
            <!-- Categories # end -->

            <!-- State # start -->
            <div
              class="md:w-1/3 w-full"
              v-if="
                stateSelected &&
                Array.isArray(stateSelected) &&
                fetchedDataPosts &&
                Array.isArray(fetchedDataPosts.states)
              "
            >
              <ItemsFilterSelection
                nameOfList="States"
                :list="fetchedDataPosts.states"
                :listSelected="stateSelected"
                icon="MapPinIcon"
                @removeItem="handleRemoveSelection"
                @selectItem="handleSelection"
              ></ItemsFilterSelection>
            </div>
            <!-- State # end -->
          </div>

          <template
            v-if="
              (countrySelected &&
                Array.isArray(countrySelected) &&
                fetchedDataPosts &&
                Array.isArray(fetchedDataPosts.countries)) ||
              (typeSelected &&
                Array.isArray(typeSelected) &&
                fetchedDataPosts &&
                Array.isArray(fetchedDataPosts.types))
            "
          >
            <template v-if="showJobCountriesAndTypes">
              <div class="flex md:flex-row flex-col myPrimaryGap">
                <!-- Country # start -->
                <div
                  class="md:w-1/2 w-full"
                  v-if="
                    countrySelected &&
                    Array.isArray(countrySelected) &&
                    fetchedDataPosts &&
                    Array.isArray(fetchedDataPosts.countries)
                  "
                >
                  <ItemsFilterSelection
                    nameOfList="Countries"
                    :list="fetchedDataPosts.countries"
                    :listSelected="countrySelected"
                    icon="GlobeAmericasIcon"
                    @removeItem="handleRemoveSelection"
                    @selectItem="handleSelection"
                  ></ItemsFilterSelection>
                </div>

                <!-- Country # end -->

                <!-- Type # start -->
                <div
                  class="md:w-1/2 w-full"
                  v-if="
                    typeSelected &&
                    Array.isArray(typeSelected) &&
                    fetchedDataPosts &&
                    Array.isArray(fetchedDataPosts.types)
                  "
                >
                  <ItemsFilterSelection
                    nameOfList="Types"
                    :list="fetchedDataPosts.types"
                    :listSelected="typeSelected"
                    icon="NewspaperIcon"
                    @removeItem="handleRemoveSelection"
                    @selectItem="handleSelection"
                  ></ItemsFilterSelection>
                </div>
                <!-- Type # end -->
              </div>
            </template>
          </template>
        </div>
        <!-- Search in Tags Or Content # end -->

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

        <template v-if="!isLoadingPosts && !isErrorPosts && isSuccessPosts">
          <!-- If posts is empty array # start -->
          <template
            v-if="
              fetchedDataPosts &&
              fetchedDataPosts.posts &&
              Array.isArray(fetchedDataPosts.posts.data) &&
              fetchedDataPosts.posts.data.length === 0 &&
              !isLoadingPosts
            "
          >
            <h1 class="myTertiaryHeader text-center">No results</h1>
            <p class="myPrimaryParagraph text-center">
              Unfortunately, no results were found.
            </p>
          </template>
          <!-- If posts is empty array # end -->

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
                      <NuxtLink
                        :to="{
                          name: 'team_slug-resource-slug-id_description-id',
                          params: {
                            team_slug: post.team.slug,
                            resource: nameList,
                            slug: post.slug,
                            id_description: 'view',
                            id: post.id,
                          },
                        }"
                      >
                        <p class="myQuaternaryHeader">
                          {{ post.title }}
                        </p>
                      </NuxtLink>
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
                        post.started_at &&
                        post.ended_at &&
                        nameList === 'campaign'
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
                        nameOfList="Countries"
                        :list="post.countries"
                        :listSelected="countrySelected"
                        icon="GlobeAmericasIcon"
                        @removeItem="handleRemoveSelection"
                        @selectItem="handleSelection"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Country # end -->

                    <!-- State # start -->
                    <template v-if="post.states">
                      <ItemDisplaySelection
                        nameOfList="States"
                        :list="post.states"
                        :listSelected="stateSelected"
                        icon="MapPinIcon"
                        @removeItem="handleRemoveSelection"
                        @selectItem="handleSelection"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- State # end -->

                    <!-- Type # start -->
                    <template v-if="post.types">
                      <ItemDisplaySelection
                        nameOfList="Types"
                        :list="post.types"
                        :listSelected="typeSelected"
                        icon="NewspaperIcon"
                        @removeItem="handleRemoveSelection"
                        @selectItem="handleSelection"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Type # end -->

                    <!-- Category # start -->
                    <template v-if="post.categories">
                      <ItemDisplaySelection
                        nameOfList="Categories"
                        :list="post.categories"
                        :listSelected="categorySelected"
                        icon="interests"
                        @removeItem="handleRemoveSelection"
                        @selectItem="handleSelection"
                      ></ItemDisplaySelection>
                    </template>
                    <!-- Category # end -->
                  </section>
                </li>
              </TransitionGroup>
            </ul>
          </div>
          <!-- List Grid # end -->

          <!-- Pagination # start -->
          <div
            v-if="fetchedDataPosts && fetchedDataPosts.posts"
            class="flex items-center justify-center bg-white py-3 mt-4 gap-2"
          >
            <TailwindPagination
              :limit="1"
              :keepLength="true"
              :class="[
                'space-x-1',
                'shadow-none',
                'tailwind-pagination-package',
              ]"
              :active-classes="[
                'bg-myPrimaryLinkColor',
                'text-white',
                'rounded-full',
              ]"
              :item-classes="[
                'p-0',
                'm-0',
                'border-none',
                'bg-myPrimaryLightGrayColor',
                'shadow-sm',
                'hover:bg-gray-300',
                'text-myPrimaryDarkGrayColor',
                'rounded-full',
              ]"
              :data="fetchedDataPosts.posts"
              @pagination-change-page="getResultsForPage"
            >
              <template #prev-nav>
                <span> Prev </span>
              </template>
              <template #next-nav>
                <span>Next</span>
              </template>
            </TailwindPagination>
          </div>
          <!-- Pagination # end -->
        </template>
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
