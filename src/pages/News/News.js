import './News.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import NewsItem from './NewsItem/NewsItem';
import NewsTweet from './NewsTweet/NewsTweet';
import Tweet from '../../components/Tweet/Tweet';
import newsItemConfig from './newsItemConfig';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

class News extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 500)
  }
  renderPressItems() {
    return newsItemConfig
      .press
      .map((item, i) => (
        <NewsItem
          key={i}
          href={item.link}
          text={item.title}
          note={item.note}
        />
      ));
  }
  renderAwardsItems() {
    return newsItemConfig
      .awards
      .map((item, i) => (
        <NewsItem
          key={i}
          href={item.link}
          text={item.title}
          note={item.note}
        />
      ));
  }
  renderContentItems() {
    return newsItemConfig
      .content
      .map((item, i) => (
        <NewsItem
          key={i}
          href={item.link}
          text={item.title}
          note={item.note}
        />
      ));
  }
  render() {
    return (
      <RouteTransition>
        <div className="news">
          <div className="news-container">
            <div className="news-lists">
              <div className="news-list-container">
                <div className="news-page-header">
                  <div className="news-header">
                    <BinaryText>
                      In The News
                    </BinaryText>
                  </div>
                  <div className="divider"/>
                  <div className="news-tweet">
                    <Tweet/>
                  </div>
                </div>
                <div className="news-list-title">
                  <h2>Video and Interactive Content</h2>
                </div>
  
                <ul className="news-list">
                  {this.renderContentItems()}
                </ul>
                <div className="news-list-title">
                  <h2>Awards</h2>
                </div>
                <ul className="news-list">
                  {this.renderAwardsItems()}
                </ul>
              </div>
              <div className="news-list-container">
                <div className="news-list-title">
                  <h2>Press</h2>
                </div>
                <ul className="news-list">
                  {this.renderPressItems()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RouteTransition>
    )
  }
}

export default News;
