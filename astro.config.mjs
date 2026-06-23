// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config — 部署 Vercel（靜態），root 路徑
export default defineConfig({
  site: 'https://imhere-landing.vercel.app',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
