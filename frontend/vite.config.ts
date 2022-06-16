import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'

import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'rollup-plugin-node-polyfills'

import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vue'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Fix global is not defined error
      define: {
        global: 'globalThis',
      },
      plugins: [
        // Without this, npm run dev will output Buffer or process is not defined error
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills() as Plugin],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@contracts': fileURLToPath(new URL('./contracts/', import.meta.url)),
    },
  },
})
