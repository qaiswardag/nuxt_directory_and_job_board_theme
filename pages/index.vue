<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import { useUserStore } from '../store/user';

const store = useUserStore();

const { setSearchQuery } = store;

const runtimeConfig = useRuntimeConfig();

const searchQuery = ref('');

const handleSearch = async function () {
  setSearchQuery(searchQuery.value);

  await navigateTo('/listings');
};

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Home`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Home`,
  description: 'Nuxt 3 Directory & Job Board Theme.',
  ogDescription: 'Nuxt 3 Directory & Job Board Theme.',
  ogImage: () => {
    return '/images/brand-images/home.jpg';
  },
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <div class="w-full relative h-[36rem]">
          <img
            class="top-0 left-0 w-full object-cover h-[36rem]"
            src="/images/brand-images/home.jpg"
            alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
          />
          <div class="bg-black/20 absolute top-0 left-0 w-full h-[36rem]"></div>

          <div
            class="absolute text-2xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 top-1/4 w-full md:px-6 px-4"
          >
            <h1 class="myPrimaryHeader text-white text-center">
              Free Listing Directory, Blog & Job Board Theme
              <br />
            </h1>
            <p class="myPrimaryParagraph text-white text-center font-medium">
              Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog,
              and Job Board Theme.
            </p>

            <div
              class="lg:w-2/3 md:w-2/2 w-full mx-auto py-6 px-4 rounded-2xl mt-6 mb-4 flex md:flex-row flex-col md:gap-4 gap-2 bg-gray-100 bg-opacity-20"
            >
              <form
                @submit.prevent="handleSearch"
                class="md:w-3/4 w-full"
              >
                <div class="relative w-full">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <span class="material-symbols-outlined"> search </span>
                  </div>
                  <input
                    v-model="searchQuery"
                    type="search"
                    id="search_query"
                    class="myPrimaryInput pl-10 shadow-none w-full text-sm"
                    autocomplete="off"
                    placeholder="Search listings.."
                  />
                </div>
              </form>
              <button
                type="button"
                @click="handleSearch"
                class="myPrimaryButton md:w-1/4 w-full"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </template>

      <!-- 4 images # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50"
      >
        <template #title
          >Free Listing Directory, Blog & Job Board Theme
        </template>
        <template #description>
          Page Builder, Multiple Security Layers, advanced Team Management,
          Listing Directory, Blog, Job Board and Media Library in one solution.
          <br />
          <a
            class="text-myPrimaryLinkColor"
            href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
            target="_blank"
          >
            Visit and download the GitHub repository.</a
          >
        </template>
        <template #content>
          <div
            class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              class="w-full lg:h-[30rem] h-[22rem] relative col-span-1 flex flex-col bg-red-100 text-center shadow rounded-lg"
            >
              <img
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg"
                src="/images/home/fashion_show.jpg"
                alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
              />

              <NuxtLink to="/listings">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>
                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Listings</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    User-friendly features for managing, organizing, and
                    advertising business listings.
                  </p>
                </div>
              </NuxtLink>
            </div>
            <div
              class="w-full lg:h-[30rem] h-[22rem] relative col-span-1 flex flex-col bg-red-100 text-center shadow rounded-lg"
            >
              <img
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg"
                src="/images/home/orange_bg.jpg"
                alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
              />
              <NuxtLink to="/posts">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>

                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Posts</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    Newest published posts. Utilize advanced filters ensuring
                    users find the most relevant content for their needs.
                  </p>
                </div>
              </NuxtLink>
            </div>
            <div
              class="w-full lg:h-[30rem] h-[22rem] relative col-span-1 flex flex-col bg-red-100 text-center shadow rounded-lg"
            >
              <img
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg"
                src="/images/home/girl_light_bg.jpg"
                alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
              />

              <NuxtLink to="/jobs">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>
                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Jobs</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    Latest published job postings. Filters to refine the search
                    by country, state, category, job type, and more.
                  </p>
                </div>
              </NuxtLink>
            </div>
            <div
              class="w-full lg:h-[30rem] h-[22rem] relative col-span-1 flex flex-col bg-red-100 text-center shadow rounded-lg"
            >
              <img
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg"
                src="/images/home/three.jpg"
                alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
              />

              <NuxtLink to="/professional">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>
                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Professional</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    Professional page for subscribing to listings or creating
                    single-charge job posts using Stripe integration.
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </template>
      </FullWidthElement>
      <!-- 4 images # end -->

      <!-- Builder # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-red-50"
      >
        <template #title
          >Customize the design of Listings, Jobs and Posts
        </template>
        <template #description>
          Allow your users to build listings, jobs or posts with the intuitive
          Page Builder.
          <br />
          <br />
          Features such as drag & drop building, true visual editing, media
          library, responsive editing, color and font customization allow users
          to achieve the perfect layout.
          <br />
          <a
            class="text-myPrimaryLinkColor"
            href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
            target="_blank"
          >
            Visit and download the GitHub repository.</a
          >
        </template>
        <template #content>
          <div class="w-full relative">
            <img
              class="top-0 left-0 w-full object-cover rounded-lg"
              src="/images/home/edit_or_add_designs.jpg"
              alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
            />
            <div
              class="bg-black/0 absolute top-0 left-0 w-full h-full rounded-lg"
            ></div>
          </div>
        </template>
      </FullWidthElement>
      <!-- Builder # end -->

      <!-- Linktree # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50"
      >
        <template #title>Allow your users to share multiple links </template>
        <template #description>
          Empower your users with the Page Builder. It allows them to easily add
          and manage multiple links, customize content, and arrange layouts.
        </template>
        <template #content>
          <div
            class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              class="bg-gradient-to-r from-red-100 via-red-200 to-pink-100 w-full lg:h-[32rem] h-[32rem] relative col-span-1 flex flex-col text-center shadow rounded-lg"
            >
              <div class="px-2 pt-8 absolute top-0 w-full rounded-full">
                <div
                  class="flex justify-center items-center shrink-0 w-full mb-8"
                >
                  <img
                    class="object-cover w-28 h-28 rounded-full"
                    src="/images/home/woman_1.jpg"
                    alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
                  />
                </div>

                <p class="myQuaternaryHeader">Stella Hill</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Instagram
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Website
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Blog
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 w-full lg:h-[32rem] h-[32rem] relative col-span-1 flex flex-col text-center shadow rounded-lg"
            >
              <div class="px-2 pt-8 absolute top-0 w-full rounded-full">
                <div
                  class="flex justify-center items-center shrink-0 w-full mb-8"
                >
                  <img
                    class="object-cover w-28 h-28 rounded-full"
                    src="/images/home/woman_2.jpg"
                    alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
                  />
                </div>

                <p class="myQuaternaryHeader">Victoria Alvarez</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  YouTube
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  TikTok
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Instagram
                </div>
              </div>
            </div>
            <div
              class="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-orange-100 via-green-400 to-orange-100 w-full lg:h-[32rem] h-[32rem] relative col-span-1 flex flex-col text-center shadow rounded-lg"
            >
              <div class="px-2 pt-8 absolute top-0 w-full rounded-full">
                <div
                  class="flex justify-center items-center shrink-0 w-full mb-8"
                >
                  <img
                    class="object-cover w-28 h-28 rounded-full"
                    src="/images/home/woman_3.jpg"
                    alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
                  />
                </div>

                <p class="myQuaternaryHeader">Leilani Sanders</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Work
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Affiliate Links
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Daily Outfits
                </div>
              </div>
            </div>
            <div
              class="bg-gradient-to-l from-orange-200 via-orange-200 to-orange-300 w-full lg:h-[32rem] h-[32rem] relative col-span-1 flex flex-col text-center shadow rounded-lg"
            >
              <div class="px-2 pt-8 absolute top-0 w-full rounded-full">
                <div
                  class="flex justify-center items-center shrink-0 w-full mb-8"
                >
                  <img
                    class="object-cover w-28 h-28 rounded-full"
                    src="/images/home/woman_4.jpg"
                    alt="Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and Job Board Theme."
                  />
                </div>

                <p class="myQuaternaryHeader">Alice Howard</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Travel Blog
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Travel Tips
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-xs bg-white hover:bg-white"
                >
                  Inspiration
                </div>
              </div>
            </div>
          </div>
        </template>
      </FullWidthElement>
      <!-- Linktree # end -->
    </GuestsLayout>
  </MainLayout>
</template>
