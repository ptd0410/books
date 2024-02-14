import { IProd, INoti, IUser, IBuyProd } from "@@models/prod";

declare global {
  type IProd = IProd;
  type INoti = INoti;
  type IUser = IUser;
  type IBuyProd = IBuyProd;
}
