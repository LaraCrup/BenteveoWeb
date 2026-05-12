// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ["~/assets/main.css", 'swiper/css',
    'swiper/css/effect-creative', 'animate.css'],
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/seo",
    'nuxt-anchorscroll',
    '@nuxt/fonts',
    'nuxt-swiper',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false,
    types: false,
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700, 900],
    }
  },
  icon: {
    size: '1rem',
    serverBundle: {
      collections: ['mingcute', 'mdi'],
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/primeflex@latest/primeflex.css'
        },
      ],
      script: [
        {
          src: 'https://player.vimeo.com/api/player.js',
          defer: true
        }
      ]
    }
  },
  plugins: [
    { src: '~/plugins/wow.client.js', mode: 'client' }
  ],
  site: {
    url: 'https://benteveo.com',
    name: 'Benteveo',
    description: 'Agencia de publicidad y comunicación que transforma ideas en acciones de marketing. Creamos contenidos, producimos video, gestionamos redes sociales y desarrollamos estrategias para potenciar marcas y organizaciones.',
    defaultLocale: 'es',
  },
  // Defaults para Schema.org (módulo nuxt-schema-org incluido en @nuxtjs/seo)
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Benteveo',
      url: 'https://benteveo.com',
      logo: 'https://benteveo.com/images/headerFooter/Logo-Benteveo.webp',
      sameAs: [
        'https://www.instagram.com/benteveocomunicacion/',
        'https://www.linkedin.com/company/benteveo-comunicacion/',
      ],
    },
  },
  // Sitemap: enumerar slugs dinámicos vía endpoint server
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
    autoLastmod: true,
  },
  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: ['img.youtube.com', 'i.vimeocdn.com'],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    }
  },
})