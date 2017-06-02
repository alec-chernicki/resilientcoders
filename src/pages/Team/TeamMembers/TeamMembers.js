import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TeamMembers.css';
import TeamMember from './TeamMember/TeamMember';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import UILayout from 'UILibrary/layout/UILayout';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UISection from 'UILibrary/layout/UISection';
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';
import UIInformationCarousel from 'UILibrary/layout/UIInformationCarousel';

import {throttle} from 'underscore';

import teamMembersConfig from './teamMembersConfig';

class TeamMembers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shownMemberIndex: 0,
    };

    this.setShownMember = throttle(this.setShownMember.bind(this), 475);
  }

  setShownMember(shownMemberIndex) {
    this.setState({ shownMemberIndex });
  }

  renderSidebarItems() {
    const { shownMemberIndex } = this.state;

    return (
      <TeamMember
        shownMemberIndex={shownMemberIndex}
        onChange={this.setShownMember}
      />
    );
  }
  renderSidebar() {
    return (
      <div styleName="sidebar" className="index-3">
        {this.renderSidebarItems()}
      </div>
    )
  }
  renderContent() {
    const { shownMemberIndex } = this.state;

    return (
      <UIInformationCarousel
        className="index-3 position-relative with-shadow"
        config={teamMembersConfig}
        currentIndex={shownMemberIndex}
        animationAxis="vertical"
      />
    )
  }
  render() {
    const { shownMemberIndex } = this.state;
    const { image } = teamMembersConfig[shownMemberIndex];

    return (
        <UILayout use="tertiary" className="overflow-hidden">
          <CSSTransitionGroup
            transitionName={{
              enter: styles['background-enter'],
              enterActive: styles['background-enter-active'],
              leave: styles['background-leave'],
              leaveActive: styles['background-leave-active'],
            }}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            <UILayer
              key={image}
              image={image}
              dots={false}
            />
          </CSSTransitionGroup>
          <UISkewedLayer
            className="index-1"
          />
          <UISection className="p-y-6">
            <UIFlexRow>
              <UIFlex basis="30%">
                {this.renderSidebar()}
              </UIFlex>
              <UIFlex basis="70%" className="m-sm-top-28">
                {this.renderContent()}
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
    );
  }
}

export default CSSModules(TeamMembers, styles);
