import { Request, Response } from "express";
import { getMovie, getMovies, addMovie, deleteMovie, updateMovie } from "../queries/movieService";

export const getSalariesService = async (request: Request, response: Response) => {
  try {
    response.send(await getMovies());
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getSalaryService = async (request: Request, response: Response) => {
  try {
    const result = await getMovie(request);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const updateSalaryService = async (request: Request, response: Response) => {
  try {
    const result = await updateMovie(request);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const createSalaryService = async (request: Request, response: Response) => {
  try {
    const result = await addMovie(request);
    response.status(201).send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

export const deleteSalaryService = async (request: Request, response: Response) => {
  try {
    await deleteMovie(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    response.status(500).send(error);
  }
};
