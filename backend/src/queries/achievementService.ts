import { Request } from "express";
import Achievement from "../models/Achievement";

export const getAllAchievement = () => {
  return Achievement.find({});
};

export const getAchievements = (request: Request) => {
  return Achievement.findOne({ _id: request.params.id });
};

export const addAchievement = (request: Request) => {
  return new Achievement(request.body).save();
};

export const updateAchievement = (request: Request) => {
  return Achievement.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const deleteAchievement = (request: Request) => {
  return Achievement.findByIdAndDelete(request.body._id);
};
