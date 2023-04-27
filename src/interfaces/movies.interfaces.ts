import {
  movieListSchemaResponse,
  movieSchemaRequest,
  movieSchemaResponse,
  movieSchemaUpdate,
  movieSchemaUpdateValidation,
} from "../schemas/movies.schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type TMovieResponse = z.infer<typeof movieSchemaResponse>;

type TMovieRequest = z.infer<typeof movieSchemaRequest>;

type TMovieList = z.infer<typeof movieListSchemaResponse>;

type TMovieUpdate = z.infer<typeof movieSchemaUpdate>;

type TMovieUpdateRequest = DeepPartial<TMovieUpdate>;

type TMovieUpdateValidation = z.infer<typeof movieSchemaUpdateValidation>;

export {
  TMovieResponse,
  TMovieRequest,
  TMovieList,
  TMovieUpdate,
  TMovieUpdateRequest,
  TMovieUpdateValidation,
};
