import {
  notiModel,
  authDataModel,
  prodModel,
  userModel,
} from "@@models/_index";

declare global {
  type IAuthData = typeof authDataModel;
  type IProd = typeof prodModel;
  type INoti = typeof notiModel;
  type ÍUser = typeof userModel;
}
