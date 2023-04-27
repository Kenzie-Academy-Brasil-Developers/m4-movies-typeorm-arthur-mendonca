import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Movie from "../entities/movies.entity";
import { AppError } from "../errors";
import { TMovieUpdateRequest } from "../interfaces/movies.interfaces";

const checkIfMovieNameAlreadyExistsMiddleware = async (
  request: Request<TMovieUpdateRequest>,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieData = request.body;

  const movieRepo = AppDataSource.getRepository(Movie);

  const movie = await movieRepo.findOne({
    where: {
      name: movieData.name,
    },
  });

  if (movie) {
    throw new AppError("Movie already exists.", 409);
  }

  next();
};

export default checkIfMovieNameAlreadyExistsMiddleware;
