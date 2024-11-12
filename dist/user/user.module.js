"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const redis_cache_module_1 = require("../cache-redis/redis-cache.module");
const user_service_1 = require("./user.service");
const user_controler_1 = require("./user.controler");
const user_repository_1 = require("./user.repository");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./models/user.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [redis_cache_module_1.RedisCacheModule,
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/CACHE_WITH_REDIS'),
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
        ],
        controllers: [user_controler_1.UserController],
        providers: [user_service_1.UserService, user_repository_1.UserRepository],
        exports: [user_service_1.UserService, user_repository_1.UserRepository],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map