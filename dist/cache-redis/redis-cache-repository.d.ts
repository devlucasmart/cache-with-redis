import Redis from 'ioredis';
export declare class RedisCacheRepository {
    private readonly redis;
    constructor(redis: Redis);
    saveData<T>(data: T, key: string): Promise<void>;
    getData<T>(key: string): Promise<T>;
}
