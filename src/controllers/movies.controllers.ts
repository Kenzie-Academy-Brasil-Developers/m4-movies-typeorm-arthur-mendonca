import { Request, Response } from "express";
import createMovieService from "../services/createMovie.services";
import listAllMoviesService from "../services/listAllMovies.services";
import UpdateMovieDataService from "../services/updateMovieData.services";

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
  const listAllMovies = await listAllMoviesService();

  return response.status(200).json(listAllMovies);
};

const updateMovieDataController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieId = Number(request.params.id);
  const newMovieData = request.body;
  const updateMovieData = await UpdateMovieDataService(newMovieData, movieId);

  return response.status(200).json(updateMovieData);
};

export {
  createMovieController,
  listAllMoviesController,
  updateMovieDataController,
};
