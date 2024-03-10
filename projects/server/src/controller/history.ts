import { actionMod } from "@model";
import { sendErr } from "@utils";
import { Request, Response } from "express";

export const viewActionHistory = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const page = Number(query?.page || 1);
    const limit = Number(query?.limit || 10);
    const data = await actionMod
      .find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    res.send({
      data,
      page,
      limit,
    });
    res.send("Drop success");
  } catch (error) {
    sendErr(res, 502, "Drop failed");
  }
};

export const dropActionCollection = async (req: Request, res: Response) => {
  try {
    await actionMod.collection.drop();
    res.send("Drop success");
  } catch (error) {
    sendErr(res, 502, "Drop failed");
  }
};
