import express from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} from "../controller/movieControllers";
const movieRouter = express.Router();

movieRouter.get("/movies", getMovies);
movieRouter.get("/movie/:id", getMovie);
movieRouter.patch("/movie/:id", updateMovie);
movieRouter.post("/movie", createMovie);
movieRouter.delete("/movie", deleteMovie);

export default movieRouter;
