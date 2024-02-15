import express, { Express } from "express";
import { mongoUrl, port } from "./config";
import mongoose from "mongoose";
import authRouter from "@router/auth";

const app: Express = express();

app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("⚡️[db]:mongo connect successfully ------->");

    app.listen(port, () =>
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
    );
  } catch (error) {
    console.error("err crash server -------> ", error);
    process.exit(1);
  }
};

start();
