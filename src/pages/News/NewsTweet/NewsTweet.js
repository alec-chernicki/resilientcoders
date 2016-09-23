import './NewsTweet.scss';
import React from 'react';
import axios from 'axios';

class NewsTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latestTweet: ''
    }
  }
  componentDidMount() {
    axios('/api/twitter')
      .then(({data}) => {
        console.log(data);
        this.setState({ latestTweet: data[0].text })
      })
      .catch((e) => {
        console.log(e.message);
      })
  }
  getRecentTweets() {
    axios
      .get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
      screen_name: 'resilientcoders',
      count: '3'
    })
      .then((response) => {});
  }
  render() {
    return (
      <div className="news-tweet">
        <p>{this.state.latestTweet}</p>
      </div>
    )
  }
}

export default NewsTweet;
