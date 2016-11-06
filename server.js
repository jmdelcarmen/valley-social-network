const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');

mongoose.connect("mongodb://localhost/valleychat");


app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));


app.get('/', (req, res) => {
  res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup)
app.post('/api/user/login', authenticationController.login)

//profile
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);

app.listen('3000', () => {
  console.log('Listening on port 3000.');
});
