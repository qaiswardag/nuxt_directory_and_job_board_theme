<script setup>
import { ref } from 'vue';
import SlideOverPrimaryMenu from '../components/sidebars/SlideOverPrimaryMenu.vue';
import { useUserStore } from '../../store/user';

const store = useUserStore();

const { fetchUser } = store;

const user = computed(() => {
  return store.getUser;
});

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const routeName = route.name;

const showPrimaryMenuSlideOver = ref(false);

// handle primary slideoer menu
const handlePrimaryMenuSlideOver = function () {
  showPrimaryMenuSlideOver.value = true;
};

// handle primary menu window
const primaryMenuSlideOverButton = function () {
  showPrimaryMenuSlideOver.value = false;
};

const goToDashboard = function () {
  if (runtimeConfig.public.APP_ENV === 'local') {
    window.location.href = runtimeConfig.public.LARAVEL_APP_URL;
  }
  if (runtimeConfig.public.APP_ENV !== 'local') {
    window.location.href = runtimeConfig.public.LARAVEL_APP_URL_PRODUCTION;
  }
};

onMounted(() => {
  fetchUser();
});
</script>
<template>
  <SlideOverPrimaryMenu
    :open="showPrimaryMenuSlideOver"
    @primaryMenuSlideOverButton="primaryMenuSlideOverButton"
  >
  </SlideOverPrimaryMenu>
  <header class="w-full text-sm">
    <nav
      class="mx-auto flex myPrimaryGap items-center justify-end px-6 lg:px-8"
      aria-label="Global"
    >
      <p>test: {{ user }}</p>
      <div class="flex myPrimaryGap items-center mx-auto">
        <NuxtLink
          to="/"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'index',
          }"
        >
          <div
            class="bg-gray-50 lg:flex lg:gap-2 lg:items-center hidden focus:outline-none cursor-pointer rounded-full px-1.5 py-1.5 font-medium"
          >
            Home
          </div>
        </NuxtLink>
        <NuxtLink
          to="/stores"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'stores',
          }"
        >
          <div
            class="bg-gray-50 lg:flex lg:gap-2 lg:items-center hidden focus:outline-none cursor-pointer rounded-full px-1.5 py-1.5 font-medium"
          >
            Stores
          </div>
        </NuxtLink>
        <NuxtLink
          to="/jobs"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'jobs',
          }"
        >
          <div
            class="bg-gray-50 lg:flex lg:gap-2 lg:items-center hidden focus:outline-none cursor-pointer rounded-full px-1.5 py-1.5 font-medium"
          >
            Jobs
          </div>
        </NuxtLink>
        <NuxtLink
          to="/campaigns"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'campaigns',
          }"
        >
          <div
            class="bg-gray-50 lg:flex lg:gap-2 lg:items-center hidden focus:outline-none cursor-pointer rounded-full px-1.5 py-1.5 font-medium"
          >
            Campaigns
          </div>
        </NuxtLink>
      </div>

      <button
        @click="goToDashboard"
        type="button"
        class="h-10 w-10 cursor-pointer rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
      >
        <span class="myMediumIcon material-symbols-outlined"> apps </span>
      </button>
      <button
        @click="goToDashboard"
        type="button"
        class="h-10 w-10 cursor-pointer rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
      >
        <span class="myMediumIcon material-symbols-outlined"> person </span>
      </button>

      <button
        @click="handlePrimaryMenuSlideOver"
        type="button"
        class="h-10 w-10 cursor-pointer rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
      >
        <span class="sr-only">View Menu</span>
        <span class="myMediumIcon material-symbols-outlined">
          drag_handle
        </span>
      </button>
    </nav>
  </header>
</template>
