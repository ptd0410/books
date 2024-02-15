import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  try {
    res.status(502).send({ message: "Login failed" });
  } catch (error) {
    res.status(502).send({ message: "Login failed" });
  }
};
