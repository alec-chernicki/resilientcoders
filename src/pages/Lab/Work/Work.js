import './Work.scss';
import React, { PropTypes } from 'react';
import WorkItem from './WorkItem/WorkItem';
import workConfig from './workConfig';

class Work extends React.Component {
  renderWorkItems () {
    return workConfig.map((item) => (
      <WorkItem
        image={item.image}
        title={item.title}
        description={item.description}
      />
    ));
  }
  render () {
    return (
      <div className="work">
        {this.renderWorkItems()}
      </div>
    );
  }
}

export default Work;
