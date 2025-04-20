import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
