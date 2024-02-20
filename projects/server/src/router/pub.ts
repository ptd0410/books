import { Request, Response, Router } from "express";

const pub = Router();

pub.post("/hi", (req: Request, res: Response) => {});

export default pub;
