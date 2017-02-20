require('babel-register');

const router = require('./src/routeConfig/routes').default;
const Sitemap = require('../').default;

(
  new Sitemap(router)
    .build('http://www.resilientcoders.org')
    .save('./sitemap.xml')
);
