import express from "express";
import {
  getOffboardCheckListsService,
  getOffboardCheckListService,
  updateOffboardCheckListService,
  createOffboardCheckListService,
  deleteOffboardCheckListService,
} from "../../../controller/profile/offboarding/offboardController";

const offboardRouter = express.Router();

offboardRouter.get("/allOffboard", getOffboardCheckListsService);
offboardRouter.get("/getOffboard/:id", getOffboardCheckListService);
offboardRouter.patch("/updateOffboard/:id", updateOffboardCheckListService);
offboardRouter.post("/createOffboard", createOffboardCheckListService);
offboardRouter.delete("/deleteOffboard", deleteOffboardCheckListService);

export default offboardRouter;
