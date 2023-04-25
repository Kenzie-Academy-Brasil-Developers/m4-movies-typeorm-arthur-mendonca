import { z } from "zod";

const movieSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  duration: z.number(),
  price: z.number(),
});

export { movieSchema };
