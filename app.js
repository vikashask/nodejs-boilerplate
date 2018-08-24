var express = require('express'); // express js
var http = require('http'); // http module
var bodyParser = require('body-parser'); 

var ApplicationSettings = require('./config/ApplicationSettings');
var generalVariableSettings = require('./config/generalVariableSettings');
var args = process.argv;
if (!args[2]) {
  ApplicationSettings.ENV = 'local';
} else {
  ApplicationSettings.ENV = args[2];
}
console.log("Boilerplate using envoirnment", ApplicationSettings.ENV);
if (!ApplicationSettings.hasAllSettings()) {
  console.log("Couldn't load environment settings");
  process.exit(-1);
}
genVarSettings = ApplicationSettings.generalVariableSettings();

var users = require("./routes/users");

// var appSettings = require("./routes/appSettings");

var app = express();
app.set('port', generalVariableSettings.local.local_port);
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  if (req && req.files) {
    console.log("Multipart request");
  } else {
    console.log("Request Parameters: ", req.body);
  }
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome to Node boilerplate')
});

// getting all user list
app.get('/user_list', users.userList);
app.post('/user_delete', users.userDelete);
app.post('/user_insert', users.userInsert);
// app.post('/check_user_login', users.checkUserLogin);
// app.post('/state_list', state.stateList);


http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening on port ', app.get('port'), " environment ", ApplicationSettings.ENV);
});