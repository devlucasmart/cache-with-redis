"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const redis_cache_repository_1 = require("../cache-redis/redis-cache-repository");
let UserService = class UserService {
    constructor(userRepository, redisCacheRepository) {
        this.userRepository = userRepository;
        this.redisCacheRepository = redisCacheRepository;
    }
    async getUserById(userId) {
        const userCache = await this.redisCacheRepository.getData(userId);
        if (userCache) {
            return userCache;
        }
        const userRepository = await this.userRepository.findById(userId);
        if (!userRepository) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        await this.redisCacheRepository.saveData(userRepository, userId);
        return userRepository;
    }
    async saveUser(userCreateDto) {
        const newUser = await this.userRepository.create(userCreateDto);
        await this.redisCacheRepository.saveData(newUser, newUser._id);
        return newUser;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        redis_cache_repository_1.RedisCacheRepository])
], UserService);
//# sourceMappingURL=user.service.js.map