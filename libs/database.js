const mysql = require('mysql')
const co = require('co-mysql')
const config = require('../config')

const options = {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME ,
    port: config.DB_PORT
}
let conn = mysql.createPool(options)
let pool = co(conn)
module.exports= pool