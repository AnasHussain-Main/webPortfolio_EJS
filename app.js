const createError = require('http-errors'); // Handle HTTP Errors
const express = require('express'); //Imports Express framework 
const path = require('path'); // Path utilizes module 
const cookieParser = require('cookie-parser'); // Parse Cookie Middleware 
const logger = require('morgan'); //HTTP request logger
const expressLayouts = require('express-ejs-layouts'); // Imported express-ejs-layout
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');  
// This commaned sets 'layout.ejs' as the default layout for all views

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

