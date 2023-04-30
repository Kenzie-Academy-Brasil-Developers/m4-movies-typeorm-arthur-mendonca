import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { movieListSchemaResponse } from "../schemas/movies.schemas";
import { TMovieList, TMoviePagination } from "../interfaces/movies.interfaces";

// http://localhost:3000/movies/?sort=price&order=desc&page=2&perPage=3

const listAllMoviesService = async (
  page: number,
  perPage: number,
  order: string,
  sort: string
): Promise<TMoviePagination> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movieCount: number = await movieRepo.count();
  let moviesPerPage: Movie[] | undefined;

  let orderField: string = "id";
  let sortOrder: string = "asc";

  if (order === "desc") {
    sortOrder = "desc";
  }

  if (sort === "price" || sort === "duration") {
    orderField = sort;
  }

  if (!sort) {
    orderField = "id";
    sortOrder = "asc";
  }

  moviesPerPage = await movieRepo.find({
    skip: (page - 1) * perPage,
    take: perPage,
    order: {
      [orderField]: sortOrder!,
    },
  });

  const totalPages = Math.ceil(movieCount / perPage);
  const prevPage =
    page > 1
      ? `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`
      : null;
  const nextPage =
    page < totalPages
      ? `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`
      : null;

  const returnMovies: TMovieList = movieListSchemaResponse.parse(moviesPerPage);

  return {
    nextPage: nextPage,
    prevPage: prevPage,
    count: movieCount,
    data: returnMovies,
  };
};

export default listAllMoviesService;
