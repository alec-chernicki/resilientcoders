import './Work.scss';
import React, { PropTypes } from 'react';
import WorkItem from './WorkItem/WorkItem';
import workConfig from './workConfig';

class Work extends React.Component {
  renderWorkItems () {
    return workConfig.map((item, index) => (
      <WorkItem
        key={index}
        image={item.image}
        title={item.title}
        note={item.note}
        description={item.description}
      />
    ))
  }
  render () {
    return (
      <div className="work-background-container">
        <div className="work-items-container">
          <div className="work">
            {this.renderWorkItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
