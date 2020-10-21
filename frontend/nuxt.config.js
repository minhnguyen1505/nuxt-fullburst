// let dynamicRoutes = () => {
//   return new Promise(resolve => {
//     resolve(blogs.map(blog => `blog/${blog.id}`))
//   })
// }

export default {
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css', '~assets/global.scss'],

  generate: {
    interval: 2000,
    // routes: dynamicRoutes
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui', '@/plugins/axios.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/composition-api', '@nuxt/typescript-build'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {
    transpile: ['ant-design-vue', 'vuex-composition-helpers'],
  },
}
