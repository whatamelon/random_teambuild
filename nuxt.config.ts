// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Random Team',
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
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `Random Team`,
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Make Random Team for your own team game`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Make Random Team for your own team game`,
        },
        {
          hid: 'url',
          name: 'url',
          content: ``,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: ``,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: `Random Team`,
        },
        {
          name: 'app-mobile-web-app-title',
          content: `Random Team`,
        },
        {
          name: 'application-name',
          content: `Random Team`,
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
          rel: 'canonical',
          href: ``,
        },
        { rel: 'icon', type: 'image/png', href: `` },
        {
          rel: 'stylesheet',
          as: 'style',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
        {
          rel: 'stylesheet',
          as: 'style',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css',
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
