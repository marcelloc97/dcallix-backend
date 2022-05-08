import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './src/routes';

dotenv.config({ path: './.env' });

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('running');
});