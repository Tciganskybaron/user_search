import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    unfonts({
      google: {
        families: [{ name: 'Montserrat', styles: 'wght@400;600' }],
      },
    }),
  ],
  resolve: {
    alias: {
      '~app': path.resolve('src/app'),
      '~entities': path.resolve('src/entities'),
      '~features': path.resolve('src/features'),
      '~pages': path.resolve('src/pages'),
      '~shared': path.resolve('src/shared'),
      '~widgets': path.resolve('src/widgets'),
    },
  },
});
