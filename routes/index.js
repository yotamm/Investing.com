const express = require('express');
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { asyncQuery } = require("../providers/mysql");

router.get('/portfolio', asyncHandler(async (req, res) => {
  const query = 'SELECT instrument.instrumentId,name,symbol,instrumentType,holdings FROM portfolio,instrument WHERE portfolio.instrumentId=instrument.instrumentId';
  const result = await asyncQuery(query);
  res.json(result);
}));

router.delete('/portfolio/:instrument', asyncHandler(async (req, res) => {
  const instrument = parseInt(req.params['instrument']);
  const query = 'DELETE FROM portfolio WHERE instrumentId=?';
  const result = await asyncQuery(query, [instrument]);
  res.json(result.affectedRows === 1);
}));

router.post('/portfolio', asyncHandler(async (req, res) => {
  const instrumentId = req.body.instrumentId;
  const holdings = req.body.holdings;
  const query = 'INSERT INTO portfolio(instrumentId,holdings) VALUES (?,?) ON DUPLICATE KEY UPDATE holdings=?';
  const result = await asyncQuery(query, [instrumentId, holdings, holdings]);
  res.json(result.affectedRows === 1);
}));

router.get('/instruments', asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM instrument';
  const result = await asyncQuery(query);
  res.json(result);
}));

module.exports = router;
