import './TeamMembers.scss';
import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import teamMembersConfig from './teamMembersConfig';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import {Link} from 'react-router';

class Work extends React.Component {
  renderTeamMembers() {
    return teamMembersConfig.map((item, i) => (
      <TeamMember
        key={i}
        image={item.image}
        name={item.name}
        title={item.title}
        bio={item.bio}
      />
    ));
  }
  render() {
    return (
      <div className="team-members">
        {this.renderTeamMembers()}
        <div className="team-members__join">
          <div className="team-members__join__container">
            <div>
              <h2>
                Interested in joining?
              </h2>
              <p>
                There's more than one way to join the code literacy movement. Check out our
                opportunities for both companies and individuals.
              </p>
              <ButtonPrimary to="/get-involved">
                Get Involved
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
