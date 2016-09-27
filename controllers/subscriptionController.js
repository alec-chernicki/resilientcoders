const axios = require('axios');
var Qs = require('qs');


// TODO: All these functions are duplicated, refactor

exports.postSubscriptionGeneral = (req, res) => {
  const postData =  Qs.stringify({
    'email': req.body.email,
    'hs_context': JSON.stringify({
      "hutk": req.cookies.hubspotutk,
      "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      "pageUrl": "http://www.example.com/form-page",
      "pageName": "Resilient Coders",
    })
  });

  axios({
    url: "/uploads/form/v2/2253693/1c55b765-1557-4ee8-af8c-fa7c93f7317e",
    method: 'POST',
    baseURL: 'http://forms.hubspot.com',
    headers: {
  		'Content-Type': 'application/x-www-form-urlencoded',
  		'Content-Length': postData.length
  	},
    data: postData
  })
  .then((response) => {
    console.log('Body: ' + response)
    return res.sendStatus(200)
  })
  .catch((e) => {
    console.log("Problem with request " + e.message)
    return res.sendStatus(500)
  })
};

exports.postSubscriptionMentor = (req, res) => {
  const postData =  Qs.stringify({
    'firstname': req.body.firstName,
    'lastname': req.body.lastName,
    'company': req.body.company,
    'email': req.body.email,
    'hs_context': JSON.stringify({
      "hutk": req.cookies.hubspotutk,
      "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      "pageUrl": "http://www.example.com/form-page",
      "pageName": "Resilient Coders",
    })
  });

  axios({
    url: "/uploads/form/v2/2253693/22885b9d-aad6-4184-8e73-ecb19d207f28",
    method: 'POST',
    baseURL: 'http://forms.hubspot.com',
    headers: {
  		'Content-Type': 'application/x-www-form-urlencoded',
  		'Content-Length': postData.length
  	},
    data: postData
  })
  .then((response) => {
    console.log('Body: ' + response)
    return res.sendStatus(200)
  })
  .catch((e) => {
    console.log("Problem with request " + e.message)
    return res.sendStatus(500)
  })
};

exports.postSubscriptionCompany = (req, res) => {
  const postData =  Qs.stringify({
    'firstname': req.body.firstName,
    'lastname': req.body.lastName,
    'email': req.body.email,
    'company': req.body.company,
    'hs_context': JSON.stringify({
      "hutk": req.cookies.hubspotutk,
      "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      "pageUrl": "http://www.example.com/form-page",
      "pageName": "Resilient Coders",
    })
  });

  axios({
    url: "/uploads/form/v2/2253693/65cdc2ba-8e62-4c9c-9e67-c0d8c8ac82bd",
    method: 'POST',
    baseURL: 'http://forms.hubspot.com',
    headers: {
  		'Content-Type': 'application/x-www-form-urlencoded',
  		'Content-Length': postData.length
  	},
    data: postData
  })
  .then((response) => {
    console.log('Body: ' + response)
    return res.sendStatus(200)

  })
  .catch((e) => {
    console.log("Problem with request " + e.message)
    return res.sendStatus(200)
  })
};
