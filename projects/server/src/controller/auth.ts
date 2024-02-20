import { userMod } from "@model";
import { checkMissingData, createToken, sendErr } from "@utils";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { authDataModel } from "@@models/obj";

type IAuthData = typeof authDataModel;

const createAuthToken = (user: { _id: any; role: number }) => {
  return createToken({
    id: user._id,
    role: user.role,
  });
};

export const login = async (req: Request, res: Response) => {
  try {
    const data: IAuthData = req.body;
    const check = checkMissingData(authDataModel, data);
    if (check) return sendErr(res, 404, check);
    const { username, password } = data;

    const existUser = await userMod.findOne({
      username,
    });

    if (
      existUser !== null &&
      (await bcrypt.compare(password, existUser.password))
    ) {
      const token = createAuthToken(existUser);
      res.send({ token });
      return;
    }

    //login failed
    sendErr(res, 403, "Invalid username or password");
  } catch (error) {
    sendErr(res, 502, "Login failed");
  }
};

export const createUser =
  (addedRole: number) => async (req: Request, res: Response) => {
    try {
      const data: IAuthData = req.body;
      const check = checkMissingData(authDataModel, data);
      if (check) return sendErr(res, 404, check);
      const { username, password } = data;

      const existUser = await userMod.findOne({
        username,
      });

      if (existUser !== null) return sendErr(res, 409, "Exist username");

      const user = await userMod.create({
        username,
        password: await bcrypt.hash(password, 10),
        role: addedRole,
      });
      const token = createAuthToken(user);
      res.send({ token });
    } catch (error) {
      sendErr(res, 502, "Create user failed");
    }
  };

// export const register = (req:Request, )
