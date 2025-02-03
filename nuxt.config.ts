// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', '@vueuse/nuxt',
  ],
  css: [
    "~/assets/styles/main.scss",
  ],
  app: {
    head: {
      title: "Colin Sinclair-Smith",
      meta: [
        {
          name: "description",
          content:
            "Portfolio website of Colin Sinclair-Smith in Blade Runner 2049 style.",
        },
      ],
    },
  },
})
