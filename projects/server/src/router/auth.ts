import { createUser, login } from "@controller/auth";
import { Response, Router } from "express";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", createUser(2));

export default authRouter;
