import {ConfigService} from "@nestjs/config";
import Redis from "ioredis";

export const redisCacheProviderFactory = {
    provide: 'REDIS_CLIENT',
    useFactory: async (configService: ConfigService): Promise<Redis> => {
        const host = configService.get<string>('REDIS_HOST', 'localhost');
        const port = configService.get<number>('REDIS_PORT', 6379);
        const password = configService.get<string>('REDIS_PASSWORD', '');
        const db = configService.get<number>('REDIS_DB', 0);

        const client = new Redis({
            host,
            port,
            password,
            db,
        });

        // Listener para tratar erros
        client.on('error', (err) => console.error('Redis Client Error:', err));

        console.log(`Connected to Redis on ${host}:${port}`);

        return client;
    },
    inject: [ConfigService],
};