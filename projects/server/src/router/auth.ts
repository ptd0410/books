import { login } from "@controller/auth";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", login);

export default authRouter;
