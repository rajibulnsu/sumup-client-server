import express from 'express';
import bodyParser from 'body-parser';

import getRandomDate from './helpers/getRandomDate';
import { generateTransactions, getLatestTransactions } from './services/transactions';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/transactions', (req, res) => {
  generateTransactions();
  const data = getLatestTransactions();

  res.status(200).json({ data });
});
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Backend' + getRandomDate().toString()});
});

app.listen(port, () =>
  console.log(`Listening on port ${port} | http://localhost:5000`)
);
