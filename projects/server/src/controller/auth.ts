import { userMod } from "@model";
import { checkMissingData, checkNullData, createToken, sendErr } from "@utils";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { authDataModel, userModel } from "@@models/obj";
import nodemailer from "nodemailer";
import { ggSendEmail } from "@@config";

type IAuthData = typeof authDataModel;
// type IUser = typeof userModel;

const createAuthToken = (user: { _id: any; role: number }) => {
  return createToken({
    id: user._id,
    role: user.role,
  });
};

export const login = async (req: Request, res: Response) => {
  try {
    const data: IAuthData = req.body;
    const check = checkMissingData(authDataModel, data);
    if (check) return sendErr(res, 404, check);
    const { username, password } = data;

    const existUser = await userMod.findOne({
      username,
    });

    if (
      existUser !== null &&
      (await bcrypt.compare(password, existUser.password))
    ) {
      const token = createAuthToken(existUser);
      res.send({ token });
      return;
    }

    //login failed
    sendErr(res, 403, "Invalid username or password");
  } catch (error) {
    sendErr(res, 502, "Login failed");
  }
};

export const createUser =
  (addedRole: number) => async (req: Request, res: Response) => {
    try {
      const data: IAuthData = req.body;
      const check = checkMissingData(authDataModel, data);
      if (check) return sendErr(res, 404, check);
      const { username, password } = data;

      const existUser = await userMod.findOne({
        username,
      });

      if (existUser !== null) return sendErr(res, 409, "Exist username");
      const user = await userMod.create({
        ...userModel,
        username,
        password: await bcrypt.hash(password, 10),
        role: addedRole,
      });
      const token = createAuthToken(user);
      res.send({ token });
    } catch (error) {
      sendErr(res, 502, "Create user failed");
    }
  };

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user: MgData<IUser> = res.locals.user;
    if (!user) return sendErr(res, 401, "Invalid user for update");
    const data = req.body;

    const _updated = await userMod.findByIdAndUpdate(
      {
        _id: user._id,
      },
      data
    );
    if (checkNullData(_updated)) return sendErr(res, 500, "Update user failed");

    res.send({
      user: _updated,
    });
    // console.log("update ", _updated);
  } catch (error) {
    sendErr(res, 502, "Update user failed");
  }
};

export const viewUser = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const username = query?.username;
    if (!username) return sendErr(res, 404, "Missing username ");
    const user = await userMod.findOne({ username });
    if (checkNullData(user)) return sendErr(res, 404, "User not exist ");
    res.send({ user });
  } catch (error) {
    sendErr(res, 502, "View user failed");
  }
};

export async function sendMailResetPassword(req: Request, res: Response) {
  try {
    const user: MgData<IUser> = res.locals.user;
    if (!user) return sendErr(res, 401, "Invalid user for send email");
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: { ...ggSendEmail }, // <user>:Your email address -- <pass>:Password (for gmail, your app password)
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    const webAddress = "http://127.0.0.1:5001/";

    let info = await transporter.sendMail({
      from: "Hihi haha",
      to: "dragon.ptd@gmail.com",
      subject: "Testing, testing, 123",
      html: `
      <p>Click this link <a href=${webAddress}>reset</a> to reset your password</p>
      `,
    });
    res.send({ messages: "Email sended" });
    console.log(info.messageId); // Random ID generated after successful send (optional)
  } catch (error) {
    console.log("err reset", error);

    sendErr(res, 502, "Send email reset failed");
  }
}

export const reset = async (req: Request, res: Response) => {
  try {
    const user: MgData<IUser> = res.locals.user;
    if (!user) return sendErr(res, 401, "Invalid user for send email");
  } catch (error) {
    sendErr(res, 502, "Reset pass failed");
  }
};
