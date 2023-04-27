import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Movie from "../entities/movies.entity";
import { AppError } from "../errors";

const checkIdMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const movieId: number = +request.params.id;
  const movieRepo = AppDataSource.getRepository(Movie);

  const findId = await movieRepo.findOneBy({ id: movieId });

  if (findId === null) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default checkIdMiddleware;
