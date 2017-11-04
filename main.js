
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var timeout = require('req-timeout');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(timeout(3000));

//mongoose.connect('mongodb://snapcity:abc123@ds119685.mlab.com:19685/heroku_g453zfnd');
//locationController = require('./controllers/locationController');
//userController = require('./controllers/userController');
//Static file serving.

app.use('/css', express.static(__dirname + '/css'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
		res.sendFile(__dirname + '/index.html');
});

//app.get('/api/getLocations', locationController.getLocations);
//app.post('/api/completeChallenge', userController.completeChallenge);
//app.post('/api/createUser', userController.createUser);
//app.get('/api/getCompletedChallenges/:id', userController.getCompletedChallenges);
//app.get('/api/getUser/:id', userController.getUser);
//app.get('/api/getImage/:id', locationController.getImage);
//app.get('/api/getGalleryPictures/:id/:main', locationController.getGalleryPictures);

app.listen(process.env.PORT || 8080, function() {
    console.log('I\'m Listening on port 3000...');
})

