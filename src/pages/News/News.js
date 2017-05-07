import './News.scss';
import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import Tweet from '../../components/Tweet/Tweet';
import newsItemConfig from './newsItemConfig';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Helmet from 'react-helmet';

import UITable from 'UILibrary/table/UITable';
import UITableHeader from 'UILibrary/table/UITableHeader';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection';

class News extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 500)
  }
  renderPressItems() {
    return newsItemConfig.press.map((item, i) => (
      <NewsItem
        key={i}
        href={item.link}
        text={item.title}
        note={item.note}
      />
    ));
  }
  renderAwardsItems() {
    return newsItemConfig.awards.map((item, i) => (
      <NewsItem
        key={i}
        href={item.link}
        text={item.title}
        note={item.note}
      />
    ));
  }
  renderContentItems() {
    return newsItemConfig.content.map((item, i) => (
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
        <Helmet title="News" />
        <UILayout className="p-top-11 p-bottom-6">
          <UISection>

            <UIFlexRow>
              <UIFlex className="m-right-3">
                <UICard className="p-all-3 m-bottom-3 with-shadow">
                  <h1 className="text-darkest">
                    News
                  </h1>
                  <div className="divider"/>
                  <div className="news-tweet">
                    <Tweet/>
                  </div>
                </UICard>

                <UITable className="m-bottom-3 with-shadow">
                  <UITableHeader title="Video and interactive content" colSpan={2} />
                  {this.renderContentItems()}
                </UITable>

                <UITable className="with-shadow">
                  <UITableHeader title="Awards" colSpan={2}/>
                  {this.renderAwardsItems()}
                </UITable>
              </UIFlex>

              <UIFlex>


                <UITable className="with-shadow">
                  <UITableHeader title="Press" colSpan={2}/>
                  {this.renderPressItems()}
                </UITable>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default News;
