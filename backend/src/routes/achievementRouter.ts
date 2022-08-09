import express from "express";
import {
  getAllAchievementService,
  getAchievementsService,
  createAchievementService,
  updateAchievementService,
  deleteAchievementService,
} from "../controller/achievementControllers";

const achievementRouter = express.Router();

achievementRouter.get("/achievements", getAllAchievementService);
achievementRouter.get("/achievement/:id", getAchievementsService);
achievementRouter.post("/achievement", createAchievementService);
achievementRouter.patch("/achievement/:id", updateAchievementService);
achievementRouter.delete("/achievement", deleteAchievementService);

export default achievementRouter;
