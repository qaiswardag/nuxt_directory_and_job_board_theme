<script setup>
import { vueFetch } from '../composables/vueFetch';
import { onMounted, ref, watch } from 'vue';
import SmallUniversalSpinner from '../components/loaders/SmallUniversalSpinner.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import ThumbnailSmallImageSlider from '../components/sliders/ThumbnailSmallImageSlider.vue';
import { parseISO, format } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import ItemDisplaySelection from '../layouts/items/ItemDisplaySelection.vue';
import ItemsFilterSelection from '../layouts/items/ItemsFilterSelection.vue';
import TailwindPagination from '../components/pagination/TailwindPagination.vue';
import { useUserStore } from '../store/user';

const store = useUserStore();

const {
  getTagsOrContentListings,
  getTagsOrContentJobs,
  getTagsOrContentPosts,

  setTagsOrContentListings,
  setTagsOrContentJobs,
  setTagsOrContentPosts,

  getSearchQueryListings,
  setSearchQueryListings,
  getSearchQueryJobs,
  setSearchQueryJobs,
  getSearchQueryPosts,
  setSearchQueryPosts,

  getCurrentPageListings,
  getCurrentPageJobs,
  getCurrentPagePosts,
  setCurrentPageListings,
  setCurrentPageJobs,
  setCurrentPagePosts,

  getCurrentCategoriesListings,
  getCurrentCategoriesJobs,
  getCurrentCategoriesPosts,

  setCurrentCategoriesListings,
  setCurrentCategoriesJobs,
  setCurrentCategoriesPosts,

  getCurrentTypesListings,
  getCurrentTypesJobs,
  getCurrentTypesPosts,

  setCurrentTypesListings,
  setCurrentTypesJobs,
  setCurrentTypesPosts,

  getCurrentCountriesListings,
  getCurrentCountriesJobs,
  getCurrentCountriesPosts,

  setCurrentCountriesListings,
  setCurrentCountriesJobs,
  setCurrentCountriesPosts,

  getCurrentStatesListings,
  getCurrentStatesJobs,
  getCurrentStatesPosts,

  setCurrentStatesListings,
  setCurrentStatesJobs,
  setCurrentStatesPosts,
} = store;

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

const search_query = ref('');
const tags_or_content = ref(false);

const currentPage = ref(1);

const fetchComponents = function (page) {
  currentPage.value = page;
  checkStateParams();

  // remember old search value while paginating
  if (
    fetchedDataPosts &&
    fetchedDataPosts.value &&
    fetchedDataPosts.value.oldInput &&
    fetchedDataPosts.value.oldInput.search_query
  ) {
    search_query.value = fetchedDataPosts.value?.oldInput?.search_query;
  }

  const params = new URLSearchParams({
    page: page,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  appendSelectedParams(params);

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url, {}, { additionalCallTime: 200 });
};

const checkStateParams = function () {
  if (
    props.nameList === 'listing' &&
    typeof search_query.value !== 'undefined' &&
    typeof search_query.value === 'string'
  ) {
    setSearchQueryListings(search_query.value);
    setCurrentPageListings(currentPage.value);
  }
  if (
    props.nameList === 'job' &&
    typeof search_query.value !== 'undefined' &&
    typeof search_query.value === 'string'
  ) {
    setSearchQueryJobs(search_query.value);
    setCurrentPageJobs(currentPage.value);
  }
  if (
    props.nameList === 'post' &&
    typeof search_query.value !== 'undefined' &&
    typeof search_query.value === 'string'
  ) {
    setSearchQueryPosts(search_query.value);
    setCurrentPagePosts(currentPage.value);
  }
};
const handleSearch = function () {
  checkStateParams();
  const params = new URLSearchParams({
    page: 1,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  appendSelectedParams(params);

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url, {}, { additionalCallTime: 200 });
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
  if (props.nameList === 'listing') {
    setTagsOrContentListings(newValue);
  }
  if (props.nameList === 'job') {
    setTagsOrContentJobs(newValue);
  }
  if (props.nameList === 'post') {
    setTagsOrContentPosts(newValue);
  }

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

// handle category # start øø
const handleSelection = function (selectedItem, nameOfSelection) {
  checkStateParams();

  if (props.nameList === 'listing') {
    setCurrentCategoriesListings(categorySelected.value);
    setCurrentTypesListings(typeSelected.value);
    setCurrentCountriesListings(countrySelected.value);
    setCurrentStatesListings(stateSelected.value);
  }
  if (props.nameList === 'job') {
    setCurrentCategoriesJobs(categorySelected.value);
    setCurrentTypesJobs(typeSelected.value);
    setCurrentCountriesJobs(countrySelected.value);
    setCurrentStatesJobs(stateSelected.value);
  }
  if (props.nameList === 'post') {
    setCurrentCategoriesPosts(categorySelected.value);
    setCurrentTypesPosts(typeSelected.value);
    setCurrentCountriesPosts(countrySelected.value);
    setCurrentStatesPosts(stateSelected.value);
  }

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
  categorySelected.value.forEach((item, index) => {
    params.append(`category[${index}][id]`, item.id);
  });

  typeSelected.value.forEach((item, index) => {
    params.append(`type[${index}][id]`, item.id);
  });

  countrySelected.value.forEach((item, index) => {
    params.append(`country[${index}][id]`, item.id);
  });

  // Append selected states
  stateSelected.value.forEach((item, index) => {
    params.append(`state[${index}][id]`, item.id);
  });

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url, {}, { additionalCallTime: 200 });
};

const goToSinglePostNewWindow = function (teamSlug, postSlug, postId) {
  window.open(
    `${runtimeConfig.public.APP_URL}/${teamSlug}/${props.nameList}/${postSlug}/view/${postId}`,
    '_blank'
  );
};

const goToSinglePost = async function (teamSlug, postSlug, postId) {
  await navigateTo({
    path: `${teamSlug}/${props.nameList}/${postSlug}/view/${postId}`,
  });
};

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

const setFetchParamsFromState = function () {
  if (props.nameList === 'listing') {
    search_query.value = getSearchQueryListings;
  }
  if (props.nameList === 'job') {
    search_query.value = getSearchQueryJobs;
  }
  if (props.nameList === 'post') {
    search_query.value = getSearchQueryPosts;
  }
};

const clearSearch = function () {
  search_query.value = '';
  searchInTagsAndContent.value = false;
  showJobCountriesAndTypes.value = false;
  categorySelected.value = [];
  typeSelected.value = [];
  countrySelected.value = [];
  stateSelected.value = [];

  const params = new URLSearchParams({
    page: 1,
    search_query: search_query.value,
    tags_or_content: tags_or_content.value ? 1 : 0,
  });

  const url = `${props.pathList}?${params.toString()}`;
  handleGetPosts(url, {}, { additionalCallTime: 200 });
};

onMounted(() => {
  setFetchParamsFromState();

  if (props.nameList === 'listing') {
    // Check if params from global state is array
    if (
      getCurrentCategoriesListings &&
      Array.isArray(getCurrentCategoriesListings) &&
      getCurrentCategoriesListings.length > 0
    ) {
      categorySelected.value = getCurrentCategoriesListings;
    }

    // Check if params from global state is array
    if (
      getCurrentCountriesListings &&
      Array.isArray(getCurrentCountriesListings) &&
      getCurrentCountriesListings.length > 0
    ) {
      countrySelected.value = getCurrentCountriesListings;
    }

    // Check if params from global state is array
    if (
      getCurrentStatesListings &&
      Array.isArray(getCurrentStatesListings) &&
      getCurrentStatesListings.length > 0
    ) {
      stateSelected.value = getCurrentStatesListings;
    }

    // Check if params from global state is array
    if (
      getCurrentTypesListings &&
      Array.isArray(getCurrentTypesListings) &&
      getCurrentTypesListings.length > 0
    ) {
      typeSelected.value = getCurrentTypesListings;
    }

    tags_or_content.value = getTagsOrContentListings;
    searchInTagsAndContent.value = getTagsOrContentListings;
    // fetch data
    fetchComponents(getCurrentPageListings);
  }
  if (props.nameList === 'job') {
    // Check if params from global state is array
    if (
      getCurrentCategoriesJobs &&
      Array.isArray(getCurrentCategoriesJobs) &&
      getCurrentCategoriesJobs.length > 0
    ) {
      categorySelected.value = getCurrentCategoriesJobs;
    }

    // Check if params from global state is array
    if (
      getCurrentCountriesJobs &&
      Array.isArray(getCurrentCountriesJobs) &&
      getCurrentCountriesJobs.length > 0
    ) {
      countrySelected.value = getCurrentCountriesJobs;
    }

    // Check if params from global state is array
    if (
      getCurrentStatesJobs &&
      Array.isArray(getCurrentStatesJobs) &&
      getCurrentStatesJobs.length > 0
    ) {
      stateSelected.value = getCurrentStatesJobs;
    }

    // Check if params from global state is array
    if (
      getCurrentTypesJobs &&
      Array.isArray(getCurrentTypesJobs) &&
      getCurrentTypesJobs.length > 0
    ) {
      typeSelected.value = getCurrentTypesJobs;
    }

    tags_or_content.value = getTagsOrContentJobs;
    searchInTagsAndContent.value = getTagsOrContentJobs;

    // fetch data
    fetchComponents(getCurrentPageJobs);
  }
  if (props.nameList === 'post') {
    // Check if params from global state is array
    if (
      getCurrentCategoriesPosts &&
      Array.isArray(getCurrentCategoriesPosts) &&
      getCurrentCategoriesPosts.length > 0
    ) {
      categorySelected.value = getCurrentCategoriesPosts;
    }

    // Check if params from global state is array
    if (
      getCurrentCountriesPosts &&
      Array.isArray(getCurrentCountriesPosts) &&
      getCurrentCountriesPosts.length > 0
    ) {
      countrySelected.value = getCurrentCountriesPosts;
    }

    // Check if params from global state is array
    if (
      getCurrentStatesPosts &&
      Array.isArray(getCurrentStatesPosts) &&
      getCurrentStatesPosts.length > 0
    ) {
      stateSelected.value = getCurrentStatesPosts;
    }

    // Check if params from global state is array
    if (
      getCurrentTypesPosts &&
      Array.isArray(getCurrentTypesPosts) &&
      getCurrentTypesPosts.length > 0
    ) {
      typeSelected.value = getCurrentTypesPosts;
    }

    tags_or_content.value = getTagsOrContentPosts;
    searchInTagsAndContent.value = getTagsOrContentPosts;

    // fetch data
    fetchComponents(getCurrentPagePosts);
  }
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
        <div
          v-if="fetchedDataPosts && fetchedDataPosts.posts"
          class="py-6 px-4 rounded-xl bg-gray-100 grid gap-4 mb-8"
        >
          <!-- Search in Tags Or Content # end -->
          <div class="flex md:flex-row flex-col myPrimaryGap">
            <div
              v-if="fetchedDataPosts && fetchedDataPosts.posts"
              class="w-full"
              :class="[
                {
                  'md:w-1/3': nameList !== 'post',
                },
                {
                  'md:w-1/2': nameList === 'post',
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
                      nameList === 'listing'
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
                  'md:w-1/3': nameList !== 'post',
                },
                {
                  'md:w-1/2': nameList === 'post',
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
          <div class="flex justify-between items-center gap-4">
            <div>
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
                    class="absolute left-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
            <div class="md:w-1/4 w-full flex items-center gap-2">
              <button
                type="button"
                @click="clearSearch"
                class="h-10 w-10 cursor-pointer rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryErrorColor hover:text-white text-myPrimaryErrorColor"
              >
                <span class="material-symbols-outlined"> filter_alt_off </span>
              </button>
              <button
                type="button"
                @click="handleSearch"
                class="myPrimaryButton w-full"
              >
                Search
              </button>
            </div>
          </div>
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
          <template
            v-if="
              fetchedDataPosts &&
              fetchedDataPosts.postCount &&
              fetchedDataPosts.posts
            "
          >
            <div class="flex justify-end items-center">
              <p class="myPrimaryParagraph text-xs pb-2">
                {{
                  Number(fetchedDataPosts.postCount) === 1
                    ? nameList[0].toUpperCase() + nameList.slice(1)
                    : `${nameList[0].toUpperCase() + nameList.slice(1)}s`
                }}:
                {{ fetchedDataPosts.postCount }}
              </p>
            </div>
          </template>
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
              class="grid myPrimaryGap xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
            >
              <li
                v-for="post in fetchedDataPosts.posts.data"
                :key="post.id"
                class="overflow-hidden whitespace-pre-line flex-1 h-auto rounded p-2 border border-myPrimaryLightGrayColor"
              >
                <!-- start photo -->
                <template
                  v-if="
                    post && post.cover_images !== null && nameList === 'post'
                  "
                >
                  <ThumbnailSmallImageSlider
                    :images="post.cover_images"
                    :isLoading="isLoadingPosts"
                    imageSize="medium_path"
                    imageHeight="xl:max-h-[20rem] xl:min-h-[20rem] xl:h-[20rem] lg:max-h-[22rem] min-h-[22rem] lg:h-[22rem] md:max-h-[18rem] min-h-[18rem] md:h-[18rem] max-h-[26rem] min-h-[26rem] h-[26rem]"
                    imageWidth="w-full object-cover rounded-b-none object-top"
                    :roundedFull="false"
                    :squareButtons="true"
                    @firstButtonClick="
                      goToSinglePost(post.team.slug, post.slug, post.id)
                    "
                    :imageClickable="true"
                  ></ThumbnailSmallImageSlider>
                  <!-- Team logo # start -->
                  <div
                    v-if="
                      post.cover_images &&
                      Array.isArray(post.cover_images) &&
                      post.cover_images.length > 0 &&
                      post.team &&
                      post.team.coverImagesWithLogos &&
                      post.team.coverImagesWithLogos.logos &&
                      Array.isArray(post.team.coverImagesWithLogos.logos) &&
                      post.team.coverImagesWithLogos.logos.length > 0
                    "
                    class="relative flex justify-center items-center mt-[-2rem] z-20 w-full h-[4rem]"
                  >
                    <img
                      alt="Logo brand"
                      :src="
                        getAppUrl(
                          `storage/uploads/${post.team.coverImagesWithLogos.logos[0].medium_path}`
                        )
                      "
                      class="w-[4rem] h-[4rem] bg-white rounded-full object-cover"
                    />
                  </div>
                  <!-- Team logo # end -->
                </template>

                <template
                  v-if="
                    post && post.cover_images !== null && nameList === 'job'
                  "
                >
                  <ThumbnailSmallImageSlider
                    :images="post.cover_images"
                    :isLoading="isLoadingPosts"
                    imageSize="medium_path"
                    imageHeight="xl:max-h-[20rem] xl:min-h-[20rem] xl:h-[20rem] lg:max-h-[22rem] min-h-[22rem] lg:h-[22rem] md:max-h-[18rem] min-h-[18rem] md:h-[18rem] max-h-[26rem] min-h-[26rem] h-[26rem]"
                    imageWidth="w-full object-cover rounded-b-none object-top"
                    :roundedFull="false"
                    :squareButtons="true"
                    @firstButtonClick="
                      goToSinglePost(post.team.slug, post.slug, post.id)
                    "
                    :imageClickable="true"
                  ></ThumbnailSmallImageSlider>
                  <!-- Team logo # start -->
                  <div
                    v-if="
                      post.cover_images &&
                      Array.isArray(post.cover_images) &&
                      post.cover_images.length > 0 &&
                      post.team &&
                      post.team.coverImagesWithLogos &&
                      post.team.coverImagesWithLogos.logos &&
                      Array.isArray(post.team.coverImagesWithLogos.logos) &&
                      post.team.coverImagesWithLogos.logos.length > 0
                    "
                    class="relative flex justify-center items-center mt-[-2rem] z-20 w-full h-[4rem]"
                  >
                    <img
                      alt="Logo brand"
                      :src="
                        getAppUrl(
                          `storage/uploads/${post.team.coverImagesWithLogos.logos[0].medium_path}`
                        )
                      "
                      class="w-[4rem] h-[4rem] bg-white rounded-full object-cover"
                    />
                  </div>
                  <!-- Team logo # end -->
                </template>

                <template
                  v-if="
                    post && post.cover_images !== null && nameList === 'listing'
                  "
                >
                  <ThumbnailSmallImageSlider
                    :images="post.cover_images"
                    :isLoading="isLoadingPosts"
                    imageSize="medium_path"
                    imageHeight="xl:max-h-[28rem] xl:min-h-[28rem] xl:h-[28rem] lg:max-h-[30rem] min-h-[30rem] lg:h-[30rem] md:max-h-[26rem] min-h-[26rem] md:h-[26rem] max-h-[34rem] min-h-[34rem] h-[34rem]"
                    imageWidth="w-full object-cover rounded-b-none object-top"
                    :roundedFull="false"
                    :squareButtons="true"
                    @firstButtonClick="
                      goToSinglePost(post.team.slug, post.slug, post.id)
                    "
                    :imageClickable="true"
                  ></ThumbnailSmallImageSlider>
                  <!-- Listing logo # start -->
                  <div
                    v-if="
                      post.cover_images &&
                      Array.isArray(post.cover_images) &&
                      post.cover_images.length > 0 &&
                      post.brand_logos &&
                      Array.isArray(post.brand_logos) &&
                      post.brand_logos.length > 0
                    "
                    class="relative flex justify-center items-center mt-[-2rem] z-20 w-full h-[4rem]"
                  >
                    <img
                      alt="Logo brand"
                      :src="
                        getAppUrl(
                          `storage/uploads/${post.brand_logos[0].medium_path}`
                        )
                      "
                      class="w-[4rem] h-[4rem] bg-white rounded-full object-cover"
                    />
                  </div>
                  <!-- Listing logo # end -->
                </template>

                <section class="pt-4 pb-6 px-4">
                  <button
                    @click="goToSinglePost(post.team.slug, post.slug, post.id)"
                    type="button"
                    class="w-full text-left mb-6"
                  >
                    <p class="myPrimaryParagraph text-sm font-medium">
                      <span>
                        {{ post.title }}
                      </span>

                      <!-- If team do have a logo # start -->
                      <template
                        v-if="
                          Array.isArray(
                            post.team?.coverImagesWithLogos?.logos
                          ) &&
                          post.team?.coverImagesWithLogos?.logos.length !== 0
                        "
                      >
                        <span>, </span>
                        <span>
                          {{ post.team.name }}
                        </span>
                      </template>
                      <!-- If team do have a logo # end -->

                      <!-- If team do not have a logo # start -->
                      <template
                        v-if="
                          Array.isArray(
                            post.team?.coverImagesWithLogos?.logos
                          ) &&
                          post.team?.coverImagesWithLogos?.logos.length === 0
                        "
                      >
                        <span>, </span>
                        <span>
                          {{ post.team.name }}
                        </span>
                      </template>
                      <!-- If team do not have a logo # end -->
                    </p>
                  </button>

                  <div
                    :class="{
                      'flex gap-0 items-center flex-wrap':
                        post.countries &&
                        Array.isArray(post.countries) &&
                        post.countries.length > 0 &&
                        post.states &&
                        Array.isArray(post.states) &&
                        post.states.length > 0,
                    }"
                  >
                    <template
                      v-if="
                        nameList !== 'post' &&
                        post.countries &&
                        Array.isArray(post.countries) &&
                        post.countries.length > 0 &&
                        post.states &&
                        Array.isArray(post.states) &&
                        post.states.length > 0
                      "
                    >
                      <span class="material-symbols-outlined text-[12px] pr-1">
                        location_on
                      </span>
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
                    <template
                      v-if="
                        post.countries &&
                        Array.isArray(post.countries) &&
                        post.countries.length > 0
                      "
                    >
                      <span class="text-xs">,&nbsp;</span>
                    </template>
                    <!-- Country # end -->

                    <!-- State # start -->
                    <div
                      :class="{
                        'flex gap-0 items-center flex-wrap':
                          !post.countries ||
                          (post.countries &&
                            Array.isArray(post.countries) &&
                            post.countries.length === 0 &&
                            post.states &&
                            Array.isArray(post.states) &&
                            post.states.length > 0),
                      }"
                    >
                      <template
                        v-if="
                          (nameList !== 'post' && !post.countries) ||
                          (post.countries &&
                            Array.isArray(post.countries) &&
                            post.countries.length === 0 &&
                            post.states &&
                            Array.isArray(post.states) &&
                            post.states.length > 0)
                        "
                      >
                        <span
                          class="material-symbols-outlined text-[12px] pr-1"
                        >
                          location_on
                        </span>
                      </template>
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
                    </div>
                    <!-- State # end -->
                  </div>

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

                  <button
                    type="button"
                    @click="
                      goToSinglePostNewWindow(
                        post.team.slug,
                        post.slug,
                        post.id
                      )
                    "
                    class="flex flex-wrap gap-2 items-center justify-left py-2 text-xs pt-4"
                  >
                    Open in new window
                  </button>
                </section>
              </li>
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
