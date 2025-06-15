import Redis from "ioredis";

export const redisClient = new Redis();
export const pub = new Redis();
export const sub = new Redis();
