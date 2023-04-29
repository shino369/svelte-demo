import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      name: 'svelteDemo',
      entry: resolve(__dirname, 'index.html'),
      formats: [ "iife"],
    },
    rollupOptions: {
      // external: ['lodash', 'moment', 'localforage'] // any external library you do not want to include add to here
    }
  },
  define: {
    'process.env': {}
  }
})
