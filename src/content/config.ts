// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const uspCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    rank: z.number(),
    title: z.string(),
    icon: image(),
  })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  "usp": uspCollection,
};
