// export const createMongooseModel = <T>(
//   data: T,
//   createTime?: boolean,
//   updateTime?: boolean
// ) => {
//   const res: any = {};

//   const typeCheck: any = data;
//   Object.entries(typeCheck).map(([key, value]) => {
//     const objValue: any = {};
//     if (key === "email" || key === "username") {
//       objValue["require"] = true;
//     }
//     if (typeof value === "string") {
//       objValue.type = String;
//     } else if (typeof value === "number") {
//       objValue.type = Number;
//     } else if (Array.isArray(value) && typeof value[0] === "string") {
//       objValue.type = [String];
//     }
//     res[key] = objValue;
//   });
//   if (createTime) {
//     res["created_at"] = { type: Date, required: true, default: Date.now };
//   }
//   if (updateTime) {
//     res["updatedOn"] = { type: Date, required: true, default: Date.now };
//   }

//   return res as T;
// };
export {};
