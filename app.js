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
app.use('/scripts', express.static(__dirname + '/node_modules/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// This array needs to be updated with more states as the polls will be coming in.
statesArray = [
    ['SC', 'TX', 'MA', 'VA', 'MN', 'TN', 'AR', 'OK', 'VT', 'LA', 'GA', 'FL', 'OH', 'NC', 'NJ', 'MD', 'MI', 'CT', 'PA', 'WI', 'CA', 'AL', 'MS', 'IL', 'AZ', 'NY'],
    [4167, 4158, 3891, 3922, 3585, 5768, 5233, 5739, 5796, 5695, 5623, 3556, 5313, 5175, 3443, 4312, 5224, 5353, 4249, 3764, 5321, 5791, 5799, 5567, 5466, 4221]
];


/**
 *  This is the function that deals with downloading the JSON objects containing the polling
 *  data as well as extracting the latest polling data and writing it into the cache.
 *  The interval is meant to be for updating the polling data every hour.
 */
var interval = setInterval(function() {
    for (var i = 0; i < statesArray[0].length; i++) {
        (function (i) {
            var preview_suffix = '';
            var myUrl = 'http://www.realclearpolitics.com/epolls/json/' + statesArray[1][i] + '_historical' + preview_suffix + '.js?' + '';
            var jsonObject;
            var file = './public/javascripts/' + statesArray[0][i] + '.json';


            request({
                url: myUrl,
                json: true
            }, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log('Parsing ' + statesArray[0][i] + ' data...'); // Print the json response
                    jsonObject = JSON.parse(body.substr(12, body.length - 14));
                    var finalObject = {
                        "frontrunnerName": jsonObject.poll.rcp_avg[0].candidate[0].name,
                        "frontrunnerPoints": jsonObject.poll.rcp_avg[0].candidate[0].value,
                        "underdogName": jsonObject.poll.rcp_avg[0].candidate[1].name,
                        "underdogPoints": jsonObject.poll.rcp_avg[0].candidate[1].value,
                        "pollDate": jsonObject.poll.rcp_avg[0].date
                    };
                    jsonfile.writeFile(file, finalObject, function (err) {
                        console.error(err);
                    })
                }
            });
        })(i);
    }
}, 300000);

module.exports = app;
