import { dropActionCollection, viewActionHistory } from "@controller/history";
import { Router } from "express";

const historyRouter = Router();
historyRouter.get("/action", viewActionHistory);
historyRouter.put("/drop-action", dropActionCollection);

export default historyRouter;
