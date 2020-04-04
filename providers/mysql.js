const mysql = require('mysql');

const setupConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abcd1234"
});

const genericQueryCallback = (err, message) => {
    if (err) throw err;
    console.log(message);
};

setupConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql server");
    setupConnection.query("CREATE DATABASE investing", function (err, result) {
        genericQueryCallback(err, "Database created");
    });
    const createInstrumentTableQuery = "CREATE TABLE investing.instrument(instrumentId INTEGER NOT NULL PRIMARY KEY,name VARCHAR(41) NOT NULL,symbol VARCHAR(7) NOT NULL,instrumentType VARCHAR(9) NOT NULL)";
    setupConnection.query(createInstrumentTableQuery, function (err, result) {
        genericQueryCallback(err, "Instrument Table created");
    });
    const createPortfolioTableQuery = "CREATE TABLE investing.portfolio (instrumentId INT NOT NULL PRIMARY KEY,holdings INT NOT NULL)";
    setupConnection.query(createPortfolioTableQuery, function (err, result) {
        genericQueryCallback(err, "Portfolio Table created");
    });
    setupConnection.end(function (err) {
        genericQueryCallback(err, "Setup connection closed");
    });
});

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "abcd1234",
    database: "investing"
});

exports.asyncQuery = (...args) =>
    new Promise((res, rej) =>
        pool.query(...args, (err, result) => {
            if (err) rej(err);
            else res(result);
        })
    );

exports.pool = pool;
