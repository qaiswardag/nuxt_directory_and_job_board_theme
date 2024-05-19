<script setup>
import { ref, computed } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

const emit = defineEmits(['selectItem', 'removeItem']);
const props = defineProps({
  nameOfList: {
    required: true,
  },
  list: {
    required: true,
  },
  listSelected: {
    required: true,
  },
  icon: {
    default: null,
    String,
    required: false,
  },
});

const handleSelectItem = function (selectedItem) {
  emit('selectItem', selectedItem, props.nameOfList);
};
const handleRemoveItem = function (selectedItem) {
  emit('removeItem', selectedItem, props.nameOfList);
};
</script>

<template>
  <!-- Selected # start -->
  <div>
    <Listbox>
      <div class="relative">
        <!-- Selected list # Start -->
        <ListboxButton
          class="py-2 min-h-[4.7rem] h-[4.7rem] pr-8 pl-2 text-xs w-full text-left border border-gray-300 shadow-sm rounded-md bg-white"
        >
          <button
            type="button"
            v-if="
              listSelected &&
              Array.isArray(listSelected) &&
              listSelected.length === 0
            "
            class="px-2 leading-10 font-normal text-gray-500 pb-0 mt-2 text-sm"
          >
            Select {{ nameOfList && nameOfList.toLowerCase() }}..
          </button>

          <ul
            class="overflow-x-scroll flex gap-2 mr-4 pb-1 min-w-full w-full max-w-12 mt-2"
          >
            <li
              @click.stop="
                handleRemoveItem({
                  name: singleSelection.name,
                  id: singleSelection.id,
                })
              "
              v-for="singleSelection in listSelected &&
              Array.isArray(listSelected) &&
              listSelected"
              :key="singleSelection.id"
              class="px-2 leading-10 bg-gray-200 rounded-full hover:bg-myPrimaryErrorColor hover:text-white my-0"
            >
              <div class="flex justify-center items-center gap-2">
                <template v-if="props.icon === 'interests'">
                  <span class="material-symbols-outlined text-[18px]">
                    interests
                  </span>
                </template>

                <template v-if="props.icon === 'GlobeAmericasIcon'">
                  <span class="material-symbols-outlined text-[18px]">
                    globe
                  </span>
                </template>

                <template v-if="props.icon === 'MapPinIcon'">
                  <span class="material-symbols-outlined text-[18px]">
                    location_on
                  </span>
                </template>

                <template v-if="props.icon === 'NewspaperIcon'">
                  <span class="material-symbols-outlined text-[18px]">
                    sell
                  </span>
                </template>
                <div class="w-max">
                  {{ singleSelection.name }}
                </div>
                <span class="material-symbols-outlined text-[18px]">
                  close
                </span>
              </div>
            </li>
          </ul>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <span class="material-symbols-outlined text-[18px]">
              unfold_more
            </span>
          </span>
        </ListboxButton>
        <!-- Selected list # End -->

        <!-- List of option # start -->
        <transition
          leave-active-class="transition duration-100 ease-in "
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white z-30 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-for="item in list && Array.isArray(list) && list"
              :key="item.id"
              :value="item"
            >
              <li
                v-if="
                  listSelected &&
                  Array.isArray(listSelected) &&
                  !listSelected.some((cat) => cat.id === item.id)
                "
                @click="
                  handleSelectItem({
                    name: item.name,
                    id: item.id,
                  })
                "
                class="cursor-pointer hover:bg-myPrimaryLinkColor hover:text-white text-myPrimaryDarkGrayColor relative select-none py-4 pl-3 pr-9"
              >
                <div class="flex justify-left items-center gap-2">
                  <template v-if="props.icon === 'interests'">
                    <span class="material-symbols-outlined text-[18px]">
                      interests
                    </span>
                  </template>

                  <template v-if="props.icon === 'GlobeAmericasIcon'">
                    <span class="material-symbols-outlined text-[18px]">
                      globe
                    </span>
                  </template>

                  <template v-if="props.icon === 'MapPinIcon'">
                    <span class="material-symbols-outlined text-[18px]">
                      location_on
                    </span>
                  </template>

                  <template v-if="props.icon === 'NewspaperIcon'">
                    <span class="material-symbols-outlined text-[18px]">
                      sell
                    </span>
                  </template>
                  {{ item.name }}
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
        <!-- List of option # start -->
      </div>
    </Listbox>
  </div>
  <!-- Selected # end -->
</template>
