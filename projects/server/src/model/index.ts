import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
  },
  fullName: String,
  phone: Number,
  role: Number,
});
export const userMod = model("User", userSchema);

const prodSchema = new Schema<IProd>({
  des: String,
  name: String,
  price: Number,
  quantity: Number,
});
export const prodMod = model("Prod", prodSchema);

const actionSchema = new Schema<IAction>({
  type: String,
  userId: String,
});
export const actionMod = model("Action", actionSchema);

const promoSchema = new Schema<IPromo>({
  from: Number,
  to: Number,
  prodIds: [String],
});
export const promoMod = model("Promo", promoSchema);

const categorySchema = new Schema({
  from: Number,
  to: Number,
  prodIds: [String],
});
export const categoryMod = model("Category", categorySchema);
