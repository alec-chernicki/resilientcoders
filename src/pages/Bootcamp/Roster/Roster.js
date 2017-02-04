import './Roster.scss';
import React from 'react';
import BinaryText from '../../../components/BinaryText/BinaryText';
import RosterMembers from './RosterMembers/TeamMembers';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Work from '../../Lab/Work/Work'
import Hero from '../../../components/Containers/Hero/Hero';
import RosterHeroImage from './roster-hero.png';

const Team = (props) => {
  return (
    <div></div>
    // <RouteTransition>
    //
    //   <Hero
    //     titleLineOne="The team"
    //     image={RosterHeroImage}
    //     centered={true}
    //   >
    //     <div className="divider divider__red" />
    //     <p>
    //       Strong student leadership, dedicated staff, and an impressive board make Resilient Coders
    //       what it is. The ranges of experience and background vary across the team. But our people
    //       have in common a belief in the social mission, and the muscle to make real change.
    //     </p>
    //   </Hero>
    //   <div className="team">
    //     <div className="team-container">
    //       <RosterMembers/>
    //     </div>
    //   </div>
    //
    // </RouteTransition>
  )
}

export default Team
