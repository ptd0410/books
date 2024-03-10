import { actionMod, prodMod } from "@model";
import { checkMissingData, checkNullData, sendErr } from "@utils";
import { Request, Response } from "express";
const prodModel: IProd = {
  des: "",
  name: "",
  price: -1,
  quantity: -1,
};
export const addProd = async (req: Request, res: Response) => {
  try {
    const data: IProd = req.body;
    const check = checkMissingData(prodModel, data);
    console.log("data", data);

    if (check) return sendErr(res, 404, check);

    await prodMod.create(data);
    return res.send({ mess: "Add prod success " });
  } catch (error) {
    sendErr(res, 502, "Add prod failed");
  }
};

export const getProdList = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const page = Number(query?.page || 1);
    const limit = Number(query?.limit || 10);
    const data = await prodMod
      .find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    res.send({
      data,
      page,
      limit,
    });
  } catch (error) {
    sendErr(res, 502, "View prod failed");
  }
};

export const viewProdDetail = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    if (!query.id) return sendErr(res, 404, "Missing id");
    console.log("hihi", query.id);

    const prod = await prodMod.findById(query.id);
    res.send({ prod });
  } catch (error) {
    sendErr(res, 502, "View detail prod failed", {
      desc: "View detail prod failed",
      error,
    });
  }
};

export const updateProd = async (req: Request, res: Response) => {
  try {
    const data: Mg<IProd> = req.body;
    const _updated = await prodMod.updateOne({ _id: data._id }, { ...data });
    res.send({ prod: _updated });
  } catch (error) {
    sendErr(res, 502, "Update prod failed");
  }
};

export const deleteProdList = async (req: Request, res: Response) => {
  try {
    const user: Mg<IUser> = res.locals.user;
    if (checkNullData(user)) return sendErr(res, 404, "User not found");
    const data = req.body;
    const ids: string[] = data.ids;
    if (ids.length === 0) return sendErr(res, 404, "Id length equal to 0");
    await prodMod.deleteMany({ _id: ids });
    const deleteData: IAction = {
      type: "DELETE PRODUCTION",
      userId: user._id.toString(),
      // fullName: user.fullName,
    };
    await actionMod.create(deleteData);
    res.send({ message: "Delete success" });
  } catch (error) {
    sendErr(res, 502, "Delete prod failed");
  }
};

export const dropCollection = async (req: Request, res: Response) => {
  try {
    await prodMod.collection.drop();
    res.send("Drop success");
  } catch (error) {
    sendErr(res, 502, "Drop failed");
  }
};
