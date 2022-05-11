import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './src/routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('running');
});