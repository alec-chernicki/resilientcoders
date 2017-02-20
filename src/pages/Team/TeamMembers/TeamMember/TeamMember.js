import './TeamMember.scss';
import React from 'react';
import ToggleClass from '../../../../components/Effects/ToggleClass';
import BinaryText from '../../../../components/BinaryText/BinaryText';

class TeamMember extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }
  handleEnter() {
    const {memberKey, setShownMember} = this.props;

    this.setIsActive(true)
    setShownMember(memberKey)
  }
  handleLeave() {
    this.setIsActive(false)
  }
  setIsActive(isActive) {
    this.setState({
      isActive
    });
  }
  renderTitle() {
    const {isActive} = this.state;
    const {title} = this.props;

    if (!isActive) {
      return null;
    }

    return (
      <h3 className="team-member__title">
        <BinaryText>
          {title}
        </BinaryText>
      </h3>
    )
  }
  render() {
    const {name} = this.props;

    return (
      <div>
        <ToggleClass
          onEnter={this.handleEnter.bind(this)}
          onLeave={this.handleLeave.bind(this)}
          triggerHook={0.45}
          className="team-member clearfix"
        >
          <h2 className="team-member__name">
            {name}
          </h2>
          {this.renderTitle()}
        </ToggleClass>
      </div>
    )
  }
}

export default TeamMember;
