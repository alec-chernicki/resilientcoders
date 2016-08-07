import './TeamMembers.scss';
import React, { PropTypes } from 'react';
import TeamMember from './TeamMember/TeamMember';
import teamMembersConfig from './teamMembersConfig';

class Work extends React.Component {
  renderColumnOneItems () {
    let items = [];
    for (let i = 0; i <= 2; i++) {
      let item = teamMembersConfig[i];
      items.push(
        <TeamMember
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
      let item = teamMembersConfig[i];
      items.push(
        <TeamMember
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
      <div className="team">
        <div className="team-column one">
          {this.renderColumnOneItems()}
        </div>
        <div className="team-column two">
          {this.renderColumnTwoItems()}
        </div>
      </div>
    );
  }
}

export default Work;
