import { SECRECT_TOKEN_KEY } from "@config";
import { Response } from "express";
import jwt from "jsonwebtoken";
import { Model } from "mongoose";

export const checkMissingData = <T extends object>(model: T, data: any) => {
  let message = "";
  Object.keys(model).forEach((item) => {
    const exist = Object.keys(data).some((dataItem) => dataItem === item);
    if (!exist) {
      if (message === "") message += "Missing " + item;
      else message += " or " + item;
    }
  });

  return message;
};

export const checkExistData = async (model: Model<any>, data: any) => {
  const exist = await model.findOne(data);
  if (exist === null) return false;
  return true;
};

export const checkNullData = (data: any) => {
  if (!data || data === null) return true;
  return false;
};

export const sendErr = (
  res: Response,
  status: number,
  message,
  err?: { desc: string; error }
) => {
  console.log(`⚡️⚡️⚡️ Err ${err?.desc} :`, err?.error);

  res.status(status).send({ message });
};

export const createToken = (data: any) => {
  return jwt.sign(data, SECRECT_TOKEN_KEY, {
    expiresIn: "30d",
  });
};
