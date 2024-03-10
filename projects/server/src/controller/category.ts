import { actionMod, categoryMod } from "@model";
import { checkNullData, sendErr } from "@utils";
import { Request, Response } from "express";

export const getCategoryList = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const page = Number(query?.page || 1);
    const limit = Number(query?.limit || 10);
    const data = await categoryMod
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

export const updateCate = async (req: Request, res: Response) => {
  try {
    const data: Mg<IProd> = req.body;
    const _updated = await categoryMod.updateOne(
      { _id: data._id },
      { ...data }
    );
    res.send({ prod: _updated });
  } catch (error) {
    sendErr(res, 502, "Update prod failed");
  }
};

export const deleteCateList = async (req: Request, res: Response) => {
  try {
    const user: Mg<IUser> = res.locals.user;
    if (checkNullData(user)) return sendErr(res, 404, "User not found");
    const data = req.body;
    const ids: string[] = data.ids;
    if (ids.length === 0) return sendErr(res, 404, "Id length equal to 0");
    await categoryMod.deleteMany({ _id: ids });
    const deleteData: IAction = {
      type: "DELETE CATE",
      userId: user._id.toString(),
      // fullName: user.fullName,
    };
    await actionMod.create(deleteData);
    res.send({ message: "Delete success" });
  } catch (error) {
    sendErr(res, 502, "Delete prod failed");
  }
};
