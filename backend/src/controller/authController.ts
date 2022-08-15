import { Request, Response, NextFunction } from "express";
import { sign } from "jsonwebtoken";
import db from "../models";

const User = db.user;
async function authLogin(req: Request, res: Response) {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email, password });

  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: "Invalid User Detail!",
    });
  }
  /* istanbul ignore next */
  const token = sign({ _id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET || "", {
    expiresIn: "365d",
  });

  return res.status(200).json({
    success: true,
    data: {
      userId: existingUser._id,
      email: existingUser.email,
      token,
    },
  });
}
export default authLogin;

// ---------------------------------Sign Up --------------------------------------------

export const authRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ $or: [{ userName: req.body.userName }, { email: req.body.email }] });
    if (user) {
      res.status(400).send({ message: "Failed! Username or email address is already in use!" });
      return;
    }
  } catch (err) {
    /* istanbul ignore next */
    res.status(500).send({ message: err });
    /* istanbul ignore next */
    return;
  }
  next();
};
