require('dotenv').config();

'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const NAME = process.env.NAME;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
  console.log('Hello '+NAME);
});