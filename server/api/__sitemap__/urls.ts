export default defineSitemapEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig();

  const mainApiRoute = runtimeConfig.public.LARAVEL_APP_URL + '/';

  const listingRoute = mainApiRoute + 'api/guest/stores/index-search-engines';
  const postsRoute = mainApiRoute + 'api/guest/posts/index-search-engines';
  const jobsRoute = mainApiRoute + 'api/guest/jobs/index-search-engines';

  async function generateUrls(route: string, posttype: string) {
    const ListingData: any = await $fetch(route);
    return (ListingData?.posts || [])?.map((item: any) => {
      return {
        loc: `${item?.team?.slug}/${posttype}/${item?.slug}/view/${item.id}`,
        lastmod: item.updated_at,
      };
    });
  }

  const listing = await generateUrls(listingRoute, 'listing');
  const posts = await generateUrls(postsRoute, 'post');
  const jobs = await generateUrls(jobsRoute, 'job');

  return [...listing, ...posts, ...jobs];
});
