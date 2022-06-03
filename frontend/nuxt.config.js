export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  env: {
    PRODUCTION_URL:
      process.env.PRODUCTION_URL || "https://songbird-backend.onrender.com",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  generate: {
    fallback: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/dotenv",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/logged-in",
    },
    strategies: {
      auth0: {
        domain: "dev-7g4awxij.us.auth0.com",
        clientId: "d41Q0WOQujXeyYA8MckBQp984IoPhiAC",
        logoutRedirectUri: "http://localhost:8000",
        // audience: "https:dev-7g4awxij.us.auth0.com/",
      },
    },
  },

  // router: {
  //   middleware: ["auth"],
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  },
  server: {
    port: 8000,
  },
};
