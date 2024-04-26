<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
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

const currentOpenId = ref(null);

const isOpen = function (id) {
  if (id === currentOpenId.value) {
    currentOpenId.value = null;
    return;
  }
  currentOpenId.value = id;
};

const faqs = [
  {
    id: 1,
    question: 'Pricing',
    answer: 'For pricing information, visit our professional page.',
  },
  {
    id: 2,
    question: 'Our services',
    answer:
      'Our services include job posting, product in-store posts, and store posting.',
  },
];
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <div class="w-full relative h-[32rem]">
          <img
            class="top-0 left-0 w-full object-cover h-[32rem]"
            src="/images/brand-images/home.jpg"
            alt="Laravel and Vue Directory & Job Board Theme"
          />
          <div class="bg-black/20 absolute top-0 left-0 w-full h-[32rem]"></div>
          <div
            class="absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <h1 class="myPrimaryHeader text-white text-center">
              Test1 Laravel and Vue Directory & Job Board Theme
              <br />
            </h1>

            <p class="myPrimaryParagraph text-white text-center font-medium">
              Discover Fashion in the United Arab Emirates.
            </p>
          </div>
        </div>
      </template>

      <!-- 4 images # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50"
      >
        <template #title>Fashion brands in one searchable solution</template>
        <template #description>
          Laravel and Vue Directory & Job Board Theme
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
                alt="Laravel and Vue Directory & Job Board Theme"
              />

              <NuxtLink to="/stores">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>
                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Find stores</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    Laravel and Vue Directory & Job Board Theme
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
                alt="Laravel and Vue Directory & Job Board Theme"
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
                    Nuxt 3 Directory & Job Board Theme
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
                alt="Laravel and Vue Directory & Job Board Theme"
              />

              <NuxtLink to="/jobs">
                <div
                  class="bg-black/10 absolute top-0 left-0 w-full h-full rounded-lg"
                ></div>
                <div class="px-2 pt-8 absolute top-0 w-full">
                  <p class="text-white mySecondaryHeader">Jobs in UAE</p>
                  <p
                    class="myPrimaryParagraph text-white font-medium drop-shadow-sm"
                  >
                    Find the right job for you in the fashion industry in the
                    United Arab Emirates.
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
                alt="Laravel and Vue Directory & Job Board Theme"
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
                    Laravel and Vue Directory & Job Board Theme
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
        class="bg-red-50 lg:block hidden"
      >
        <template #title
          >Customize the design of Stores, Jobs and Posts the way you
          want</template
        >
        <template #description>
          Design stores, jobs or posts your way with our intuitive page builder.
          Customize layouts, colors, and fonts to achieve the perfect design.
          <br />
          Laravel, Vue and Nuxt Directory & Job Board Theme
        </template>
        <template #content>
          <div class="w-full relative">
            <img
              class="top-0 left-0 w-full object-cover rounded-lg"
              src="/images/home/edit_or_add_designs.jpg"
              alt="Laravel and Vue Directory & Job Board Theme"
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
        class="bg-gray-50 lg:block hidden"
      >
        <template #title
          >Share multiple links, suitable for everyone and fully free</template
        >
        <template #description>
          Add and manage multiple links to your landing page with minimal effort
          and reach the right people.
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
                    alt="Laravel and Vue Directory & Job Board Theme"
                  />
                </div>

                <p class="myQuaternaryHeader">Stella Hill</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Instagram
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Website
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Blog
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Contact
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
                    alt="Laravel and Vue Directory & Job Board Theme"
                  />
                </div>

                <p class="myQuaternaryHeader">Victoria Alvarez</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  YouTube
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  TikTok
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Instagram
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Contact
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
                    alt="Laravel and Vue Directory & Job Board Theme"
                  />
                </div>

                <p class="myQuaternaryHeader">Leilani Sanders</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Work
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Affiliate Links
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Daily Outfits
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Fashion Inspo
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
                    alt="Laravel and Vue Directory & Job Board Theme"
                  />
                </div>

                <p class="myQuaternaryHeader">Alice Howard</p>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Travel Blog
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Travel Tips
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  Inspiration
                </div>
                <div
                  class="mySecondaryButton w-full mt-4 bg-transparent text-myPrimaryDarkGrayColor text-sm bg-white hover:bg-white"
                >
                  About me
                </div>
              </div>
            </div>
          </div>
        </template>
      </FullWidthElement>
      <!-- Linktree # end -->

      <!-- FAQ # start -->
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50 lg:block hidden"
      >
        <template #title>Frequently asked questions</template>
        <template #description>
          Laravel and Vue Directory & Job Board Theme
        </template>
        <template #content>
          <div class="grid grid-cols-1 lg:gap-16 gap-24 lg:grid-cols-12">
            <dl class="divide-y divide-myPrimaryMediumGrayColor lg:col-span-6">
              <div
                v-for="faq in faqs"
                :key="faq.question"
              >
                <dt>
                  <div
                    @click="isOpen(faq.id)"
                    class="py-6 flex w-full items-center justify-between text-left myPrimaryParagraph cursor-pointer"
                  >
                    <span class="myPrimaryParagraph font-medium"
                      >{{ faq.question }}
                    </span>

                    <span class="ml-6 flex h-7 items-center">
                      <span
                        v-if="faq.id !== currentOpenId"
                        class="myMediumIcon material-symbols-outlined"
                      >
                        add
                      </span>
                      <span
                        v-else
                        class="myMediumIcon material-symbols-outlined"
                      >
                        remove
                      </span>
                    </span>
                  </div>
                </dt>
                <div
                  v-if="faq.id === currentOpenId"
                  class="mt-2 mb-2 pr-8 pb-6"
                >
                  <p class="myPrimaryParagraph">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </dl>
            <img
              class="w-full object-cover lg:col-span-6 rounded-lg"
              src="/images/home/frequently_asked_questions.jpg"
              alt="Laravel and Vue Directory & Job Board Theme"
            />
          </div>
        </template>
      </FullWidthElement>
      <!-- FAQ # end -->
    </GuestsLayout>
  </MainLayout>
</template>
