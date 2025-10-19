import { model } from "mongoose";
import { IUser } from "../../../utiliti/common/interface";
import { userSchema } from "./user.schema";

export const User = model<IUser>("User", userSchema);