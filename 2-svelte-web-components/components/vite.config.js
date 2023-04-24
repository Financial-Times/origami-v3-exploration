import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/wc.js",
      name: 'svelte wc',
      // the proper extensions will be added
      fileName: 'o-svelte-wc',
      
    }
  },
  prebundleSvelteLibraries: true,
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
