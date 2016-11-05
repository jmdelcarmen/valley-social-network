const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var authenticationController = require('./server/controllers/authentication-controller');
mongoose.connect("mongodb://localhost/valleychat");

const app = express();

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));


app.get('/', (req, res) => {
  res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup)
app.post('/api/user/login', authenticationController.login)

app.listen('3000', () => {
  console.log('Listening on port 3000.');
});
