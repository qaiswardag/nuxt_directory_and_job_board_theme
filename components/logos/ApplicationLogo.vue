<script setup>
const runtimeConfig = useRuntimeConfig();

const getAppUrl = function (path) {
  return runtimeConfig.public.LARAVEL_APP_URL + '/' + path;
};
</script>

<template>
  <NuxtLink to="/">
    <img
      class="lg:w-28 w-24"
      :src="getAppUrl('logo/myself_text_logo_black.svg')"
      alt="Logo"
    />
  </NuxtLink>
</template>
