import express from "express";
import {
  createUserService,
  getUsersService,
  getUserService,
  deleteUserService,
  updateUserService,
} from "../controller/userControllers";
import { checkPermission, tokenCheck } from "../middlewares/middlewares";
import authLogin, { authRegister } from "../controller/authController";

const userRouter = express.Router();
// GET
userRouter.get("/users", [tokenCheck, checkPermission({ module: "users", action: "read" })], getUsersService);
userRouter.get("/user/:id", [tokenCheck, checkPermission({ module: "users", action: "read" })], getUserService);
// POST
userRouter.post("/login", authLogin);
userRouter.post(
  "/register",
  [tokenCheck, authRegister, checkPermission({ module: "users", action: "create" })],
  createUserService
);
// PATCH
userRouter.patch("/user", [tokenCheck, checkPermission({ module: "users", action: "update" })], updateUserService);
// DELETE
userRouter.delete("/user", [tokenCheck, checkPermission({ module: "users", action: "delete" })], deleteUserService);

// In order to get Token use this API
export default userRouter;
