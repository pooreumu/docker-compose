require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/mysql')
const redis = require('./db/redis').redisClient
redis.connect()

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

app.get('/', async (req, res, next) => {
    const conn = await db.pool.getConnection()
    try {
        const sql = 'select * from test_table'
        const [output] = await conn.query(sql)
        await redis.set('test', 'test', { EX: 720 })
        console.log({ output })
        res.status(200).json({ output })
    } catch (error) {
        console.error(error)
        res.status(500).send('server error')
    } finally {
        conn.release()
    }
})

app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
