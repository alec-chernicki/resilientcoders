import './Team.scss';
import React from 'react';
import TeamMembers from './TeamMembers/TeamMembers';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Partners from '../../components/Containers/Partners/Partners';
import Hero from '../../components/Containers/Hero/Hero';
import TeamHeroImage from './team-hero.png';
import Helmet from 'react-helmet';

import UIButton from 'UILibrary/button/UIButton';
import UILayout from 'UILibrary/layout/UILayout';
import UICard from 'UILibrary/layout/UICard';
import UISection from 'UILibrary/layout/UISection';

import teamPartnersConfig from './teamPartnersConfig';

class Team extends React.PureComponent {
  render() {
    return (
      <RouteTransition>
        <Helmet title="Team" />
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

        <UILayout className="p-bottom-6">
          <UISection>
            <UICard className="pull-up-1 p-all-6 text-center with-shadow">
              <Partners
                title="Our partners make it all possible"
                partnersConfig={teamPartnersConfig}
              />
            </UICard>
          </UISection>
        </UILayout>

        <TeamMembers/>

        <UILayout use="secondary">
          <UISection>
            <UICard className="text-center p-all-6">
              <h2>Interested in Joining?</h2>
              <p className="text-constrained">
                There's numerous ways to get involved whether you're a company or individual
              </p>
              <UIButton to="/get-involved">
                Get Involved
              </UIButton>
            </UICard>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default Team;
