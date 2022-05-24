import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import path from 'path';

import { PORT, MONGO } from './config/config.js';

import dashboardRouter from './app/dashboard/router.js';
import categoryRouter from './app/category/router.js';

const app = express();
const __dirname = path.resolve('');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte/')));

mongoose
  .connect(MONGO)
  .then(() => console.log('database conected'))
  .catch((err) => console.log('error', err));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.use('/', dashboardRouter);
app.use('/category', categoryRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
