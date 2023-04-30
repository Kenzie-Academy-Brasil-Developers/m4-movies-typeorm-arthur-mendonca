import {
  TMovieResponse,
  TMovieUpdateRequest,
  TMovieUpdateValidation,
} from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import Movie from "../entities/movies.entity";
import { movieSchemaResponse, movieSchemaUpdateValidation } from "../schemas/movies.schemas";
import { AppError } from "../errors";

interface movieNameValidation {
  name?: string | undefined 
}
  

const UpdateMovieDataService = async (
  movieName: movieNameValidation,
  newMovieData: TMovieUpdateRequest,
  movieId: number
): Promise<TMovieUpdateValidation> => {
  const movieRepo = AppDataSource.getRepository(Movie);

  const currentMovieData: Movie | null = await movieRepo.findOneBy({
    id: movieId,
  });

  if (currentMovieData?.name === movieName){
    throw new AppError("Movie already exists.", 409)
  }

  const updatedMovieData: Movie = movieRepo.create({
    ...currentMovieData,
    ...newMovieData,
  });

  await movieRepo.save(updatedMovieData);

  const dataToReturn: TMovieUpdateValidation =
  movieSchemaUpdateValidation.parse(updatedMovieData);

  return dataToReturn;
};

export default UpdateMovieDataService;
