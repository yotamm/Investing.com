const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');
const app = express();

app.use(cors({origin: true})); //Enable CORS to allow requests from all origins - good enough for the purpose of this assignment but not for production purposes (security risk)
app.use(express.json());
app.use('/', indexRouter);
module.exports = app;
