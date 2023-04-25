import { Router } from "express";

const moviesRoutes: Router = Router();

moviesRoutes.get("/movies"); //listar todos os filmes cadastrados
moviesRoutes.post("/movies"); //cadastrar um novo filme)
moviesRoutes.patch("/movies/:id"); //atualizar um filme"
moviesRoutes.delete("/movies/:id"); //deletar um filme

export default moviesRoutes;
