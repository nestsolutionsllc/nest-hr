import express from "express";
import {
  getOnboardCheckListsService,
  getOnboardCheckListService,
  updateOnboardCheckListService,
  deleteOnboardCheckListService,
  createOnboardCheckListService,
} from "../../../controller/profile/onboarding/onboardController";

const onboardRouter = express.Router();

onboardRouter.get("/allOnboard", getOnboardCheckListsService);
onboardRouter.get("/getOnboard/:id", getOnboardCheckListService);
onboardRouter.patch("/updateOnboard/:id", updateOnboardCheckListService);
onboardRouter.post("/createOnboard", createOnboardCheckListService);
onboardRouter.delete("/deleteOnboard", deleteOnboardCheckListService);

export default onboardRouter;
