import { Request } from "express";
import db from "../models";

const Group = db.group;
export const getGroups = async () => {
  const groups = await Group.find({});
  return groups;
};
export const getGroup = (request: Request) => {
  return Group.findOne({ _id: request.params.id });
};

export const updateGroup = (request: Request) => {
  return Group.findByIdAndUpdate(request.body.id, request.body.update, {
    new: true,
  });
};

export const addGroup = (request: Request) => {
  return new Group(request.body).save();
};

export const deleteGroup = (request: Request) => {
  return Group.findByIdAndDelete(request.body._id);
};
