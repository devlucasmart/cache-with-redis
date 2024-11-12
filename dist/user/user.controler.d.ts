import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    postUser(userDto: CreateUserDto, res: Response): Promise<void>;
    get(id: string, res: Response): Promise<void>;
}
