import { z } from "zod";

// in dev mode, no custom prefix, in order to properly load
const baseUrl = z
  .string()
  .regex(/\/.*/, "A prefix base url should start with a slash /")
  .default("/")
  .parse(process.env.BASE_URL);


export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: false },
  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    // 
    '@nuxtjs/plausible'
  ],
  experimental: {
    payloadExtraction: false
  },
  app: {
    baseURL: baseUrl,
    head: {
      meta: [{ name: "referrer", content: "no-referrer-when-downgrade" }],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: baseUrl,
    },
  },
  
})
