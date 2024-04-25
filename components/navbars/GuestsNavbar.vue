<script setup>
import { ref } from 'vue';
import SlideOverPrimaryMenu from '../components/sidebars/SlideOverPrimaryMenu.vue';
import { useUserStore } from '../../store/user';

const store = useUserStore();

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
      <div class="lg:flex hidden myPrimaryGap items-center mx-auto">
        <NuxtLink
          to="/"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'index',
          }"
        >
          <div class="myPrimaryMenuTextButton">Home</div>
        </NuxtLink>
        <NuxtLink
          to="/stores"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'stores',
          }"
        >
          <div class="myPrimaryMenuTextButton">Stores</div>
        </NuxtLink>
        <NuxtLink
          to="/jobs"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'jobs',
          }"
        >
          <div class="myPrimaryMenuTextButton">Jobs</div>
        </NuxtLink>
        <NuxtLink
          to="/posts"
          class="text-myPrimaryDarkGrayColor"
          :class="{
            'text-myPrimaryLinkColor': routeName === 'posts',
          }"
        >
          <div class="myPrimaryMenuTextButton">Posts</div>
        </NuxtLink>
      </div>

      <NuxtLink
        to="/stores"
        class="text-myPrimaryDarkGrayColor"
        :class="{
          'text-myPrimaryLinkColor': routeName === 'stores',
        }"
      >
        <div class="lg:hidden flex myPrimaryMenuTextButton">Stores</div>
      </NuxtLink>

      <button
        @click="goToDashboard"
        type="button"
      >
        <div class="myPrimaryMenuTextButton">Account</div>
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
