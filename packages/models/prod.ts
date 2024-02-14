export const prodModel = {
  name: "",
  price: 0,
  des: "",
  quantity: 0,
};

export const notiModel = {};

export const userModel = {};

export const buyProdModel = {
  quantity: 0,
};

type IProd = typeof prodModel;
type INoti = typeof notiModel;
type IUser = typeof userModel;
type IBuyProd = typeof buyProdModel;

export type { IProd, INoti, IUser, IBuyProd };
