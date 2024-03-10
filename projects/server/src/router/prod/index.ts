import {
  addProd,
  deleteProdList,
  dropCollection,
  getProdList,
  updateProd,
  viewProdDetail,
} from "@controller/prod";
import { checkRole } from "@middlewares/check";
import { Router } from "express";

const prodRouter = Router();

prodRouter.post("/add-prod", checkRole(1), addProd);
prodRouter.post("/update-prod", checkRole(1), updateProd);
prodRouter.get("/prod-list", getProdList);
prodRouter.get("/view-detail", viewProdDetail);
prodRouter.post("/drop", dropCollection);
prodRouter.put("/del-prod", checkRole(1), deleteProdList);

// prodRouter.post("/del-prod", checkRole(1), deletepr);

export default prodRouter;
