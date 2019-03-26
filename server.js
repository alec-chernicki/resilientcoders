'use stict';
const express = require('express');
const compress = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const robots = require('express-robots');
const cors = require('cors');

// Create Express App
const app = express();

// Initialize Express Middleware
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(compress());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(robots({UserAgent: '*', Disallow: '/api'}))

// Point the main directory to /build (main website), if someone requests /quote or /rebuild
// serve those folders instead.
app.use(express.static(`${__dirname}/build`));
// app.use("/quote", express.static(__dirname + "/erl/"));
app.use("/rebuild", express.static(__dirname + "/rebuild/"));

// This actually starts the Express application
app.listen(app.get('port'));

const subscriptionController = require('./controllers/subscriptionController');
const twitterController = require('./controllers/twitterController');
const sitemapController = require('./controllers/sitemapController');
const eventbriteController = require('./controllers/eventbriteController');

//------------------------------------------------------------
// Assign Routes and Controllers for API
//------------------------------------------------------------

// For Hubspot form subscriptions
app.post('/api/subscribe/general', subscriptionController.postSubscriptionGeneral)
app.post('/api/subscribe/mentor', subscriptionController.postSubscriptionMentor)
app.post('/api/subscribe/company', subscriptionController.postSubscriptionCompany)
app.post('/api/subscribe/diversityplaybook', subscriptionController.postSubscriptionDiversityPlaybook)

// To get last tweet from @resilientcoders
app.get('/api/twitter', twitterController.getTwitter);

// For accessing eventbrite data
// app.get('/api/eventbrite', eventbriteController.getAllEvents);
app.get('/api/eventbrite', cors(), eventbriteController.getEvent);

// This is for SEO purposes
app.get('/sitemap.xml', sitemapController.getSitemap);

// To get meta image for social sharing
app.get('/api/meta-image', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/serverAssets/meta-image.png'));
})

//------------------------------------------------------------
// Assign Routes and Controllers for main website and ERL
//------------------------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
/*
app.get('/quote', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/erl/index.html'));
});
*/
app.get('/rebuild', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/rebuild/index.html'));
});
app.get('/orientation', (req, res) => {
  res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSdp2K_4p7gYfFiyCIvouYZXf9eHDwkYDon3AVHGYOQr8Z8uBg/viewform');
});
app.get('/donate', (req, res) => {
  res.redirect('https://paypal.me/resilientcoders');
});
app.get('/canvas', (req, res) => {
  res.redirect('https://canvas.instructure.com/enroll/K96A8P');
});
app.get('/50x30', (req, res) => {
  res.redirect('https://resilient-labs.github.io/50x30/');
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
