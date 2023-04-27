import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import {
  movieListSchemaResponse,
  movieSchemaResponse,
} from "../schemas/movies.schemas";
import { TMovieList } from "../interfaces/movies.interfaces";

const listAllMoviesService = async (): Promise<TMovieList> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movies: Array<Movie> = await movieRepo.find();

  const returnMovies = movieListSchemaResponse.parse(movies);

  return returnMovies;
};

export default listAllMoviesService;
