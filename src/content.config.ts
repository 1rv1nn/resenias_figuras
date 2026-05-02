// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://1rv1nn.github.io',
  base: 'blog-marvel-legends',
  vite: {
    plugins: [tailwindcss()],
  },
});