import { SECRECT_TOKEN_KEY } from "@config";
import { userMod } from "@model";
import { sendErr } from "@utils";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkRole =
  (role?: number) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token: string = req.headers["authorization"] || "";
      if (token) {
        const decode: any = jwt.verify(token, SECRECT_TOKEN_KEY);
        // console.log("⚡️ decode", decode);
        const user = await userMod.findById(decode.id);
        // console.log("⚡️ user", user);
        if (typeof role === "undefined" || (user && user?.role <= role)) {
          res.locals.user = user;
          next();
          return;
        }
      }
      return sendErr(res, 401, "Unauthorized");
    } catch (error) {
      sendErr(res, 502, "Check role failed");
    }
  };
