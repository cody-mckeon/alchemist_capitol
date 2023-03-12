import express from 'express';
import data from './data.js';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.get('/api/properties', (req, res) => {
  res.send(data.properties);
});

//publish to hosting service
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
