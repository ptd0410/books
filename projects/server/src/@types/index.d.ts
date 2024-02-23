import { Types } from "mongoose";
import { userModel } from "../models/_index";

declare global {
  type IUser = typeof userModel;
  type MgData<T> = T & ID;
}

interface ID {
  _id: Types.ObjectId;
}
