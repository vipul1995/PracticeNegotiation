var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
const multer = require('multer');
var cors = require('cors')

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/PracticeNegotiation", { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var adminLogin = require('./routes/adminLogin');
var forgetPassword = require('./routes/forgetPassword');
var book = require('./routes/book');
var pollQue = require('./routes/pollQue');
var quizs = require('./routes/quizs');
var Cases = require('./routes/addCases');
var CaseType = require('./routes/addNewCaseType');
var seminars = require('./routes/seminars');
var learns = require('./routes/learns');

var app = express();
app.use(cors()) 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('./public'));

app.use(session(
  { secret: 'dsfgvsdgrgredgbdrefthtrfdhn' ,
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use('/api/adminLogins', adminLogin);
app.use('/api/forgetPassword', forgetPassword);
app.use('/api/book', book);
app.use('/api/PollQue', pollQue);
app.use('/api/Quizs', quizs);
app.use('/api/Cases', Cases);
app.use('/api/NewCaseType', CaseType);
app.use('/api/seminars', seminars); 
app.use('/api/learns', learns);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.sendfile(path.join(__dirname,'dist/index.html'));
});

module.exports = app;
