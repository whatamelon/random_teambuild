// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover',
        },
        {
          name: 'author',
          content: 'denny',
        },
        {
          hid: 'type',
          name: 'type',
          content: 'website',
        },
        {
          hid: 'format-detection',
          name: 'format-detection',
          property: 'format-detection',
          content: 'telephone=no',
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          property: 'og:locale',
          content: 'ko_KR',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          as: 'style',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  devServer: {
    port: 8010,
    host: `http://${process.env.IP}`,
  },
  experimental: {
    componentIslands: true,
  },
})
