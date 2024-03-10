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
      console.log("token", token);

      if (token) {
        const decode: any = await jwt.verify(token, SECRECT_TOKEN_KEY);
        const user = await userMod.findById(decode.id);

        if (typeof role === "undefined" || (user && user?.role <= role)) {
          res.locals.user = user;
          next();
          return;
        }
      }
      return sendErr(res, 401, "Unauthorized");
    } catch (error) {
      console.log("Check role failed", error);

      sendErr(res, 502, "Check role failed");
    }
  };
