import './Work.scss';
import React, { PropTypes } from 'react';
import WorkItem from './WorkItem/WorkItem';
import workConfig from './workConfig';

class Work extends React.Component {
  renderColumnOneItems () {
    let items = [];
    for (let i = 0; i <= 2; i++) {
      let item = workConfig[i];
      console.log(item);
      items.push(
        <WorkItem
          key={i}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )
    }
    return items;
  }
  renderColumnTwoItems () {
    let items = [];
    for (let i = 3; i <= 5; i++) {
      let item = workConfig[i];
      console.log(item);
      items.push(
        <WorkItem
          key={i}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )
    }
    return items;
  }
  render () {
    return (
      <div className="work">
        <div className="work-column one">
          {this.renderColumnOneItems()}
        </div>
        <div className="work-column two">
          {this.renderColumnTwoItems()}
        </div>
      </div>
    );
  }
}

export default Work;
