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
        <p class="myPrimaryParagraph font-medium text-xl mb-4">About</p>
        <p class="myPrimaryParagraph lg:text-sm text-xs">
          test 4 - Laravel, Vue, and Nuxt, a Page Builder, Listing Directory,
          Blog, and Job Board Theme.
          <br />
          This platform is created using open-source software. Check out the
          <a
            href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
            target="_blank"
            >GitHub repository
          </a>
          for more information.
        </p>
      </div>
      <div class="lg:w-2/6 w-full mb-6">
        <p class="myPrimaryParagraph font-medium text-xl mb-4">Links</p>
        <div class="flex justify-center flex-col items-left myPrimaryGap mb-6">
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme"
              target="_blank"
            >
              GitHub Repository
            </a>
          </p>
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://www.linkedin.com/company/myissue"
              target="_blank"
            >
              LinkedIn MyISSUE
            </a>
          </p>
          <p class="myPrimaryParagraph lg:text-sm text-xs">
            <a
              href="https://www.linkedin.com/in/qaiswardag"
              target="_blank"
            >
              LinkedIn Qais Wardag
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
