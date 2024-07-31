import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: ['~/plugins/firebase.js'],
  routeRules: {
    '/': { prerender: true },
    '/news': { ssr: true },
    '/news/**': { ssr: true },
    '/discussions': { ssr: true },
    '/discussions/**': { ssr: true },
    '/profile': { ssr: false }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  devtools: { enabled: true },
  modules: [
    
    '@vueuse/nuxt',
    'nuxt-primevue',
    'nuxt-tiptap-editor',
    '@nuxt/ui'
  ],
  tiptap: {
    prefix: 'Tiptap'
  },
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
    components: {
      exclude: ['Editor', 'Chart']
    }
  },
  tailwindcss: {
    configPath: './tailwind.config.js'
  }
});

