// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  head: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap'
    }
  ],
  plugins: ['~/plugins/firebase.js'],
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/news': { ssr: true },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/news/**': { ssr:true },
    // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    '/discussions': { ssr: true },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/discussions/**': { ssr: true },
    // Admin dashboard renders only on client-side
    '/profile': { ssr: false },
    
  },
  router:{
    linkExactActiveClass: 'active'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-primevue',
    "nuxt-tiptap-editor",
    "@nuxtjs/google-fonts",
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
  }],
  ],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
    components:{
      exclude:["Editor","Chart"]
    }
},
  tailwindcss: {
    config: {
      darkMode: "class",
      content: [
        "presets/**/*.{js,vue,ts}"
      ],
      theme: {
        extend: {
            colors: {
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))'
            }
        }
      }
    }
  }

})