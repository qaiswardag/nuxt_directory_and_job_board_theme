<script setup>
import { useUserStore } from './store/user';
import CookieConsentModal from './components/modals/CookieConsentModal.vue';
import { getCookie } from './helpers/get-cookie';

const store = useUserStore();

const { fetchUser } = store;

const documentDOM = ref(null);
const xsrfToken = ref(null);
const checkACookieExists = ref(null);

const showCookieModal = ref(false);

const handleCookieModal = function () {
  showCookieModal.value = false;
};

onMounted(() => {
  documentDOM.value = window.document;

  // cookie # start
  checkACookieExists.value = getCookie(documentDOM, 'cookieConsent');

  if (checkACookieExists.value) {
    showCookieModal.value = false;
  } else {
    showCookieModal.value = true;
  }
  // cookie # end

  // fetch user # start
  // xsrfToken.value = getCookie(documentDOM, 'XSRF-TOKEN');
  // fetchUser();
  // fetch user # end
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
