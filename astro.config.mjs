// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://1rv1nn.github.io',
  base: 'resenias_figuras',
  vite: {
    plugins: [tailwindcss()],
  },
});