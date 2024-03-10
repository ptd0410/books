import { sendErr } from "@utils";
import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    sendErr(res, 502, "Create order failed");
  }
};
