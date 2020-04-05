const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "abcd1234",
    database: "investing"
});

exports.asyncQuery = (...args) =>
    new Promise((resolve, reject) =>
        pool.query(...args, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    );

exports.pool = pool;
