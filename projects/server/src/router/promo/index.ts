import { createPromo, delPromo } from "@controller/promo";
import { checkRole } from "@middlewares/check";
import { Router } from "express";

const promoRouter = Router();

promoRouter.post("add-promo", checkRole(0), createPromo);
promoRouter.post("delete-promo", checkRole(0), delPromo);

export default promoRouter;
