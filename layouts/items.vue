<script setup>
import { vueFetch } from '../../../resources/js/composables/vueFetch';
import { onMounted, ref, watch } from 'vue';
import SmallUniversalSpinner from '../components/loaders/SmallUniversalSpinner.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import ThumbnailSmallImageSlider from '../../../resources/js/Components/ImageSliders/ThumbnailSmallImageSlider.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';
import { parseISO, format } from 'date-fns';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

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

console.log(`den er::`, props.pathList);

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
        <p class="py-12">Content here</p>
        <p class="py-12">fetchedDataPosts: {{ fetchedDataPosts }}</p>
      </template>

      <!-- List Grid # start -->
      <!-- List Grid # end -->
      <!-- Pagination # start -->

      <!-- Pagination # end -->
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
