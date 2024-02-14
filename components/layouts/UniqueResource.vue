<script setup>
const onlyForCurrentTeam = false;

const goToSingleStoreFromInSale = function (
  routeName,
  storeTeamSlug,
  storeSlug,
  storeId
) {
  return;
  router.get(route(routeName, [storeTeamSlug, storeSlug, storeId]));
};
</script>

<template>
  <div class="my-0 py-0"></div>
  hiii 2
</template>
