'use stict';
const express = require('express');
const compress = require('compression');
const path = require('path');

// Create Express App
const app = express();

// Initialize Middleware
app.set('port', process.env.PORT || 3000);
// app.set('view engine', 'jade');
app.use(compress());
app.use(express.static(`${__dirname}/build`));
app.listen(app.get('port'));

// Controllers

// Assign Routes and Controllers
app.get('/:palette', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});
