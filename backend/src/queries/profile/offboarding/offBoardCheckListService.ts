import { Request } from "express";
import Offboard from "../../../models/profile/offboarding/Offboard";

export const getOffboardCheckLists = () => {
  return Offboard.find({});
};

export const getOffboardCheckList = (request: Request) => {
  return Offboard.findOne({ _id: request.params.id });
};

export const updateOffboardCheckList = (request: Request) => {
  return Offboard.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });
};

export const addOffboardCheckList = (request: Request) => {
  return new Offboard(request.body).save();
};

export const deleteOffboardCheckList = (request: Request) => {
  return Offboard.findByIdAndDelete(request.body._id);
};
