import './NewsTweet.scss';
import React from 'react';
import axios from 'axios';

class NewsTweet extends React.Component {
  componentDidMount() {

  }
  getRecentTweets () {
    axios
      .get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
        screen_name: 'resilientcoders',
        count: '3',
      })
      .then((response) => {

      });
  }
  render () {
    return (
      <div className="news-tweet">
        <p>Need a website for your business? Our Bootcamp crew will be raring to code it in a few weeks. http://bit.ly/2aAw7Fd  #resilientlab</p>
      </div>
    )
  }
}

export default NewsTweet;
