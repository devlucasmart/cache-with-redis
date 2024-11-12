import { Module } from '@nestjs/common';
import {RedisCacheModule} from "../cache-redis/redis-cache.module";
import {UserService} from "./service/user.service";
import {UserController} from "./controller/user.controler";
import {UserRepository} from "./repository/user.repository";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./models/user.entity";

@Module({
    imports: [RedisCacheModule,
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/CACHE_WITH_REDIS'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),  // Registra o modelo User
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository], // Adicione o UserRepository aqui
    exports: [UserService, UserRepository],
})
export class UserModule {}
