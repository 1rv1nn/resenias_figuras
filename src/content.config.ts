import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resenas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/resenas' }),
  schema: z.object({
    titulo: z.string(),
    figura: z.string(),
    serie: z.string(),
    puntuacion: z.number().min(1).max(10),
    fecha: z.date(),
    imagen: z.string().optional(),
    descripcion: z.string(),
  }),
});

export const collections = { resenas };