import { REDIS_HOST,REDIS_PORT,REDIS_DB } from '../global/enviroment';
import * as redis from 'redis';
import { promisify } from 'util';

export default class DBRedis {
    private optionsRedisCon:any;
    private client:any;
    private dbMethods:any;
    constructor(){
        this.optionsRedisCon = {
            host: REDIS_HOST,
            port: REDIS_PORT,
            db: REDIS_DB,
            connect_timeout: 5000
        }
        this.client = redis.createClient(this.optionsRedisCon);
        this.dbMethods =  {
            hgetall: promisify(this.client.hgetall).bind(this.client),
            hmset: promisify(this.client.hmset).bind(this.client),
            keys: promisify(this.client.keys).bind(this.client),
            exists: promisify(this.client.exists).bind(this.client),
        }
        return this.dbMethods;
        
    }
}
// const client = redis.createClient(optionsRedisCon)
// module.exports = {
//     hgetall: promisify(client.hgetall).bind(client),
//     hmset: promisify(client.hmset).bind(client),
//     keys: promisify(client.keys).bind(client),
//     exists: promisify(client.exists).bind(client),
// }