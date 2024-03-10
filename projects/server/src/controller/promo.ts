import { promoMod } from "@model";
import { checkMissingData, sendErr } from "@utils";
import { Request, Response } from "express";

const promoModel: IPromo = {
  from: -1,
  to: -1,
  name: "",
  price: -1,
  prodIds: [],
  unit: "percent",
};

export const createPromo = async (req: Request, res: Response) => {
  try {
    const data: IPromo = req.body;
    const check = checkMissingData(promoModel, data);
    if (check) return sendErr(res, 404, check);
    const _promo = await promoMod.create(data);
    res.send({
      message: "Add promo success",
    });
  } catch (error) {
    sendErr(res, 502, "Create promo failed");
  }
};

export const delPromo = async (req: Request, res: Response) => {
  try {
    const id = req.body?.id;
    if (!id) return sendErr(res, 404, "Missing id");
    await promoMod.findByIdAndDelete(id);
    res.send({
      message: "Delete promo success",
    });
  } catch (error) {
    sendErr(res, 502, "Delete promo failed");
  }
};
