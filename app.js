var express = require('express'),
 router = require('routes'),
 hisoka_env = require('node-env-file')
;
var bodyParser = require('body-parser');

hisoka_env(__dirname+'/.env');
var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) {
  //console.log(req);
  res.writeHead(200, {'Content-TYpe': 'text/html'});
   res.write(`<h1>Hellow There...</h1><br /><br />Thanks for visiting... :) <br><br>
        <a href="https://slack.com/oauth/authorize?scope=bot&client_id=281187440289.284693862498">
          <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x,
            https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" />
        </a>

    `);
    //res.status(200).send('Hello world!');
    res.end();
  }
);


app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/poipo', function (req, res, next) {
  console.log(req.body);
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', You are using poiposlackbot eeaa'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});


app.post('/testcommand', function (req, res, next){
	console.log(req.body);
	var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', You are using poiposlackbot eeaa'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

