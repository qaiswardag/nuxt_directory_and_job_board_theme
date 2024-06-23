import { asSitemapUrl, defineSitemapEventHandler } from '#imports';

export default defineSitemapEventHandler(async () => {
  const response: any = await $fetch<ReturnType<typeof asSitemapUrl>>(
    'https://www.demo-admin.myissue.dk/api/guest/stores/indexx'
  );

  console.log(`response: ${response}`);
  // Check if the response has a data property
  const posts = response && response.posts;

  return [...posts];
});
