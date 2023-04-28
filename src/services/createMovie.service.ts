import { TMovieRequest, TMovieResponse } from "../interfaces/movies.interfaces";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movieSchemaResponse } from "../schemas/movies.schemas";

const createMovieService = async (
  movieData: TMovieRequest
): Promise<TMovieResponse> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const createMovie: Movie = movieRepo.create(movieData);

  await movieRepo.save(createMovie);

  const returnCreatedMovie: TMovieResponse =
    movieSchemaResponse.parse(createMovie);

  return returnCreatedMovie;
};

export default createMovieService;
