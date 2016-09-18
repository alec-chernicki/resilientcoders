const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'JUoZndsFbQPDrETHcL5dHD152',
  consumer_secret: '12AF9QxQScFGuS63U4nvB6PdAsexilCoBoCEyzBTe8U8T3OlKI',
  access_token_key: '53760873-6kqDhGvKWPfSWSenktkBsHZjoZR4UFUEBa07Dax4d',
  access_token_secret: 'SAdF1s1kSJj8ly58HltWEIAbcpVM3QWXOOapjKOtQrvRi'
});

const data = {
  screen_name: 'resilientcoders',
  count: 1,
  exclude_replies: true
};

exports.getTwitter  = (req, res) => {
  client.get('https://api.twitter.com/1.1/statuses/user_timeline.json', data,
    (error, tweets, response) => {
      if (error) {
        res.sendStatus(500);
        throw error
        return
      };
      res.json(tweets)
    });
}
