/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import connectToDB from "./db/index.js";
import {graphRouter} from './routes/graph.js'
connectToDB().then(r=> console.log(r))
const app = express();
import 'dotenv/config';
const PORT = process.env.PORT || 5000;
import DBNode from './db/node.js';
// import * as dotenv from "dotenv"
// dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/graph', graphRouter);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, async () => {
  const qaq = await DBNode.find();
  console.log(`Server running on port ${PORT}`);
});
