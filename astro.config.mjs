import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindv4 from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://scaleetecnologia.vercel.app',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindv4()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    ssr: {
      noExternal: ['lucide-react', 'motion', 'ogl'],
    },
  },
});
