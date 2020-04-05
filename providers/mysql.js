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
    const createPortfolioTableQuery = "CREATE TABLE investing.portfolio (instrumentId INT NOT NULL PRIMARY KEY, holdings INT NOT NULL, FOREIGN KEY (instrumentId) REFERENCES instrument(instrumentId))";
    setupConnection.query(createPortfolioTableQuery, function (err, result) {
        genericQueryCallback(err, "Portfolio Table created");
    });
    const addInstrumentsQuery = "INSERT INTO investing.instrument(instrumentId,name,symbol,instrumentType) VALUES(1,'Euro US Dollar','EUR/USD','currency'),(10,'Euro Swiss Franc','EUR/CHF','currency'),(9,'Euro Japanese Yen','EUR/JPY','currency'),(956731,'Investing.com Euro Index','inveur','indice'),(2124,'US Dollar Euro','USD/EUR','currency'),(976573,'Sygnia Itrix Euro Stoxx 50 ETF','SYGEUJ','etf'),(997393,'NewWave EUR Currency Exchange Traded Note','NEWEURJ','etf'),(998227,'Diesel European Gasoil Futures','DSEL1c1','commodity'),(175,'Euro Stoxx 50','STOXX50','indice'),(15978,'Euronet Worldwide Inc','EEFT','equities'),(6,'Euro British Pound','EUR/GBP','currency'),(15,'Euro Australian Dollar','EUR/AUD','currency'),(16,'Euro Canadian Dollar','EUR/CAD','currency'),(52,'Euro New Zealand Dollar','EUR/NZD','currency'),(1487,'Australian Dollar Euro','AUD/EUR','currency'),(1525,'Canadian Dollar Euro','CAD/EUR','currency')";
    setupConnection.query(addInstrumentsQuery, function (err, result) {
        genericQueryCallback(err, "Instruments added");
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
    new Promise((resolve, reject) =>
        pool.query(...args, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    );

exports.pool = pool;
