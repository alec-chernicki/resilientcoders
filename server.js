'use stict';
const express = require('express');
const compress = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');

// Create Express App
const app = express();

// Initialize Middleware
app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'jade');
app.use(compress());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/build`));
app.use("/quote", express.static(__dirname + "/erl/"));
app.use("/rebuild", express.static(__dirname + "/rebuild/"));
app.listen(app.get('port'));

const subscriptionController = require('./controllers/subscriptionController');

// Assign Routes and Controllers for API, i.e. post data to HubSpot

app.post('/api/subscribe/general', subscriptionController.postSubscriptionGeneral)
app.post('/api/subscribe/mentor', subscriptionController.postSubscriptionMentor)
app.post('/api/subscribe/company', subscriptionController.postSubscriptionCompany)


// Assign Routes and Controllers for main website and ERL
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
app.get('/quote', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/erl/index.html'));
});
app.get('/rebuild', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/rebuild/index.html'));
});
app.get('/orientation', (req, res) => {
  res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSdp2K_4p7gYfFiyCIvouYZXf9eHDwkYDon3AVHGYOQr8Z8uBg/viewform');
});
app.get('/canvas', (req, res) => {
  res.redirect('https://canvas.instructure.com/enroll/K96A8P');
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
