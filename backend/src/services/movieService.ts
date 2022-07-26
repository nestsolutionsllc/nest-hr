import Movie from "../models/movie";
import { Request } from "express";

export const getMoviesService = () => {
  return Movie.find({});
};

export const getMovieByTitleService = (request: Request) => {
  return Movie.findOne({ _id: request.params.id });
};

export const updateMovieByTitleService = (request: Request) => {
  return Movie.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const addMovieService = (request: Request) => {
  return new Movie(request.body).save();
};

export const deleteMovieService = (request: Request) => {
  return Movie.findByIdAndDelete(request.body._id);
};
