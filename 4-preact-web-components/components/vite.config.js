import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/wc.js",
      name: 'preact wc',
      // the proper extensions will be added
      fileName: 'o-preact-wc',

    }
  },
  plugins: [preact()],
})
