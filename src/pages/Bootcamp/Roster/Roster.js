import React from 'react';
import styles from './Roster.css';
import CSSModules from 'react-css-modules';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import UILayout from 'UILibrary/layout/UILayout';
import UISection from 'UILibrary/layout/UISection'
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import rosterconfig from './rosterMembersConfig';
import UIContentButton from 'UILibrary/button/UIContentButton';
import UIButton from 'UILibrary/button/UIButton';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UILayer from 'UILibrary/layer/UILayer';
import rosterImage from './roster-hero.png';

class Roster extends React.Component {
  renderMembers() {
    return rosterconfig.map((item, key) => {
      return (
        <UIFlex
          key={key}
          basis="31%"
          grow={0}
          shrink={0}
          className="m-bottom-4"
        >
          <Link
            key={key}
            to={item.url}
          >
            <UIContentButton
              use="secondary"
              image={item.image}
              title={item.name}
            />
          </Link>
        </UIFlex>
      );
    });
  }
  render () {
    return (
      <RouteTransition>
        <Helmet title="Student Roster" />

        <UILayout use="tertiary">
          <UILayer image={rosterImage} className="index-1" />
          <UISection className="p-bottom-6 p-top-of-page text-center p-x-2 index-2" flush={false}>
            <h1>The Roster</h1>
            <div className="divider divider__red" />
            <p className="text-constrained text-on-dark m-x-auto">
              Bootcampers meet daily, for eight weeks, to learn semantically structured
              HTML, responsive CSS, JavaScript, jQuery, git, and more. Before graduating,
              they will have built, and pushed to GitHub, actual client work that showcases these aptitudes.
              From <a href="/bootcamp">Bootcamp</a>, mentorship, and Resilient Lab,
              through additional on-the-job support, we ensure that our coders are successful at
              at their first technical job.
            </p>
            <UIButton href="http://resilientcoders.s3.amazonaws.com/i/docs/HiringAResilientCoder.pdf" target="_blank">
              View our hiring guide
            </UIButton>
          </UISection>
        </UILayout>

        <UILayout use="secondary">
          <UISection className="p-y-6">
            <UIFlexRow justify="space-between">
              {this.renderMembers()}
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    );
  }
}

export default CSSModules(Roster, styles);
