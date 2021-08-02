export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tmc-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/css/font-face.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/bootstrap-4.1/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/font-awesome-4.7/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/font-awesome-5/css/fontawesome-all.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/mdi-font/css/material-design-iconic-font.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/theme.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/animsition/animsition.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/wow/animate.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/wow/animate.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/css-hamburgers/hamburgers.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/slick/slick.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/select2/select2.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/vendor/perfect-scrollbar/perfect-scrollbar.css',
      },
    ],
    script: [
      {
        src: '/vendor/jquery-3.2.1.min.js',
        body: true,
      },
      {
        src: '/vendor/bootstrap-4.1/popper.min.js',
        body: true,
      },
      {
        src: '/vendor/bootstrap-4.1/bootstrap.min.js',
        body: true,
      },
      {
        src: '/vendor/slick/slick.min.js',
        body: true,
      },
      {
        src: '/vendor/wow/wow.min.js',
        body: true,
      },
      {
        src: '/vendor/animsition/animsition.min.js',
        body: true,
      },
      {
        src: '/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js',
        body: true,
      },
      {
        src: '/vendor/counter-up/jquery.waypoints.min.js',
        body: true,
      },
      {
        src: '/vendor/counter-up/jquery.counterup.min.js',
        body: true,
      },
      {
        src: '/vendor/circle-progress/circle-progress.min.js',
        body: true,
      },
      {
        src: '/vendor/perfect-scrollbar/perfect-scrollbar.js',
        body: true,
      },
      {
        src: '/vendor/chartjs/Chart.bundle.min.js',
        body: true,
      },
      {
        src: '/vendor/select2/select2.min.js',
        body: true,
      },
      {
        src: '/js/main.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    // '@/static/vendor/bootstrap-4.1/bootstrap.min.css',
    // '@/static/css/font-face.css',
    // '@/static/vendor/font-awesome-4.7/css/font-awesome.min.css',
    // '@/static/vendor/font-awesome-5/css/fontawesome-all.min.css',
    // '@/static/vendor/mdi-font/css/material-design-iconic-font.min.css',
    // '@/static/css/theme.css',
    // '@/static/vendor/animsition/animsition.min.css',
    // '@/static/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css',
    // '@/static/vendor/wow/animate.css',
    // '@/static/vendor/css-hamburgers/hamburgers.min.css',
    // '@/static/vendor/slick/slick.css',
    // '@/static/vendor/select2/select2.min.css',
    // '@/static/vendor/perfect-scrollbar/perfect-scrollbar.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  toast: {
    position: 'bottom-right',
    duration: 6000,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: '~/components/LoadingIcon.vue',
}
