import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const research = defineCollection({
	loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		abstract: z.string().optional(),
		pubDate: z.coerce.date(),
		links: z
			.array(z.object({ label: z.string(), url: z.string().url() }))
			.default([]),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, research };
