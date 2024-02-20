import { userModel } from "@@models/obj";
import { createMongooseModel } from "@utils/mongoose";
import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(createMongooseModel(userModel));
export const userMod = model("User", userSchema);
