import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import logger from 'morgan';
import path from 'path';
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';

import { PORT, MONGO } from './config/config.js';

import dashboardRouter from './app/dashboard/router.js';
import categoryRouter from './app/category/router.js';
import nominalRouter from './app/nominal/router.js';

const app = express();
const __dirname = path.resolve('');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);
app.use(flash());
app.use(methodOverride('_method'));
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
  .catch((err) => console.log('database disconection', err));

app.use('/', dashboardRouter);
app.use('/category', categoryRouter);
app.use('/nominal', nominalRouter);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));
