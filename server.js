var createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();

const app = express();

require('./config/database');


app.use(logger('dev'));
app.use(express.json());

app.use(express.json());


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API routes here
var indexRouter = require('./routes/index');
var apiIndexRouter = require('./routes/api/index');
var usersRouter = require('./routes/api/users');
var organizationsRouter = require('./routes/api/organizations')
var requestsRouter = require('./routes/api/requests')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/', apiIndexRouter);
app.use('/api/users', usersRouter);
app.use('/api/organizations',organizationsRouter);
app.use('/api/requests',requestsRouter);


// Catch all routes

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// Configure port 3001 instead of 3000
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});