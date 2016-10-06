import './Team.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import TeamMembers from './TeamMembers/TeamMembers';
import TeamPartners from './TeamPartners/TeamPartners';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import Hero from '../../components/Containers/Hero/Hero';
import TeamHeroImage from './team-hero.png';

const Team = (props) => {
  return (
    <RouteTransition>
      <Hero
        titleLineOne="The team"
        image={TeamHeroImage}
        centered={true}
      >
        <div className="divider divider__red" />
        <p>
          Strong student leadership, dedicated staff, and an impressive board make Resilient Coders
          what it is. The ranges of experience and background vary across the team. But our people
          have in common a belief in the social mission, and the muscle to make real change.
        </p>
      </Hero>
      <div className="team">
        <div className="team-container">
          <TeamMembers/>
        </div>
      </div>
      <TeamPartners />
    </RouteTransition>
  )
}

export default Team
