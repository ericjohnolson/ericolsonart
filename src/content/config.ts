import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // slug is reserved by Astro and generated from the filename — do not include here
    // date may arrive as a JS Date (YAML bare date) or string — coerce to string
    date: z.coerce.string().optional(),
    year: z.number().nullable().optional(),
    categories: z.array(z.string()).default([]),
    thumbnail: z.string().nullable().optional(),
    images: z.array(z.string()).default([]),
    excerpt: z.string().optional().default(''),
    order: z.number().optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // slug is reserved by Astro and generated from the filename — do not include here
    // date may arrive as a JS Date (YAML bare date) or string — coerce to string
    date: z.coerce.string().optional(),
    categories: z.array(z.string()).default([]),
    excerpt: z.string().optional().default(''),
  }),
});

export const collections = { projects, posts };
