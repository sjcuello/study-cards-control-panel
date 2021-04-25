import express from 'express';
import consign from 'consign';

const app = express();

consign()
  .include('libs/middlewares.js') 
  .then('src/routes')
  .include('libs/boots.js')
  .into(app);
