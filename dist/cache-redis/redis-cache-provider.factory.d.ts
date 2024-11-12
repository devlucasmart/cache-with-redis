import { ConfigService } from "@nestjs/config";
import Redis from "ioredis";
export declare const redisCacheProviderFactory: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<Redis>;
    inject: (typeof ConfigService)[];
};
