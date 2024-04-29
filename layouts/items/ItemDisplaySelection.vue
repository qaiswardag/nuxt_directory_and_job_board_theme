<script setup>
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
  <template v-if="list">
    <div class="flex flex-wrap gap-2 items-center justify-left py-2 text-xs">
      <button
        @click="
          listSelected.some((cat) => cat.id === item.id)
            ? handleRemoveItem(item)
            : handleSelectItem({
                name: item.name,
                id: item.id,
              })
        "
        v-for="(item, index) in list"
        :key="item.id"
        :class="[
          {
            'font-medium ': listSelected.some((cat) => cat.id === item.id),
          },
          {
            '': listSelected.some((cat) => cat.id !== item.id),
          },
        ]"
        :disabled="listSelected.name === item.name"
      >
        <span class="flex items-center justify-start gap-1">
          <span>
            <span> {{ item.name }} </span>
            <template v-if="list.length >= 2 && index < list.length - 1">
              <span>, </span>
            </template>
          </span>
        </span>
      </button>
    </div>
  </template>
</template>
