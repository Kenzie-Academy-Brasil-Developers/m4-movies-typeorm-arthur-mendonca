import { Request, Response } from "express";
import createMovieService from "../services/createMovie.service";
import listAllMoviesService from "../services/listAllMovies.service";
import UpdateMovieDataService from "../services/updateMovieData.service";
import deleteMovieService from "../services/deleteMovie.service";
import { TMovieUpdateValidation } from "../interfaces/movies.interfaces";

const createMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const createUser = await createMovieService(request.body);
  return response.status(201).json(createUser);
};

const listAllMoviesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const page: number = response.locals.page;
  const perPage: number = response.locals.perPage;
  const order: string = response.locals.order;
  const sort: string = response.locals.sort;

  const listAllMovies = await listAllMoviesService(page, perPage, order, sort);

  return response.status(200).json(listAllMovies);
};

const updateMovieDataController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieName: TMovieUpdateValidation = request.body.name;
  const movieId = Number(request.params.id);
  const newMovieData = request.body;
  const updateMovieData = await UpdateMovieDataService(
    movieName,
    newMovieData,
    movieId
  );

  return response.status(200).json(updateMovieData);
};

const deleteMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieId = Number(request.params.id);

  const deleteAMovie = await deleteMovieService(movieId);

  return response.status(204).send();
};

export {
  createMovieController,
  listAllMoviesController,
  updateMovieDataController,
  deleteMovieController,
};
