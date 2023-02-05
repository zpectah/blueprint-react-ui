import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-dts';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const name = '@iogart-ds-boilerplate/foundation';
const outDir = '../../dist/foundation/';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir,
    lib: {
      name,
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
  css: {
    modules: {
      generateScopedName: 'iogart-[local]',
    },
  },
  plugins: [
    react(),
    dts(),
    /**
     * This plugin automatically handles "injecting" <style> to view with component
     * more: https://www.npmjs.com/package/vite-plugin-css-injected-by-js
     */
    cssInjectedByJsPlugin({}),
  ],
});
