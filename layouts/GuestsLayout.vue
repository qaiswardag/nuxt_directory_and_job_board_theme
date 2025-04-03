<script setup>
import FooterGuests from '../components/footer/FooterGuests.vue';
import GuestsNavbar from '../components/navbars/GuestsNavbar.vue';
import ApplicationLogo from '../components/logos/ApplicationLogo.vue';

import { ref } from 'vue';
</script>

<template>
  <div>
    <nav
      class="h-16 sticky top-0 z-30 flex flex-shrink-0 justify-between items-center bg-white border-b-2 border-gray-100"
    >
      <div
        class="flex flex-shrink-0 items-center lg:px-4 pl-2 pr-0 justify-between"
      >
        <ApplicationLogo></ApplicationLogo>
      </div>
      <GuestsNavbar></GuestsNavbar>
    </nav>
    <slot name="header" />

    <div class="mx-auto min-h-screen">
      <main>
        <slot />
      </main>
    </div>
  </div>
  <FooterGuests></FooterGuests>
</template>
