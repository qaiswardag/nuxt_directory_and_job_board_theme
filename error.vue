<template>
  <div class="relative isolate min-h-screen">
    <img
      src="/public/images//home/pink-lady-high-resolution.jpg"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div class="bg-black/20 absolute top-0 left-0 w-full h-full"></div>
    <div
      class="lg:max-w-3xl flex flex-col gap-2 justify-center items-center mx-auto"
    >
      <div
        class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 z-20"
      >
        <div>
          <p class="text-base font-normal leading-8 text-white">
            {{ error.statusCode }}
          </p>
          <h1
            class="mt-4 text-3xl font-medium tracking-tight text-white sm:text-5xl"
          >
            Oops, something went wrong!
          </h1>
          <p
            class="myPrimaryParagraph text-lg text-white drop-shadow font-medium mt-8 leading-6"
          >
            {{ error.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Object,
  },
};
</script>

<style scoped>
.error-page {
  text-align: center;
  margin: 50px auto;
}
</style>
