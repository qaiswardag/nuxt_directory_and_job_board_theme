import { version } from './package.json';

export default defineNuxtConfig({
  // Add a trailing slash to each route
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  site: {
    url: 'https://www.admin.myissue.io',
  },

  devServer: {
    port: 4000,
  },

  runtimeConfig: {
    public: {
      LARAVEL_APP_URL_PRODUCTION: process.env.LARAVEL_APP_URL_PRODUCTION,
      LARAVEL_APP_URL: process.env.LARAVEL_APP_URL,
      APP_URL: process.env.APP_URL,
      APP_NAME: process.env.APP_NAME,
      APP_VERSION: version,
    },
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@pinia/nuxt', 'nuxt-simple-robots'],

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GTAG}`,
        },
        `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-M34SGDHL');`,
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap',
        },
        // favicon # start
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
        // favicon # end
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-11-19',
});
