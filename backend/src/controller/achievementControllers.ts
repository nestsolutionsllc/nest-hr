import { Request, Response } from "express";
import {
  getAllAchievement,
  getAchievements,
  addAchievement,
  updateAchievement,
  deleteAchievement,
} from "../queries/achievementService";

export const getAllAchievementService = async (request: Request, response: Response) => {
  try {
    response.send(await getAllAchievement());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const getAchievementsService = async (request: Request, response: Response) => {
  try {
    /* ! Would get the data under user id, once the user model created */
    const achievement = await getAchievements(request);
    response.status(200).send(achievement);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createAchievementService = async (request: Request, response: Response) => {
  try {
    const achievement = await addAchievement(request);
    response.status(201).send(achievement);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateAchievementService = async (request: Request, response: Response) => {
  try {
    const achievement = await updateAchievement(request);
    response.status(200).send(achievement);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const deleteAchievementService = async (request: Request, response: Response) => {
  try {
    const achievement = await deleteAchievement(request);
    response.status(200).send(achievement);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
