"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCacheProviderFactory = void 0;
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
exports.redisCacheProviderFactory = {
    provide: 'REDIS_CLIENT',
    useFactory: async (configService) => {
        const host = configService.get('REDIS_HOST', 'localhost');
        const port = configService.get('REDIS_PORT', 6379);
        const password = configService.get('REDIS_PASSWORD', '');
        const db = configService.get('REDIS_DB', 0);
        const client = new ioredis_1.default({
            host,
            port,
            password,
            db,
        });
        client.on('error', (err) => console.error('Redis Client Error:', err));
        console.log(`Connected to Redis on ${host}:${port}`);
        return client;
    },
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=redis-cache-provider.factory.js.map