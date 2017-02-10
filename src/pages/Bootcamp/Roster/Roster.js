import './Roster.scss';
import React from 'react';
import RosterMembers from './RosterMembers/RosterMembers';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Hero from '../../../components/Containers/Hero/Hero';
import RosterHeroImage from './roster-hero.png';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const Team = (props) => {
  return (
    <RouteTransition>
      <Hero
        titleLineOne="The team"
        image={RosterHeroImage}
        centered={true}
      >
        <div className="divider divider__red" />
        <p>
          Strong student leadership, dedicated staff, and an impressive board make Resilient Coders
          what it is. The ranges of experience and background vary across the team. But our people
          have in common a belief in the social mission, and the muscle to make real change.
        </p>
      </Hero>

      <div id="bootcamproster">
      <CenteredContainerOuter color="grey" className="p-bottom">
        <CenteredContainerInner className="pull-up-1" color="white">
          <RosterMembers/>
        </CenteredContainerInner>
      </CenteredContainerOuter>
      </div>


      <div className="team">
        <div className="team-container">

        </div>
      </div>
    </RouteTransition>
  );
}

export default Team
