import { defineCollection, z } from "astro:content";

const releases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    released: z.date().optional().nullable(),
    market: z.string().optional().default(""),
    type: z.string().optional().default("Release"),
    xfade: z.string().url().optional().or(z.literal("")).default(""),
    featured: z.boolean().optional().default(false),
    tracks: z.array(z.object({ title: z.string(), url: z.string().url().optional() })).optional().default([]),
    notes: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { releases };
