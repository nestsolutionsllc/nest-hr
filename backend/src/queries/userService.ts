import { Request } from "express";
import _ from "lodash";
import db from "../models";
import { UserType } from "../utils/types/user";

// interface ParseJwtType {
//   _id: string;
//   email: string;
//   userGroup: string[];
// }

const User = db.user;

//  get all users
export const getUsers = () => {
  return User.find({});
};

//  get one user by ID
export const findUserId = (request: Request | { params: { id: string } }): UserType | null => {
  return User.findOne({ _id: request.params.id }) as unknown as UserType | null;
};
// export const findUserByName = (request: Request) => {
//   return User.findOne({ name: request.params.name });
// };
// export const findUserByEmail = (request: Request) => {
//   return User.findOne({ email: request.params.email });
// };

export const updateUser = async (request: Request) => {
  try {
    /* istanbul ignore next */
    if (request.body.action) {
      /* istanbul ignore next */
      const action = `$${request.body.action}`;
      /* istanbul ignore next */
      if (_.toLower(request.body.action) === "pull") {
        /* istanbul ignore next */
        _.map(request.body.groupId, async el => {
          await User.findByIdAndUpdate(
            request.body.userId,
            { [action]: { userGroup: el } },
            {
              new: true,
            },
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log(res);
              }
            }
          );
        });
        return `Successfully deleted the groups ${request.body.groupId.toString()}`;
      }
      /* istanbul ignore next */
      return await User.findByIdAndUpdate(
        request.body.userId,
        { [action]: { userGroup: request.body.groupId } },
        {
          new: true,
        }
      );
    }
    return User.findByIdAndUpdate(request.body.userId, request.body.update, {
      new: true,
    });
  } catch (err) {
    /* istanbul ignore next */
    return err;
  }
};

export const addUser = (request: Request) => {
  return new User(request.body).save();
};

export const deleteUser = (req: Request) => {
  return User.findByIdAndDelete(req.body._id);
};
// this function will be used later
// export function parseJwt(token: string): ParseJwtType {
//   const base64Payload = token.split(".")[1];
//   const payload = Buffer.from(base64Payload, "base64");
//   return JSON.parse(payload.toString());
// }
