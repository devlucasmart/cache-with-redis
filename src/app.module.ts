import { Module } from '@nestjs/common';
import { RedisCacheModule } from './cache-redis/redis-cache.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RedisCacheModule, UserModule],
})
export class AppModule {}
