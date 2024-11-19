<script setup>
import CookieConsentModal from './components/modals/CookieConsentModal.vue';
import { getCookie } from './helpers/get-cookie';

const documentDOM = ref(null);
const checkACookieExists = ref(null);

const showCookieModal = ref(false);

const handleCookieModal = function () {
  showCookieModal.value = false;
};

onMounted(async () => {
  documentDOM.value = window.document;

  // cookie # start
  checkACookieExists.value = getCookie(documentDOM, 'cookieConsent');

  await nextTick(() => {
    if (checkACookieExists.value) {
      showCookieModal.value = false;
    } else {
      showCookieModal.value = true;
    }
  });
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <CookieConsentModal
        :show="showCookieModal"
        @handleCookieModal="handleCookieModal"
      ></CookieConsentModal>
    </NuxtLayout>
  </div>
</template>
