import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/properties', (req, res) => {
  res.send(data.properties);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
