<script setup>
import ApplicationLogo from '../components/logos/ApplicationLogo.vue';
</script>

<template>
  <footer class="w-full mx-auto bg-gray-100 pt-8">
    <div
      class="lg:w-6/6 px-6 py-4 flex justify-between lg:flex-row flex-col lg:gap-32 mx-auto"
    >
      <div class="lg:w-1/6 w-full mb-6">
        <ApplicationLogo></ApplicationLogo>
      </div>
      <div class="lg:w-4/6 w-full mb-6">
        <p class="myPrimaryParagraph font-medium lg:text-xl text-xs mb-4">
          About
        </p>
        <p class="myPrimaryParagraph lg:text-sm text-xs">
          Laravel, Vue, and Nuxt, a Page Builder, Listing Directory, Blog, and
          Job Board Theme. Allow your users to build listings, jobs or posts
          with the intuitive Page Builder.
        </p>
      </div>
      <div class="lg:w-2/6 w-full mb-6">
        <p class="myPrimaryParagraph font-medium lg:text-xl text-xs mb-4">
          Links
        </p>
        <div class="flex justify-center flex-col items-left myPrimaryGap mb-6">
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://www.linkedin.com/in/qaiswardag"
              target="_blank"
            >
              Qais Wardag
            </a>
          </p>
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://www.linkedin.com/company/myissue"
              target="_blank"
            >
              LinkedIn Page
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
