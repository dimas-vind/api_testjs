const mysql = require('mysql2/promise')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bismillah',
    database: 'data'
})

module.exports = { db }