import { getCategoryList } from "@controller";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter.get("/cate-list", getCategoryList);
// categoryRouter.post("/add-prod", checkRole(1), addProd);
// categoryRouter.post("/update-prod", checkRole(1), updateProd);
// categoryRouter.get("/view-detail", viewProdDetail);
// categoryRouter.post("/drop", dropCollection);
// categoryRouter.put("/del-prod", checkRole(1), deleteProdList);

// categoryRouter.post("/del-prod", checkRole(1), deletepr);

export default categoryRouter;
