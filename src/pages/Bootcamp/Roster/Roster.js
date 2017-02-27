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
          short={true}
        >
          <div className="divider divider__red" />
          <p>
            Bootcampers meet daily, for eight weeks, to learn semantically structured
            HTML, responsive CSS, JavaScript, jQuery, git, and more. Before graduating,
            they will have built, and pushed to GitHub, actual client work that showcases these aptitudes.
            From <a href="/bootcamp">Bootcamp</a>, mentorship, and Resilient Lab,
            through additional on-the-job support, we <a href="http://resilientcoders.s3.amazonaws.com/i/docs/HiringAResilientCoder.pdf" target="_blank">ensure that our coders are successful</a> at
            at their first technical job.
          </p>
        </Hero>
        {this.renderMembers()}
      </RouteTransition>
    );
  }
}

export default Roster;
