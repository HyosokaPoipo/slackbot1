var express = require('express')
, router = require('routes')
;
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/poipo', function (req, res, next) {
  console.log(req.body);
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', You are using slack bot poipo locally'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

