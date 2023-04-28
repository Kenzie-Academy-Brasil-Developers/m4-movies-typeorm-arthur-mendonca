import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TMovieResponse } from "../interfaces/movies.interfaces";
import { AppError } from "../errors";

const deleteMovieService = async (movieId: number): Promise<DeleteResult> => {
  const movieRepo = AppDataSource.getRepository(Movie);

  const movieToBeDeleted: Movie | null = await movieRepo.findOne({
    where: {
      id: movieId,
    },
  });

  const deleteMovie = await movieRepo.delete({
    id: movieToBeDeleted?.id!,
  });

  return deleteMovie;
};

export default deleteMovieService;
