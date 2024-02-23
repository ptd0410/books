// import { authDataModel } from "./postData";

export const authDataModel = {
  username: "",
  password: "",
};

export const prodModel = {
  name: "",
  price: 0,
  des: "",
  quantity: 0,
};

export const userModel = {
  ...authDataModel,
  role: -1,
  email: "",
  fullName: "",
  phone: "",
};

export const notiModel = {};
