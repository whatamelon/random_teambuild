import i18n from '@nuxtjs/i18n'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Play Team | 랜덤팀구성',
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
          content: `Play Team | 랜덤팀구성`,
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `Make Play Team for your own team game | 명단으로 랜덤하게 팀을 만들어요!`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `Make Random Team for your own team game | 명단으로 랜덤하게 팀을 만들어요!`,
        },
        {
          hid: 'url',
          name: 'url',
          content: `https://playteam.site`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `https://playteam.site`,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: `Play Team | 랜덤팀구성`,
        },
        {
          name: 'app-mobile-web-app-title',
          content: `Play Team | 랜덤팀구성`,
        },
        {
          name: 'application-name',
          content: `Play Team | 랜덤팀구성`,
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
          href: `https://playteam.site`,
        },
        { rel: 'icon', type: 'image/png', href: `/favicon.ico` },
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
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7933164638740144',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  i18n: {
    compilation: {
      strictMessage: false,
      escapeHtml: true,
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
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
