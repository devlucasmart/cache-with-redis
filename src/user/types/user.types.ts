// user.types.ts
import { HydratedDocument } from "mongoose";
import { User } from "../models/user.entity";

export type UserDocument = HydratedDocument<User>;
