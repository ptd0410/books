export const createMongooseModel = <T>(data: T) => {
  const res: any = {};
  const typeCheck: any = data;
  Object.entries(typeCheck).map(([key, value]) => {
    if (typeof value === "string") {
      res[key] = String;
    } else if (typeof value === "number") {
      res[key] = Number;
    }
  });

  return res as T;
};
