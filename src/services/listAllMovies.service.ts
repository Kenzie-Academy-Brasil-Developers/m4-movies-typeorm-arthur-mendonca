import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { movieListSchemaResponse } from "../schemas/movies.schemas";
import { TMovieList } from "../interfaces/movies.interfaces";

const listAllMoviesService = async (
  page: number,
  perPage: number
): Promise<TMovieList> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);

  let movies: Array<Movie> | undefined;

  if (!page || !perPage) {
    movies = await movieRepo.find();
  } else {
    movies = await movieRepo.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: {
        id: "asc",
      },
    });
  }

  const returnMovies = movieListSchemaResponse.parse(movies);

  return returnMovies;
};

export default listAllMoviesService;
