import { Request } from "express";
import Onboard from "../../../models/profile/onboarding/Onboard";

export const getOnboardCheckLists = () => {
  return Onboard.find({});
};

export const getOnboardCheckList = (request: Request) => {
  return Onboard.findOne({ _id: request.params.id });
};

export const updateOnboardCheckList = (request: Request) => {
  return Onboard.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const addOnboardCheckList = (request: Request) => {
  return new Onboard(request.body).save();
};

export const deleteOnboardCheckList = (request: Request) => {
  return Onboard.findByIdAndDelete(request.body._id);
};
