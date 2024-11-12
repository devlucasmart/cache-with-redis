import { User } from "./models/user.entity";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findById(userId: string): Promise<User>;
}
