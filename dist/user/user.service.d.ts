import { UserRepository } from "./user.repository";
import { RedisCacheRepository } from "../cache-redis/redis-cache-repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./models/user.entity";
export declare class UserService {
    private readonly userRepository;
    private readonly redisCacheRepository;
    constructor(userRepository: UserRepository, redisCacheRepository: RedisCacheRepository);
    getUserById(userId: string): Promise<User>;
    saveUser(userCreateDto: CreateUserDto): Promise<User>;
}
