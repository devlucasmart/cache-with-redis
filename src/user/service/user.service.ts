import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../repository/user.repository";
import { RedisCacheRepository } from "../../cache-redis/repository/redis-cache-repository";
import { CreateUserDto } from "../dto/create-user.dto";
import {User} from "../models/user.entity";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly redisCacheRepository: RedisCacheRepository
    ) {}

    async getUserById(userId: string): Promise<User> {
        const userCache = await this.redisCacheRepository.getData<User>(userId);

        if (userCache) {
            return userCache;
        }

        const userRepository = await this.userRepository.findById(userId);

        if (!userRepository) {
            throw new NotFoundException(`User with ID ${userId} not found`);
        }

        await this.redisCacheRepository.saveData(userRepository, userId);

        return userRepository;
    }

    async saveUser(userCreateDto: CreateUserDto): Promise<User> {
        const newUser = await this.userRepository.create(userCreateDto);

        await this.redisCacheRepository.saveData(newUser, newUser._id);

        return newUser;
    }
}
