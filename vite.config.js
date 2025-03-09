import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), {
      name: 'ts-plugin',
      enforce: 'pre',
      config: () => ({
        plugins: [
          // 关闭 ts-plugin
          '@typescript-eslint/eslint-plugin',
          '@typescript-eslint/parser',
        ].map((plugin) => ({ name: plugin, enabled: false })),
      }),
    },
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://9857731ku9.zicp.fun',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  esbuild: {
    // 关闭 ESLint 校验
    logLevel: 'error',
  },
  // 关闭 TypeScript 校验
  build: {
    sourcemap: false,
    minify: false,
    // 关闭 TypeScript 校验
    esbuildOptions: {
      tsconfig: null,
    },
  },
})
