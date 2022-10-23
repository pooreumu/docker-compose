const redis = require('redis')
module.exports = class RedisClient {
    constructor() {
        this.redisClient = redis.createClient({
            // docker-compose.yaml depends_on이랑 같게
            url: process.env.REDIS_URL || 'redis://@redis:6379',
        })
        this.redisClient.on('connect', () => {
            console.log('redis connected')
        })
    }
}
