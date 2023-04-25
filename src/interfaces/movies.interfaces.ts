import { movieSchema } from "../schemas/movies.schemas";
import { z, TypeOf } from "zod";

type TMovie = z.infer<typeof movieSchema>;

export { TMovie };
