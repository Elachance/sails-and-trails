import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['cruise', 'trail', 'general']),
    cruiseLine: z.enum(['disney', 'royal-caribbean', 'other']).optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Bailey Miller'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
