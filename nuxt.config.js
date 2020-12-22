export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-kufu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      {src: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'},
      {src: 'https://unpkg.com/axios/dist/axios.min.js'},
      {src: '/js/moment.js'},
      {src: '/js/main.js'},
      {src: '/js/scroll.js'},
    ],
    modules: ['@nuxtjs/axios'],
    axios: {
      
      // extra config e.g
      // BaseURL: 'https://link-to-API'
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css:  [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
