import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import db from "../models";
// import { findUserId, parseJwt } from "../queries/userService";

const User = db.user;

// Super admin check
const isSuperAdmin = async (userId: string) => {
  const user = await User.findById({ _id: userId }).exec();
  /* istanbul ignore next */
  return user?.isSuperAdmin;
};

// Checking token validation
export const tokenCheck = async (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "No authorization token provided!" });
  } else {
    /* istanbul ignore next */
    verify(token.split(" ")[1], process.env.JWT_SECRET || "thisisasamplesecret", (err: any, decoded: any) => {
      if (err && err.name === "TokenExpiredError") {
        res.status(401).json({ message: "Expired token" });
      } else if (err) {
        res.status(403).json({ message: "Inviled Token" });
      } else {
        res.locals.userId = decoded._id;
        req.body.user = decoded;
        next();
      }
    });
  }
};

// Checking permission for certain action
export const checkPermission =
  ({ module, action }: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    /* istanbul ignore next */
    const superAdmin = await isSuperAdmin(req.body?.user?._id);
    /* istanbul ignore next */
    if (superAdmin) {
      /* istanbul ignore next */
      next();
      return;
    }

    let permitted = false;
    /* istanbul ignore next */
    if (!res.locals.userId && !req.body?._id) {
      /* istanbul ignore next */
      res.status(403).send({
        message: "User not found",
      });
      return;
    }

    // this condition will be usefull if anyone tries to use CheckPermission without tokenCheck
    // if (!res.locals.userId && !req.body?._id)
    //   res.status(403).send({
    //     message: "User not found",
    //   });

    const userWithGroups: any = await User.findById(res.locals.userId)
      .populate("userGroup")
      .where("user")
      .select("userGroup");
    try {
      userWithGroups.userGroup.forEach((group: any) => {
        if (group.permissions && group.permissions[module]) {
          if (group.permissions[module][action]) {
            permitted = true;
          }
        }
      });
    } catch (error) {
      /* istanbul ignore next */
      res.status(500).send(error);
      /* istanbul ignore next */
      return;
    }

    if (!permitted) {
      res.status(403).send({
        message: "Permission denied",
      });
      return;
    }
    next();
  };
