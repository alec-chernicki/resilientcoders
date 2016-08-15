import './News.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import NewsItem from './NewsItem/NewsItem';
import NewsTweet from './NewsTweet/NewsTweet';
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
        <div className="section-main">
          <div className="section-container-secondary news">
            <div className="news-lists">
              <div className="news-list-container">
                <div className="news-page-header">
                  <div className="news-header">
                    <BinaryText>
                      In The News
                    </BinaryText>
                  </div>
                  <div className="divider"/>
                  <NewsTweet/>
                </div>
                <div className="news-list-title">
                  <h2>Interactive Content</h2>
                </div>
                <div className="news-featured">
                  <img src="http://blog.microsoftnewengland.com/wp-content/uploads/sites/31/2016/05/20160428_121105-e1462393008132-1024x576.jpg" alt="featured video"/>
                  <div className="video-play"/>
                  <div className="news-featured-text">
                    <p>Hour Of Code 2016</p>
                  </div>
                </div>
                <ul className="news-list">
                  {this.renderContentItems()}
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
