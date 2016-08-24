'use stict';
const express = require('express');
const compress = require('compression');
const path = require('path');
const axios = require('axios');

// Create Express App
const app = express();

// Initialize Middleware
app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'jade');
app.use(compress());
app.use(express.static(`${__dirname}/build`));
app.listen(app.get('port'));

// Controllers

const fetchTweets = () => {
  const twitterAPIURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

  axios.get(twitterAPIURL, {
    screen_name: 'resilientcoders',
    count: 3,
  })
  .then(response => {
    return response
  });
}

app.get('/api/socialimage', (req,res,next) => {
  res.sendFile(path.resolve(__dirname + '/serverAssets/meta-image.jpg'));
})

app.get('/api/tweets', (req, res, next) => {
  fetchTweets()
    .then(tweets => res.json(tweets))
    .catch(() => next(new Error('Error fetching tweets')));
});

// Assign Routes and Controllers
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});
