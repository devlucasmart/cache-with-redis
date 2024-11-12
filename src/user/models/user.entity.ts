import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import {GenderEnum, MaritalStatusEnum} from "../enum/user.enum";

@Schema()
export class User {

    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({ type: String, enum: GenderEnum })
    gender: GenderEnum

    @Prop({ type: String, enum: MaritalStatusEnum })
    maritalStatus: MaritalStatusEnum;

    @Prop()
    height: number;
}

export const UserSchema = SchemaFactory.createForClass(User);