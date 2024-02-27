<script setup>
import { useUserStore } from './store/user';
import { getCookie } from './helpers/get-cookie';

const store = useUserStore();

const { fetchUser } = store;

const documentDOM = ref(null);
const xsrfToken = ref(null);

onMounted(() => {
  documentDOM.value = window.document;
  xsrfToken.value = getCookie(documentDOM, 'XSRF-TOKEN');
  fetchUser();
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
