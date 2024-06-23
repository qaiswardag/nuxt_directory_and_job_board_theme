import { asSitemapUrl, defineSitemapEventHandler } from '#imports';

export default defineSitemapEventHandler(async () => {
  // const pages: any = await $fetch<{ pages: { slug: string; title: string } }>(
  //   'posts.json'
  // );

  const pages = [
    {
      slug: '',
      title: 'Home',
    },
    {
      slug: 'listings',
      title: 'Listings',
      images: ['./public/images/home/pink-lady-high-resolution.jpg'],
    },
    {
      slug: 'jobs',
      title: 'Jobs',
    },
    {
      slug: 'posts',
      title: 'Posts',
    },
  ];

  return [
    // map URLS as needed
    ...pages.map((p: any) =>
      asSitemapUrl({
        loc: p.slug,
      })
    ),
  ];
});
