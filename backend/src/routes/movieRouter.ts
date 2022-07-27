




import {
  getMoviesService,
  getMovieService,
  createMovieService,
  deleteMovieService,
  updateMovieService,
} from "../controller/movieControllers";

import express from "express";

const movieRouter = express.Router();

movieRouter.get("/movies", getMoviesService);
movieRouter.get("/movie/:id", getMovieService);
movieRouter.patch("/movie/:id", updateMovieService);
movieRouter.post("/movie", createMovieService);
movieRouter.delete("/movie", deleteMovieService);

export default movieRouter;
