import { SECRECT_TOKEN_KEY } from "@config";
import { userMod } from "@model";
import { sendErr } from "@utils";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkRole =
  (role: number) => async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers["authorization"] || "";
    if (token) {
      const decode: any = jwt.verify(token, SECRECT_TOKEN_KEY);
      const user = await userMod.findById(decode.id);
      if (user && user?.role < role) {
        res.locals.user = user;
        next();
      }
    }
    return sendErr(res, 401, "Unauthorized");
  };
