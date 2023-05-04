import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
      '@': resolve(__dirname, './playground'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return `o-lit-wc.mjs`;
        if (format === 'cjs') return `o-lit-wc.cjs`;
        return `o-lit-wc.${format}.js`;
      },
    },
  },
});