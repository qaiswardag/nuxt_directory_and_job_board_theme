<script setup>
import FooterGuests from '../components/footer/FooterGuests.vue';
import { ref } from 'vue';
</script>

<template>
  <div>
    <nav
      class="h-16 sticky top-0 z-30 flex flex-shrink-0 justify-between items-center bg-white border-b-2 border-gray-100"
    >
      This is navbar
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
