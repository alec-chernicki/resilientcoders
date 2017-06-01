import React from 'react';
import styles from './TeamMember.css';
import CSSModules from 'react-css-modules';
import MemberTitle from './MemberTitle';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UIIconButton from 'UILibrary/button/UIIconButton';

import teamMembersConfig from '../teamMembersConfig';
import icons from 'constants/icons';

class TeamMember extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  handlePrevious() {
    const { shownMemberIndex } = this.props;

    if (shownMemberIndex === 0 ){
      return;
    }

    this.props.onChange(shownMemberIndex - 1);
  }
  handleNext() {
    const { shownMemberIndex } = this.props;

    if (shownMemberIndex === teamMembersConfig.length - 1) {
      return;
    }

    this.props.onChange(shownMemberIndex + 1);
  }
  renderNames() {

    const { shownMemberIndex } = this.props;

    return teamMembersConfig.map((member, key) => {
      const isActive = shownMemberIndex === key;
      return (
        <MemberTitle key={key} member={member} isActive={isActive} />
      );
    });
  }
  renderControls() {
    return (
      <div>
        <UIIconButton
          image={icons.upArrow}
          onClick={this.handlePrevious}
          direction="up"
          className="m-bottom-2"
        >
          Previous
        </UIIconButton>
        <UIIconButton
          image={icons.downArrow}
          onClick={this.handleNext}
          direction="down"
        >
          Next
        </UIIconButton>
      </div>
    )
  }
  render() {
    const { shownMemberIndex } = this.props;
    const namesStyle = {transform: `translateY(${-(shownMemberIndex * 180)}px)`};

    return (
      <UIFlexRow className="flex-sm-row">
        <UIFlex basis="50px" grow={0} shrink={0}>
          {this.renderControls()}
        </UIFlex>
        <UIFlex style={namesStyle} styleName="names" className="p-x-3">
          {this.renderNames()}
        </UIFlex>
      </UIFlexRow>
    );
  }
}

export default CSSModules(TeamMember, styles);
