import { HydratedDocument } from "mongoose";
export type UserDocument = HydratedDocument<User>;
export declare enum GenderEnum {
    FEMALE = "Female",
    MALE = "Male"
}
export declare enum MaritalStatusEnum {
    SINGLE = "Single",
    MARRIED = "Married",
    Divorced = "Divorced",
    Widowed = "Widowed",
    Separated = "Separated"
}
export declare class User {
    _id: string;
    name: string;
    age: number;
    gender: GenderEnum;
    maritalStatus: MaritalStatusEnum;
    height: number;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v?: number;
}>;
