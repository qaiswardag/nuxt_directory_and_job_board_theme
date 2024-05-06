<script setup>
import { ref } from 'vue';
import storeSubscriptionPrices from '../utils/pricing/store-subscription-prices';
import jobPrices from '../utils/pricing/job-prices';
import MainLayout from '../layouts/MainLayout.vue';
import GuestsLayout from '../layouts/GuestsLayout.vue';
import FullWidthElement from '../components/layouts/FullWidthElement.vue';
import PageHeader from '../components/headers/PageHeader.vue';

const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};

const goToPostStore = function () {
  let urlPath;

  if (runtimeConfig.public.APP_ENV === 'local') {
    urlPath = runtimeConfig.public.LARAVEL_APP_URL;
  } else {
    urlPath = runtimeConfig.public.LARAVEL_APP_URL_PRODUCTION;
  }

  window.location.href = urlPath;
};

const goToPostJob = function () {
  let urlPath;

  if (runtimeConfig.public.APP_ENV === 'local') {
    urlPath = runtimeConfig.public.LARAVEL_APP_URL;
  } else {
    urlPath = runtimeConfig.public.LARAVEL_APP_URL_PRODUCTION;
  }

  window.location.href = urlPath;
};

useSeoMeta({
  title: `${runtimeConfig.public.APP_NAME} | Professional`,
  ogTitle: `${runtimeConfig.public.APP_NAME} | Professional`,
  description:
    'Download Laravel, Vue, and Nuxt Theme for free, featuring a powerful Page Builder, Listing Directory, Blog, and Job Board.',
  ogDescription:
    'Download Laravel, Vue, and Nuxt Theme for free, featuring a powerful Page Builder, Listing Directory, Blog, and Job Board.',
  ogImage: () => {
    return getAppUrl('brand-images/home.jpg');
  },
});
</script>

<template>
  <MainLayout>
    <GuestsLayout>
      <template #header>
        <PageHeader
          title="Professional"
          class="bg-red-50"
        ></PageHeader>
      </template>

      <FullWidthElement
        :descriptionArea="true"
        class="bg-red-50"
      >
        <template #title>Pricing plans for all sizes</template>
        <template #description>
          Here is an example of how the pricing page could look. All prices are
          linked to Stripe, using product identifiers. Create your Stripe
          account and update the env file with Stripe token and secrets.
        </template>
        <template #content>
          <div
            class="isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-3"
          >
            <div
              v-for="product in storeSubscriptionPrices"
              :key="product.id"
              :class="[
                product.mostPopular
                  ? 'border-2 border-myPrimaryLinkColor'
                  : 'border-2 border-gray-200',
                'rounded-3xl p-8 hover:border-2 hover:border-myPrimaryLinkColor relative',
              ]"
            >
              <div
                v-html="product.title"
                class="text-xs font-medium tracking-tight"
              ></div>
              <h3
                :id="product.id"
                :class="[
                  product.mostPopular
                    ? 'text-myPrimaryLinkColor'
                    : 'text-myPrimaryDarkGrayColor',
                  'text-lg font-medium leading-8',
                ]"
              >
                {{ product.name }}
              </h3>
              <p class="mt-4 text-sm leading-6 text-gray-600">
                {{ product.description }}
              </p>
              <p class="mt-6 flex items-baseline gap-x-1">
                <span
                  class="text-4xl font-medium tracking-tight text-gray-900"
                  >{{ product.price }}</span
                >
                <span class="text-sm font-medium leading-6 text-gray-600">{{
                  product.frequencies
                }}</span>
              </p>
              <p
                class="block text-sm leading-6 font-medium text-gray-600 italic mt-1"
              >
                Total ${{ product.totalPrice }}
              </p>
              <p class="block text-[12px] leading-6 text-gray-600 italic mt-1">
                {{ product.billed }}
              </p>

              <ul
                role="list"
                class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                <li
                  v-for="feature in product.features"
                  :key="feature"
                  class="flex gap-x-3"
                >
                  <span class="myMediumIcon material-symbols-outlined">
                    check
                  </span>
                  {{ feature }}
                </li>
              </ul>
              <button
                @click="goToPostStore"
                class="myPrimaryButton w-full mt-12"
              >
                Subscribe
              </button>
            </div>
          </div>
        </template>
      </FullWidthElement>
      <FullWidthElement
        :descriptionArea="true"
        class="bg-gray-50"
      >
        <template #title>Pricing for jobs</template>
        <template #description>
          Here is an example of how the pricing page could look. All prices are
          linked to Stripe, using product identifiers. Create your Stripe
          account and update the env file with Stripe token and secrets.
        </template>
        <template #content>
          <div
            v-for="product in jobPrices"
            :key="product.id"
            :class="[
              product.mostPopular
                ? 'border-2 border-myPrimaryLinkColor'
                : 'border-2 border-gray-200',
              'rounded-3xl p-8 hover:border-2 hover:border-myPrimaryLinkColor relative',
            ]"
          >
            <div class="flex lg:flex-row flex-col w-full">
              <div class="lg:w-2/4">
                <div
                  v-html="product.title"
                  class="text-xs font-medium tracking-tight"
                ></div>
                <h3
                  :id="product.id"
                  :class="[
                    product.mostPopular
                      ? 'text-myPrimaryLinkColor'
                      : 'text-myPrimaryDarkGrayColor',
                    'text-lg font-medium leading-8',
                  ]"
                >
                  {{ product.name }}
                </h3>
                <p class="mt-4 text-sm leading-6 text-gray-600">
                  {{ product.description }}
                </p>
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span
                    class="text-4xl font-medium tracking-tight text-gray-900"
                    >{{ product.price }}</span
                  >
                </p>
                <p
                  class="block text-sm leading-6 font-medium text-gray-600 italic mt-1"
                >
                  Total ${{ product.totalPrice }}
                </p>
                <ul
                  role="list"
                  class="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  <li
                    v-for="feature in product.features"
                    :key="feature"
                    class="flex gap-x-3"
                  >
                    <span class="myMediumIcon material-symbols-outlined">
                      check
                    </span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="lg:w-2/4 lg:self-center lg:mt-0 mt-12">
                <button
                  @click="goToPostJob"
                  class="myPrimaryButton w-full"
                >
                  {{ product.name }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </FullWidthElement>
      <FullWidthElement
        :descriptionArea="true"
        class="bg-red-50"
      >
        <template #title>Contact us</template>
        <template #description
          >Get in touch for customization or any questions.
        </template>
        <template #content>
          <p class="myPrimaryParagraph">
            If you have any questions or if you're looking for customization,
            feel free to connect with me on LinkedIn and send me a message.
          </p>
        </template>
      </FullWidthElement>
    </GuestsLayout>
  </MainLayout>
</template>
