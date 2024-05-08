<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import { useUserStore } from '../store/user';

const store = useUserStore();

const features = [
  {
    name: 'Free and open-source',
    description:
      'Enjoy all features without any cost, making it accessible to everyone.',
  },
  {
    name: 'Single Page Application',
    description:
      'Seamlessly navigate through the application without page reloads, ensuring a smooth user experience.',
  },
  {
    name: 'Page Builder',
    description:
      'Easily create and customize pages according to your needs with a user-friendly page builder.',
  },
  {
    name: 'Listings Directory',
    description: 'Effortlessly manage and showcase various listings.',
  },
  {
    name: 'Job Board',
    description:
      'Facilitate job postings and applications through a dedicated job board feature.',
  },
  {
    name: 'Blog Postings',
    description:
      'Publish and manage blog posts efficiently to keep your audience engaged and informed.',
  },
  {
    name: 'Mobile-First Approach',
    description:
      'Designed with a mobile-first approach, ensuring optimal performance and usability on all devices.',
  },
  {
    name: 'Media Library',
    description:
      'Organize and manage your media assets conveniently within a centralized media library for teams and users.',
  },
  {
    name: 'Stripe Integration',
    description:
      'Offer subscription-based plans for listings using Stripe or one-time charges for job postings.',
  },
  {
    name: 'Team Roles',
    description:
      'Assign specific roles and permissions to team members for better organization and control.',
  },
  {
    name: 'Superadmin Management',
    description:
      'Efficiently manage administrative tasks and permissions with superadmin capabilities.',
  },
  {
    name: 'Set Brand and Link Colors Once',
    description:
      'Customize and set brand colors and link styles easily, saving time and ensuring consistency.',
  },
];

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
  description:
    'Download Laravel, Vue, and Nuxt Theme for free, featuring a powerful Page Builder, Listing Directory, Blog, and Job Board.',
  ogDescription:
    'Download Laravel, Vue, and Nuxt Theme for free, featuring a powerful Page Builder, Listing Directory, Blog, and Job Board.',
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
            <div class="lg:w-2/3 md:w-2/2 w-full mx-auto">
              <h1 class="myPrimaryHeader text-white text-center">
                Free Listing Directory, Blog & Job Board Theme
                <br />
              </h1>
              <p class="myPrimaryParagraph text-white text-center font-medium">
                Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog,
                and Job Board Theme.
              </p>

              <div
                class="py-6 px-4 rounded-2xl mt-6 mb-4 flex md:flex-row flex-col md:gap-4 gap-2 bg-gray-100 bg-opacity-20"
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
          Page Builder, Listing Directory, Blog, Job Board, Media Library,
          Multiple Security Layers, Team Management, and much more. <br />
          <a
            class="text-myPrimaryLinkColor"
            href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
            target="_blank"
          >
            Download GitHub repository.</a
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
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg object-top"
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
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg object-top"
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
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg object-top"
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
                class="top-0 left-0 w-full object-cover lg:h-[30rem] h-[22rem] rounded-lg object-top"
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
          Features such as drag & drop building, true visual editing, media
          library, responsive editing, color and font customization allow users
          to achieve the perfect layout.
          <br />
          <a
            class="text-myPrimaryLinkColor"
            href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
            target="_blank"
          >
            Download GitHub repository.</a
          >
        </template>
        <template #content>
          <div
            class="relative overflow-hidden bg-cover bg-no-repeat grid grid-cols-12 h-[68rem] rounded-2xl shadow-sm outline outline-2 outline-offset-4 outline-myPrimaryLinkColor hover:outline-myPrimaryLinkColor/50"
            style="background-image: url('/images/home/the_furthest_dawn.jpg')"
          >
            <!-- Top menu # start -->
            <div
              class="col-span-12 px-4 top-0 h-[4rem] w-full border-b border-gray-200"
            >
              <div class="flex items-center justify-between h-full">
                <!-- section # start -->
                <div
                  class="lg:flex hidden items-center justify-end myPrimaryGap h-full"
                >
                  <div class="flex gap-2">
                    <span
                      class="w-2 h-2 rounded-full bg-red-400 hover:bg-red-600"
                    ></span
                    ><span
                      class="w-2 h-2 rounded-full bg-yellow-400 hover:bg-yellow-600"
                    ></span
                    ><span
                      class="w-2 h-2 rounded-full bg-green-400 hover:bg-green-600"
                    ></span>
                  </div>
                </div>
                <!-- section # end -->

                <!-- Editing page # start -->
                <div class="flex justify-center items-center gap-2">
                  <button
                    type="button"
                    class="mySecondaryButton text-[10px] py-2 px-6 cursor-default min-h-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="myPrimaryButton text-[10px] py-2 px-6 cursor-default min-h-2"
                  >
                    Publish
                  </button>
                </div>
                <!-- section # end -->

                <!-- section # start -->
                <div class="lg:flex hidden justify-center items-center gap-2">
                  <p class="myPrimaryParagraph text-[10px] text-white italic">
                    Editing: Listing ID 1
                  </p>
                </div>
                <!-- section # end -->

                <div class="flex items-center justify-end myPrimaryGap h-full">
                  <!-- icon # start -->
                  <div
                    class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                  >
                    <span class="material-symbols-outlined"> add </span>
                  </div>
                  <!-- icon # end -->
                  <!-- icon # start -->
                  <div
                    class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                  >
                    <span class="material-symbols-outlined"> visibility </span>
                  </div>
                  <!-- icon # end -->

                  <!-- section # start -->
                  <div class="lg:flex hidden justify-center items-center gap-2">
                    <p
                      class="myPrimaryParagraph text-[12px] text-white font-medium"
                    >
                      Page Builder
                    </p>
                  </div>
                  <!-- section # end -->
                </div>
                <!-- section # end -->
              </div>
            </div>
            <!-- Top menu # end -->
            <!-- Container  # start -->
            <div
              class="lg:col-span-9 col-span-5 top-0 w-full h-[64rem] rounded-l-2xl"
            >
              <div class="flex items-center justify-between">
                <!-- Left side menu # start -->
                <div
                  class="w-[4rem] bg-red-100 bg-opacity-50 hover:bg-opacity-40 h-[40rem] rounded-full pt-8 ml-2"
                >
                  <div class="flex flex-col justify-center items-center gap-8">
                    <!-- icon # start -->
                    <div
                      class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                    >
                      <span class="material-symbols-outlined">
                        arrow_selector_tool
                      </span>
                    </div>
                    <!-- icon # end -->
                    <!-- icon # start -->
                    <div
                      class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                    >
                      <span class="material-symbols-outlined"> add </span>
                    </div>
                    <!-- icon # end -->
                    <!-- icon # start -->
                    <div
                      class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                    >
                      <span class="material-symbols-outlined"> replay </span>
                    </div>
                    <!-- icon # end -->
                    <!-- icon # start -->
                    <div
                      class="h-8 w-8 rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryErrorColor hover:text-white focus-visible:ring-0"
                    >
                      <span class="material-symbols-outlined"> delete </span>
                    </div>
                    <!-- icon # end -->
                  </div>
                </div>
                <!-- Left side menu # end -->

                <div
                  class="flex items-center justify-center w-full h-[64rem] pt-2 pr-8"
                >
                  <!-- Content for container # start -->

                  <!-- Text area # start -->
                  <div
                    class="lg:flex hidden items-center w-full h-full justify-end"
                  >
                    <div
                      class="w-[22rem] h-[10rem] rounded-2xl bg-gray-200 bg-opacity-90 hover:bg-opacity-80 py-8 flex flex-col justify-between top-0"
                    >
                      <div
                        class="py-2 flex justify-between gap-4 px-4 bg-gray-400 rounded-full mx-6 bg-opacity-30"
                      >
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            format_bold
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            format_italic
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            format_color_text
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            format_align_left
                          </span>
                        </p>
                      </div>
                      <div
                        class="py-2 flex justify-between gap-4 px-4 bg-gray-400 rounded-full mx-6 bg-opacity-30"
                      >
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            format_shapes
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            add_photo_alternate
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            colors
                          </span>
                        </p>
                        <p class="myPrimaryParagraph text-[20px]">
                          <span class="material-symbols-outlined text-[20px]">
                            attach_file
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- Text area # end -->
                  <!-- Content for container # end -->
                </div>
              </div>
            </div>
            <!-- Container  # end -->

            <!-- Right menu  # start -->
            <div
              class="lg:col-span-3 col-span-7 px-4 top-0 w-full bg-gray-200 bg-opacity-90 hover:bg-opacity-80 h-[64rem] rounded-br-2xl pt-6 overflow-y-scroll"
            >
              <div class="min-h-[80rem] h-[80rem]">
                <div class="flex justify-between items-center gap-2">
                  <!-- icon # start -->
                  <div></div>
                  <!-- icon # end -->
                  <p class="font-medium text-sm">
                    Editing <span class="lowercase">&lt;IMG&gt;</span>
                  </p>
                </div>

                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Filters
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Blur
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">blur-lg</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                  </div>
                </div>

                <div class="w-full border-t border-gray-300"></div>

                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Borders
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Radius
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">rounded</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Width
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">border-0</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                  </div>
                </div>

                <div class="w-full border-t border-gray-300"></div>

                <div class="my-4">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Typography
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Font Family
                      </div>
                      <!-- icon # start -->
                      <div class="flex justify-end w-full">
                        <div
                          class="shadow h-8 w-14 rounded-lg flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                        >
                          <span class="material-symbols-outlined"> aq </span>
                        </div>
                      </div>
                      <!-- icon # end -->
                    </div>
                    <!-- select # end -->
                  </div>
                </div>

                <div class="w-full border-t border-gray-300"></div>
                <div class="my-4">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Video
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Add Video
                      </div>
                      <!-- icon # start -->
                      <div class="flex justify-end w-full">
                        <div
                          class="shadow h-8 w-14 rounded-lg flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                        >
                          <span class="material-symbols-outlined">
                            play_arrow
                          </span>
                        </div>
                      </div>
                      <!-- icon # end -->
                    </div>
                    <!-- select # end -->
                  </div>
                </div>

                <div class="w-full border-t border-gray-300"></div>

                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Customization
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- toggle # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Shadow
                      </div>

                      <div
                        class="myPrimaryParagraph text-xs font-medium flex justify-end w-full"
                      >
                        <div
                          class="pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-myPrimaryLinkColor ring-black/20"
                        >
                          <div
                            class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <!-- toggle # end -->

                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Sepia
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">sepia-0</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                  </div>
                </div>

                <div class="w-full border-t border-gray-300"></div>
                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Spacing
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Padding
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">p-0</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->

                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Margin
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">m-0</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                  </div>
                </div>
                <div class="w-full border-t border-gray-300"></div>
                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Backgrounds
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Color
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">bg-black</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->

                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Size
                      </div>
                      <div
                        class="border border-myPrimaryDarkGrayColor hover:border-gray-400 h-10 flex items-center justify-between px-2 shadow rounded-lg w-2/3"
                      >
                        <p class="myPrimaryParagraph text-xs">bg-cover</p>

                        <div class="material-symbols-outlined">expand_more</div>
                      </div>
                    </div>
                    <!-- select # end -->
                  </div>
                </div>
                <div class="w-full border-t border-gray-300"></div>
                <div class="my-8">
                  <p class="myPrimaryParagraph text-sm font-medium pb-3">
                    Settings
                  </p>

                  <div class="flex flex-col myPrimaryGap">
                    <!-- select # start -->
                    <div class="flex items-center justify-start gap-6">
                      <div class="myPrimaryParagraph text-xs font-medium w-1/3">
                        Download
                      </div>
                      <!-- icon # start -->
                      <div class="flex justify-end w-full">
                        <div
                          class="shadow h-8 w-14 rounded-lg flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                        >
                          <span class="material-symbols-outlined">
                            cloud_download
                          </span>
                        </div>
                      </div>
                      <!-- icon # end -->
                    </div>
                    <!-- select # end -->
                  </div>
                </div>
              </div>
            </div>
            <!-- Right menu  # end -->
          </div>
        </template>
      </FullWidthElement>
      <!-- Builder # end -->

      <!-- Theme features # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50"
      >
        <template #title>Technical Specifications </template>
        <template #description>
          Complete Solution for Seamless Management and Control.
          <br />
          Everything you need from a page builder, listing directory, blog, and
          job board theme to get started right out of the box.
        </template>
        <template #content>
          <dl
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
          >
            <div
              v-for="feature in features"
              :key="feature.name"
              class="border-t border-gray-200 pt-4"
            >
              <dt class="myPrimaryParagraph font-medium">{{ feature.name }}</dt>
              <dd class="myPrimaryParagraph">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </template>
      </FullWidthElement>
      <!-- Theme features # end -->

      <!-- Linktree # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-red-50"
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
