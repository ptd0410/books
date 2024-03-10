import {
  createUser,
  login,
  sendMailResetPassword,
  updateUser,
  getUserDetail,
  getUserList,
} from "@controller/auth";
import { checkRole } from "@middlewares/check";
import { Response, Router } from "express";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/register", createUser(2));
authRouter.post("/add-admin", checkRole(0), createUser(1));
authRouter.post("/add-owner", createUser(0));
authRouter.put("/update-user", checkRole(), updateUser);
authRouter.get("/user-detail", getUserDetail);
authRouter.get("/user-list", getUserList);
authRouter.post("/reset-pass", sendMailResetPassword);

export default authRouter;
