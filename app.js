const express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const db = require('./db/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shop');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter );

module.exports = app;
