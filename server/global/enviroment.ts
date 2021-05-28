export const NODE_ENV: string = process.env.NODE_ENV || 'development';
export const SERVER_PORT: number = Number(process.env.PORT) || 3333;
export const HOSTNAME: string = process.env.HOSTNAME || 'api';
export const REDIS_HOST: string = process.env.REDIS_HOST || '127.0.0.1';
export const REDIS_PORT: number = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_DB: number = Number(process.env.REDIS_DB) || 0;
export const REDIS_DBNAME: string = process.env.REDIS_DBNAME || '';