import { Types } from "mongoose";

export const promoTypes = ["percent", "vnd"] as const;
export const actionTypes = [
  "DELETE PRODUCTION",
  "ADD PRODUCTION",
  "ADD ADMIN",
  "DELETE ADMIN",
  "ADD CATE",
  "DELETE CATE",
] as const;

export const userRole = {
  0: "owner",
  1: "admin",
  2: "client",
};
declare global {
  type IActionType = (typeof actionTypes)[number];
  type IPromoType = (typeof promoTypes)[number];
  type IRole = keyof typeof userRole;

  type Mg<T> = T & { _id: Types.ObjectId };

  type IProd = {
    name: string;
    des: string;
    price: number;
    quantity: number;
  };

  interface IAuth {
    username: string;
    password: string;
  }

  interface IUserInfo {
    role: number;
    email: string;
    fullName: string;
    phone: number;
  }
  type IUser = IUserInfo & IAuth;
  type IAction = {
    type: IActionType;
    userId: string;
  };

  type IPromo = {
    price: number;
    from: number;
    to: number;
    name: string;
    unit: IPromoType;
    prodIds: string[];
  };

  type ICate = {
    name: string;
  };
}
