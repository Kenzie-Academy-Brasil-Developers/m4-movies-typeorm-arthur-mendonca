import { z } from "zod";

const movieSchemaResponse = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().optional().nullable(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const movieSchemaRequest = movieSchemaResponse.omit({ id: true });

const movieListSchemaResponse = z.array(movieSchemaResponse);

const movieSchemaUpdate = z.object({
  name: z.string(),
  description: z.string().nullable(),
  duration: z.number(),
  price: z.number(),
});

const movieSchemaUpdateValidation = z.object({
  id: z.number().optional(),
  name: z.string().max(50).optional(),
  description: z.string().nullable().optional(),
  duration: z.number().positive().optional(),
  price: z.number().int().optional(),
});

export {
  movieSchemaResponse,
  movieSchemaRequest,
  movieListSchemaResponse,
  movieSchemaUpdate,
  movieSchemaUpdateValidation,
};
