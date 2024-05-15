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
      src="/images/logo/logo.svg"
      alt="Logo"
    />
    + ØØØ2
  </NuxtLink>
</template>
