import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  },
  optimizeDeps: {
    include: ['vue-gtag-next']
  },
  base:"/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})