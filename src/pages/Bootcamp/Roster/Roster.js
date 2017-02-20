import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Hero from '../../../components/Containers/Hero/Hero';
import RosterHeroImage from './roster-hero.png';
import rosterconfig from './rosterMembersConfig';
import RosterMember from './RosterMember/RosterMember';
import Helmet from 'react-helmet';

class Roster extends React.Component {
  renderMembers() {
    return rosterconfig.map((item, i) => (
      <RosterMember
        key={i}
        image={item.image}
        name={item.name}
        title={item.title}
        bio={item.bio}
        linkedin={item.linkedin}
        github={item.github}
        availableForHire={item.availableForHire}
        hash={this.props.location.hash}
      />
    ));
  }
  render () {
    return (
      <RouteTransition>
        <Helmet title="Roster" />
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
        {this.renderMembers()}
      </RouteTransition>
    );
  }
}

export default Roster;
