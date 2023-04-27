import { Router } from "express";
import {
  createMovieController,
  listAllMoviesController,
  updateMovieDataController,
} from "../controllers/movies.controllers";
import checkIfMovieNameAlreadyExistsMiddleware from "../middlewares/checkIfMovieNameAlreadyExists.middleware";
import validateRequestBodyMiddleware from "../middlewares/validateRequestBody.middleware";
import {
  movieSchemaRequest,
  movieSchemaUpdate,
  movieSchemaUpdateValidation,
} from "../schemas/movies.schemas";
import checkIdMiddleware from "../middlewares/checkId.middleware";

const moviesRoutes: Router = Router();

moviesRoutes.post(
  "",
  validateRequestBodyMiddleware(movieSchemaRequest),
  checkIfMovieNameAlreadyExistsMiddleware,
  createMovieController
); //cadastrar um novo filme
moviesRoutes.get("", listAllMoviesController); //listar todos os filmes cadastrados
moviesRoutes.patch(
  "/:id",
  checkIdMiddleware,
  checkIfMovieNameAlreadyExistsMiddleware,
  validateRequestBodyMiddleware(movieSchemaUpdateValidation),

  updateMovieDataController
); //atualizar um filme"
moviesRoutes.delete("/:id"); //deletar um filme

export default moviesRoutes;
