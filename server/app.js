require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require('cors')

//route imports
var indexRouter = require('./routes/index');
var userApiRouter = require('./routes/api/users');
var productApiRouter = require('./routes/api/products');
var cartApiRouter = require('./routes/api/cart');
var orderApiRouter = require('./routes/api/order');
var categoryRoute = require('./routes/api/category');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


//routes
app.use('/', indexRouter);
app.use('/adminpanel', indexRouter);

app.use('/api/user', userApiRouter);
app.use('/api/product', productApiRouter);
app.use('/api/cart', cartApiRouter);
app.use('/api/order', orderApiRouter);
app.use('/api/category', categoryRoute)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', (err) => console.log(err.message))
db.on('open', () => console.log('Connected to database'))

module.exports = app;
