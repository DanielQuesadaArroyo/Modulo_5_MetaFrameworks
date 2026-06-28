import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

export default defineConfig({
  plugins: [tanstackStart({}), react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      },
      '/images': {
        target: 'http://localhost:3001',
      },
    },
  },
});
