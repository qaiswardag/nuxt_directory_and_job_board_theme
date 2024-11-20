<script setup>
import { ref } from 'vue';
import SlideOverPrimaryMenu from '../sidebars/SlideOverPrimaryMenu.vue';
import { useUserStore } from '../../store/user';
import ThumbnailSmallImageSlider from '../sliders/ThumbnailSmallImageSlider.vue';

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

const goToLogin = function () {
  if (runtimeConfig.public.APP_ENV === 'local') {
    window.location.href = runtimeConfig.public.LARAVEL_APP_URL + '/login';
  }
  if (runtimeConfig.public.APP_ENV !== 'local') {
    window.location.href =
      runtimeConfig.public.LARAVEL_APP_URL_PRODUCTION + '/login';
  }
};

const goToSignUp = function () {
  if (runtimeConfig.public.APP_ENV === 'local') {
    window.location.href = runtimeConfig.public.LARAVEL_APP_URL + '/register';
  }
  if (runtimeConfig.public.APP_ENV !== 'local') {
    window.location.href =
      runtimeConfig.public.LARAVEL_APP_URL_PRODUCTION + '/register';
  }
};

const isActive = function (segment) {
  const segments = route.path.split('/');
  if (segments[2] === segment) {
    return true;
  } else {
    return false;
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
          to="/listings"
          class="text-myPrimaryDarkGrayColor"
          :class="[
            route.name === 'listings' ? 'text-myPrimaryLinkColor' : '',
            isActive('listing') ? 'text-myPrimaryLinkColor' : '',
          ]"
        >
          <div class="myPrimaryMenuTextButton">Listings</div>
        </NuxtLink>
        <NuxtLink
          to="/jobs"
          class="text-myPrimaryDarkGrayColor"
          :class="[
            route.name === 'jobs' ? 'text-myPrimaryLinkColor' : '',
            isActive('job') ? 'text-myPrimaryLinkColor' : '',
          ]"
        >
          <div class="myPrimaryMenuTextButton">Jobs</div>
        </NuxtLink>
        <NuxtLink
          to="/posts"
          class="text-myPrimaryDarkGrayColor"
          :class="[
            route.name === 'posts' ? 'text-myPrimaryLinkColor' : '',
            isActive('post') ? 'text-myPrimaryLinkColor' : '',
          ]"
        >
          <div class="myPrimaryMenuTextButton">Posts</div>
        </NuxtLink>
      </div>

      <NuxtLink
        to="/listings"
        class="text-myPrimaryDarkGrayColor"
        :class="{
          'text-myPrimaryLinkColor': routeName === 'listings',
        }"
      >
        <div class="lg:hidden flex myPrimaryMenuTextButton">Listings</div>
      </NuxtLink>

      <template
        v-if="
          user &&
          user.fetchedDataUser &&
          typeof user.fetchedDataUser.first_name === 'string' &&
          typeof user.fetchedDataUser.last_name === 'string' &&
          user.fetchedDataUser.first_name.length !== 0 &&
          user.fetchedDataUser.first_name &&
          user.fetchedDataUser.last_name
        "
      >
        <button
          @click="goToDashboard"
          type="button"
        >
          <template v-if="user && user.isLoadingUser && !user.isErrorUser">
            <div>
              <span class="flex justify-center items-center h-10 w-10">
                <span class="relative flex justify-center items-center h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-myPrimaryLinkColor opacity-50"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-myPrimaryLinkColor"
                  ></span>
                </span>
              </span>
            </div>
          </template>

          <template
            v-if="
              user.fetchedDataUser.user_photo &&
              Array.isArray(user.fetchedDataUser.user_photo) &&
              user.fetchedDataUser.user_photo.length !== 0 &&
              !user.isLoadingUser &&
              !user.isErrorUser
            "
          >
            <div
              class="rounded-l-full min-h-[3rem] flex items-center justify-center"
            >
              <ThumbnailSmallImageSlider
                :images="user.fetchedDataUser.user_photo"
                imageSize="thumbnail_path"
                imageHeight="h-10 min-h-10 max-h-10"
                imageWidth="w-10 min-w-10 max-w-10 object-cover"
                :roundedFull="true"
              ></ThumbnailSmallImageSlider>
            </div>
          </template>

          <template v-else>
            <template v-if="!user.isLoadingUser && !user.isErrorUser">
              <div
                class="rounded-l-full min-h-[3rem] flex items-center justify-center"
              >
                <div
                  class="text-white flex-shrink-0 gap-0.5 h-10 w-10 rounded-full bg-myPrimaryBrandColor flex justify-center items-center text-xs rounded-l-full"
                >
                  <span>
                    {{
                      user.fetchedDataUser.first_name.charAt(0).toUpperCase()
                    }}
                  </span>
                  <span>
                    {{ user.fetchedDataUser.last_name.charAt(0).toUpperCase() }}
                  </span>
                </div>
              </div>
            </template>
          </template>
        </button>
      </template>

      <template v-else>
        <button
          @click="goToLogin"
          type="button"
        >
          <div class="myPrimaryMenuTextButton">Login</div>
        </button>
        <button
          @click="goToSignUp"
          type="button"
        >
          <div class="myPrimaryMenuTextButton">Sign up</div>
        </button>
      </template>

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
