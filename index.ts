import express from 'express';
import routes from './src/routes';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('running');
});