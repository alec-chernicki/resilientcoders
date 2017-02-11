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
        titleLineOne="The Roster"
        image={RosterHeroImage}
        centered={true}
      >
        <div className="divider divider__red" />
        <p>
          Bootcampers meet daily, for eight weeks, to learn semantically structured
          HTML, responsive CSS, JavaScript, jQuery, git, and more. Before graduating,
          they will have built, and pushed to GitHub, actual client work that showcases these aptitudes.
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
