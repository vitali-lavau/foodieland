// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts', 'nuxt-lucide-icons'],
    css: ['@/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/abstracts/variables" as *; @use "@/assets/scss/abstracts/mixins" as *; @use "@/assets/scss/abstracts/functions" as *;`
                }
            }
        }
    }
})