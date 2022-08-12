import express from "express";
import {
  getGroupsService,
  getGroupService,
  createGroupService,
  deleteGroupService,
  updateGroupService,
} from "../controller/groupControllers";
import { checkPermission, tokenCheck } from "../middlewares/middlewares";

const groupRouter = express.Router();

groupRouter.get("/groups", [tokenCheck, checkPermission({ module: "groups", action: "read" })], getGroupsService);
groupRouter.get("/group/:id", [tokenCheck, checkPermission({ module: "groups", action: "read" })], getGroupService);
groupRouter.patch("/group", [tokenCheck, checkPermission({ module: "groups", action: "update" })], updateGroupService);
groupRouter.post("/group", [tokenCheck, checkPermission({ module: "groups", action: "create" })], createGroupService);
groupRouter.delete("/group", [tokenCheck, checkPermission({ module: "groups", action: "delete" })], deleteGroupService);

export default groupRouter;
