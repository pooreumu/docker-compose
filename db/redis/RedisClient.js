const redis = require('redis')
module.exports = class RedisClient {
    constructor() {
        this.redisClient = redis.createClient({ url: 'redis://@redis:6379' })
        this.redisClient.on('connect', () => {
            console.log('redis connected')
        })
    }
}
