const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'http://www.resilientcoders.org/',
  cacheTime: 600000,
  urls: [
    { url: '/',  changefreq: 'daily', priority: 0.9 },

    { url: '/get-involved/', changefreq: 'daily',  priority: 0.7 },
    { url: '/get-involved/company', changefreq: 'daily',  priority: 0.2 },
    { url: '/get-involved/mentor', changefreq: 'daily',  priority: 0.2 },
    { url: '/get-involved/student', changefreq: 'daily',  priority: 0.2 },

    { url: '/bootcamp/', changefreq: 'daily',  priority: 0.5 },
    { url: '/bootcamp/roster', changefreq: 'daily',  priority: 0.2 },

    { url: '/lab/', changefreq: 'daily',  priority: 0.5 },
    { url: '/news/', changefreq: 'daily',  priority: 0.4 },
    { url: '/team/', changefreq: 'daily',  priority: 0.3 },
  ]
});

exports.getSitemap  = (req, res) => {
  sitemap.toXML(function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send( xml );
  });
}
