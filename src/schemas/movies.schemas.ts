import { z } from "zod";

const movieSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional().nullable(),
  duration: z.number(),
  price: z.number(),
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
  name: z.string().optional(),
  description: z.string().nullable().optional(),
  duration: z.number().optional(),
  price: z.number().optional(),
});

export {
  movieSchemaResponse,
  movieSchemaRequest,
  movieListSchemaResponse,
  movieSchemaUpdate,
  movieSchemaUpdateValidation,
};
