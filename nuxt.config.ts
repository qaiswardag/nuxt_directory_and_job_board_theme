// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Add a trailing slash to each route
  site: {
    url: 'https://www.myissue.io',
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
      APP_ENV: process.env.APP_ENV,
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@pinia/nuxt'],
  sitemap: {
    exclude: [],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

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
});
