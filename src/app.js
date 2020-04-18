const express = require('express');
const HTTP_CODE = require('http-status-codes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => res.sendStatus(HTTP_CODE.OK));

module.exports = app;
