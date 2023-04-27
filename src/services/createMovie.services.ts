import { TMovieRequest, TMovieResponse } from "../interfaces/movies.interfaces";
import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const createMovieService = async (
  movieData: TMovieRequest
): Promise<TMovieResponse> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const createMovie: Movie = movieRepo.create(movieData);

  await movieRepo.save(createMovie);

  return createMovie;
};

export default createMovieService;
