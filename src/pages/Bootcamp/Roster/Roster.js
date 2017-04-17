import React from 'react';
import styles from './Roster.css';
import CSSModules from 'react-css-modules';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';
import rosterconfig from './rosterMembersConfig';
import UIOverlay from 'UILibrary/overlay/UIOverlay';
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
          basis="31%"
          grow={0}
          shrink={0}
          className="m-bottom-4"
        >
          <Link
            key={key}
            to={item.url}
          >
            <UIOverlay text="Learn more">
              <img src={item.image} />
            </UIOverlay>
          </Link>
          <div styleName="student-name">
            <h3>
              {item.name}
            </h3>
          </div>
        </UIFlex>
      );
    });
  }
  render () {
    return (
      <RouteTransition>
        <Helmet title="Student Roster" />
        <CenteredContainerOuter color="dark-grey">
          <UILayer image={rosterImage} />
          <CenteredContainerInner className="p-bottom-6 p-top-11 text-center" flush={false}>
            <h1>The Roster</h1>
            <div className="divider divider__red" />
            <p className="text-constrained text-on-dark">
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
          </CenteredContainerInner>
        </CenteredContainerOuter>
        <CenteredContainerOuter color="white">
          <CenteredContainerInner color="white" className="p-y-6" flush={false}>
            <UIFlexRow justify="space-between">
              {this.renderMembers()}
            </UIFlexRow>
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    );
  }
}

export default CSSModules(Roster, styles);
