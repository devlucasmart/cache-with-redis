import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { RedisCacheRepository } from "./repository/redis-cache-repository";
import { redisCacheProviderFactory } from "./factory/redis-cache-provider.factory";

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [
        redisCacheProviderFactory,
        RedisCacheRepository,
    ],
    exports: [RedisCacheRepository, 'REDIS_CLIENT'],
})
export class RedisCacheModule {}
