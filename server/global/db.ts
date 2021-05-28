import { REDIS_HOST,REDIS_PORT,REDIS_DB } from '../global/enviroment';
const optionsRedisCon = {
    host: REDIS_HOST,
    port: REDIS_PORT,
    db: REDIS_DB,
    connect_timeout: 5000
}