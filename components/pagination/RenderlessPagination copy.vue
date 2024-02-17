<script setup>
const emit = defineEmits(['pagination-change-page']);

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  limit: {
    type: Number,
    default: 0,
  },
  keepLength: {
    type: Boolean,
    default: false,
  },
});

const isApiResource = computed(() => {
  return !!props.data.meta;
});
//
//
//
//
const currentPage = computed(() => {
  return isApiResource
    ? props.data.meta.current_page
    : props.data.current_page ?? null;
});
const firstPageUrl = computed(() => {
  return (
    props.data.first_page_url ??
    props.data.meta?.first_page_url ??
    props.data.links?.first ??
    null
  );
});
const from = computed(() => {
  return isApiResource ? props.data.meta.from : props.data.from ?? null;
});
const lastPage = computed(() => {
  return isApiResource
    ? props.data.meta.last_page
    : props.data.last_page ?? null;
});
const lastPageUrl = computed(() => {
  return (
    props.data.last_page_url ??
    props.data.meta?.last_page_url ??
    props.data.links?.last ??
    null
  );
});
const nextPageUrl = computed(() => {
  return (
    props.data.next_page_url ??
    props.data.meta?.next_page_url ??
    props.data.links?.next ??
    null
  );
});
const perPage = computed(() => {
  return isApiResource ? props.data.meta.per_page : props.data.per_page ?? null;
});
const prevPageUrl = computed(() => {
  return (
    props.data.prev_page_url ??
    props.data.meta?.prev_page_url ??
    props.data.links?.prev ??
    null
  );
});

const to = computed(() => {
  return isApiResource ? props.data.meta.to : props.data.to ?? null;
});
const total = computed(() => {
  return isApiResource ? props.data.meta.total : props.data.total ?? null;
});
const pageRange = computed(() => {
  if (props.limit === -1) {
    return 0;
  }

  if (props.limit === 0) {
    return lastPage;
  }

  var current = currentPage;
  var size = keepLength;
  var last = lastPage;
  var delta = props.limit;
  var left = current - delta;
  var right = current + delta;
  var leftPad = (delta + 2) * 2;
  var rightPad = (delta + 2) * 2 - 1;
  var range = [];
  var pages = [];
  var l;

  for (var i = 1; i <= last; i++) {
    // Item is first or last
    if (i === 1 || i === last) {
      range.push(i);
    }
    // Item is within the delta
    else if (i >= left && i <= right) {
      range.push(i);
    }
    // Item is before max left padding
    else if (size && i < leftPad && current < leftPad - 2) {
      range.push(i);
    }
    // Item is after max right padding
    else if (size && i > last - rightPad && current > last - rightPad + 2) {
      range.push(i);
    }
  }

  range.forEach(function (i) {
    if (l) {
      if (i - l === 2) {
        pages.push(l + 1);
      } else if (i - l !== 1) {
        pages.push('...');
      }
    }
    pages.push(i);
    l = i;
  });

  return pages;
});

//
//
//
//
//
//
//
//

const previousPage = function () {
  selectPage(currentPage - 1);
};

const nextPage = function () {
  selectPage(currentPage + 1);
};

const selectPage = function (page) {
  if (page === '...' || page === currentPage) {
    return;
  }

  emit('pagination-change-page', page);
};

// const render = function () {
//   return this.$slots.default({
//     data: props.data,
//     limit: props.limit,
//     computed: {
//       isApiResource: isApiResource.value, // Access computed value
//       currentPage: currentPage.value, // Access computed value
//       firstPageUrl: firstPageUrl.value, // Access computed value
//       from: from.value, // Access computed value
//       lastPage: lastPage.value, // Access computed value
//       lastPageUrl: lastPageUrl.value, // Access computed value
//       nextPageUrl: nextPageUrl.value, // Access computed value
//       perPage: perPage.value, // Access computed value
//       prevPageUrl: prevPageUrl.value, // Access computed value
//       to: to.value, // Access computed value
//       total: total.value, // Access computed value
//       pageRange: pageRange.value, // Access computed value
//     },

//     nextButtonEvents: {
//       click: (e) => {
//         e.preventDefault();
//         nextPage();
//       },
//     },
//     pageButtonEvents: (page) => ({
//       click: (e) => {
//         e.preventDefault();
//         selectPage(page);
//       },
//     }),
//   });
// };
//
</script>

<template>Hiiiiiii</template>
