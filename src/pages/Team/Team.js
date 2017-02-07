import './Team.scss';
import React from 'react';
import BinaryText from '../../components/BinaryText/BinaryText';
import TeamMembers from './TeamMembers/TeamMembers';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import Partners from '../../components/Containers/Partners/Partners';
import teamPartnersConfig from './TeamPartners/teamPartnersConfig';

import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';

import Hero from '../../components/Containers/Hero/Hero';
import TeamHeroImage from './team-hero.png';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

class Team extends React.Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          titleLineOne="The team"
          short={true}
          image={TeamHeroImage}
          setIsPageLoaded={this.props.setIsPageLoaded}
          isPageLoaded={this.props.isPageLoaded}
        >
          <div className="divider divider__red" />
          <p>
            Strong student leadership, dedicated staff, and an impressive board make Resilient Coders
            what it is. Our people have in common a belief in the social mission, and the muscle
            to make real change.
          </p>
        </Hero>

        <CenteredContainerOuter color="grey" className="p-bottom">
          <CenteredContainerInner className="pull-up-1" color="white">
            <Partners
              title="Our partners make it all possible"
              partnersConfig={teamPartnersConfig}
            />
          </CenteredContainerInner>
        </CenteredContainerOuter>


        <TeamMembers/>


        <CenteredContainerOuter color="white">
          <CenteredContainerInner color="white" className="text-center">
            <h2>Interested in Joining?</h2>
            <p className="text-constrained">
              There's numerous ways to get involved whether you're a company or individual
            </p>
            <ButtonPrimary to="/get-involved">
              Get Involved
            </ButtonPrimary>
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default Team;
