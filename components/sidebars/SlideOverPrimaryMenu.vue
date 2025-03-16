<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

// props
const props = defineProps({
  open: {
    required: false,
  },
});

const route = useRoute();
const routeName = route.name;

const emit = defineEmits(['primaryMenuSlideOverButton']);

// button
const primaryMenuSlideOverButton = function () {
  emit('primaryMenuSlideOverButton');
};

const navigation = [
  {
    label: 'Listings',
    route: {
      name: 'listings',
      parameters: [],
    },
  },
  {
    label: 'Jobs',
    route: {
      name: 'jobs',
      parameters: [],
    },
  },
  {
    label: 'Posts',
    route: {
      name: 'Posts',
      parameters: [],
    },
  },
  {
    label: 'Professional',
    route: {
      name: 'professional',
      parameters: [],
    },
  },
  {
    label: 'Contact us',
    route: {
      name: 'professional',
      parameters: [],
    },
  },
  {
    label: 'Resources',

    children: [
      {
        label: 'Professional',
        route: {
          name: 'professional',
          parameters: [],
        },
      },
    ],
  },
];
</script>

<template>
  <teleport to="body">
    <TransitionRoot
      as="template"
      :show="open"
    >
      <Dialog
        as="div"
        class="relative z-40"
        @click="$emit('primaryMenuSlideOverButton')"
      >
        <div class="fixed inset-0" />

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-200 sm:duration-200"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-200 sm:duration-200"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white pt-3 pb-6 shadow-xl"
                  >
                    <div class="px-4 sm:px-6">
                      <div class="flex items-center justify-between mb-4">
                        <DialogTitle
                          class="myPrimaryParagraph text-base rounded w-full pt-4 font-medium"
                        >
                          Main Menu
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="h-10 w-10 cursor-pointer rounded-full flex items-center border-none justify-center bg-gray-50 aspect-square hover:bg-myPrimaryLinkColor hover:text-white focus-visible:ring-0"
                            @click="$emit('primaryMenuSlideOverButton')"
                          >
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="relative mt-0 flex-1 px-4 sm:px-6">
                      <!-- Replace with content -->
                      <nav class="flex flex-1 flex-col">
                        <ul
                          role="list"
                          class="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul
                              role="list"
                              class="space-y-2"
                            >
                              <li
                                v-for="item in navigation"
                                :key="item.label"
                              >
                                <NuxtLink
                                  :to="item.route && `/${item.route.name}`"
                                  class="text-myPrimaryDarkGrayColor"
                                  :class="{
                                    'text-myPrimaryLinkColor':
                                      routeName === item.route?.name,
                                  }"
                                >
                                  <div
                                    class="block w-full py-3 pl-3 pr-1 hover:bg-myPrimaryLightGrayColor rounded-md"
                                    :class="[
                                      item.active
                                        ? 'bg-myPrimaryLightGrayColor rounded-md'
                                        : '',
                                    ]"
                                    v-if="!item.children"
                                  >
                                    {{ item.label }}
                                  </div>
                                </NuxtLink>

                                <Disclosure
                                  as="div"
                                  v-if="item.children"
                                  v-slot="{ open }"
                                >
                                  <DisclosureButton
                                    :class="[
                                      item.active
                                        ? 'hover:bg-myPrimaryLightGrayColor'
                                        : '',
                                      'flex items-center justify-between w-full text-left gap-x-3 py-3 pl-3 pr-1 rounded-md',
                                    ]"
                                  >
                                    {{ item.label }}

                                    <template v-if="open">
                                      <span class="material-symbols-outlined">
                                        remove
                                      </span>
                                    </template>
                                    <template v-if="!open">
                                      <span class="material-symbols-outlined">
                                        add
                                      </span>
                                    </template>
                                  </DisclosureButton>

                                  <DisclosurePanel
                                    as="ul"
                                    class="mt-1 mb-1 px-2 space-y-1"
                                  >
                                    <li
                                      v-for="subItem in item.children"
                                      :key="subItem.label"
                                    >
                                      <DisclosureButton
                                        class="block w-full hover:bg-myPrimaryLightGrayColor rounded-md text-left"
                                        :class="[
                                          subItem.active
                                            ? 'bg-myPrimaryLightGrayColor rounded-md'
                                            : '',
                                        ]"
                                      >
                                        <NuxtLink
                                          :to="
                                            subItem.route &&
                                            `/${subItem.route.name}`
                                          "
                                          class="text-myPrimaryDarkGrayColor"
                                          :class="{
                                            'text-myPrimaryLinkColor':
                                              routeName === subItem.route?.name,
                                          }"
                                        >
                                          <div class="block py-3 pl-3 pr-1">
                                            {{ subItem.label }}
                                          </div>
                                        </NuxtLink>
                                      </DisclosureButton>
                                    </li>
                                  </DisclosurePanel>
                                </Disclosure>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                      <!-- End replace -->
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </teleport>
</template>
