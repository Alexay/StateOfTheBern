var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var jsonfile = require('jsonfile');
var util = require('util');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/scripts', express.static(__dirname + '/node_modules/datamaps/dist/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

sCarolinaPID = 4167;
nevadaPID = 5337;
texasPID = 4158;
//georgiaPID = 5623;
massachusettsPID = 3891;
virginiaPID = 3922;
minnesotaPID = 3585;
tennesseePID = 5768;
arkansasPID = 5233;
oklahomaPID = 5739;
vermontPID = 5796;

statesArray = [
    ['sCarolina', 'nevada', 'texas', 'massachusetts', 'virginia', 'minnesota', 'tennessee', 'arkansas', 'oklahoma', 'vermont'],
    [4167,5337,4158,3891,3922,3585,5768,5233,5739,5796]
];

for (var i = 0; i<statesArray[0].length; i++)
{
    console.log(statesArray[0][i]);
    console.log(statesArray[1][i]);
    var preview_suffix = '';
    var myUrl = 'http://www.realclearpolitics.com/epolls/json/' + statesArray[1][i] + '_historical' + preview_suffix + '.js?' + '';
    var jsonObject;
    var file = './public/javascripts/'+ statesArray[0][i] +'.json';


        request({
            url: myUrl,
            json: true,
        }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body); // Print the json response
                jsonObject = JSON.parse(body.substr(12, body.length - 14));
                jsonfile.writeFile(file, jsonObject, function (err) {
                    console.error(err);
                })
            }
        });

}
module.exports = app;
