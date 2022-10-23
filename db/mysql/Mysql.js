const mysql = require('mysql2/promise')
const dbConfig = require('./config')

module.exports = class Mysql {
    constructor() {
        this.pool = mysql.createPool(dbConfig)
    }
}
