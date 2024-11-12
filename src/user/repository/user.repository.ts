// user.repository.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../models/user.entity";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const userCreated = new this.userModel(createUserDto);
        return userCreated.save();
    }

    async findById(userId: string): Promise<User> {
        return await this.userModel.findById(userId);
    }
}