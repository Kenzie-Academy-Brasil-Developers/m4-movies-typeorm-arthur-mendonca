import {
  TMovieResponse,
  TMovieUpdateRequest,
  TMovieUpdateValidation,
} from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import Movie from "../entities/movies.entity";
import { movieSchemaResponse } from "../schemas/movies.schemas";

const UpdateMovieDataService = async (
  newMovieData: TMovieUpdateRequest,
  movieId: number
): Promise<TMovieUpdateValidation> => {
  const movieRepo = AppDataSource.getRepository(Movie);

  const currentMovieData: Movie | null = await movieRepo.findOneBy({
    id: movieId,
  });

  const updatedMovieData: Movie = movieRepo.create({
    ...currentMovieData,
    ...newMovieData,
  });

  await movieRepo.save(updatedMovieData);

  const dataToReturn: TMovieUpdateValidation =
    movieSchemaResponse.parse(updatedMovieData);

  return dataToReturn;
};

export default UpdateMovieDataService;
