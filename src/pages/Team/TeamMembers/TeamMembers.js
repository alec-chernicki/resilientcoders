import './TeamMembers.scss';
import React from 'react';
import TeamMember from './TeamMember/TeamMember';
import teamMembersConfig from './teamMembersConfig';
import {Linear} from 'TweenMax';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';
import Pin from '../../../components/Effects/Pin';
import Parallax from '../../../components/Effects/Parallax';
import _ from 'underscore';

class TeamMembers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shownMember: [teamMembersConfig.DAVID_DELMAR],
      animationDuration: 0
    };

    this.setSectionRef = this.setSectionRef.bind(this);
    window.addEventListener('resize', this.setAnimationDuration);
  }
  componentDidMount() {
    this.setAnimationDuration();
  }
  setAnimationDuration() {
    if (!this.sectionRef) {
      return
    }

    this.setState({
      animationDuration: this.sectionRef.clientHeight - (window.innerHeight)
    });
  }
  setSectionRef(el) {
    this.sectionRef = el;
  }
  setShownMember(memberKey) {
    this.setState({
      shownMember: [teamMembersConfig[memberKey]]
    });
  }
  renderSidebarItems() {
    const debouncedSetMember = _.debounce(this.setShownMember.bind(this), 150);

    return Object.keys(teamMembersConfig).map((key, i) => {
      const member = teamMembersConfig[key];

      return (
        <TeamMember
          key={i}
          image={member.image}
          name={member.name}
          title={member.title}
          bio={member.bio}
          memberKey={key}
          setShownMember={debouncedSetMember}
        />
      )
    });
  }
  renderSidebar() {
    return (
      <div className="team-members__sidebar">
        {this.renderSidebarItems()}
      </div>
    )
  }
  renderProgressBar() {
    if (!this.sectionRef) {
      return null
    }

    return (
      <Pin
        outerClassName="team-members__progress"
        innerClassName="team-members__progress-inner"
        stretch={false}
        duration={this.state.animationDuration - 160}
        offset={(-(window.innerHeight / 10) - 60)}
      >
        <Parallax
          from="-100%"
          to="0%"
          ease={Linear.easeNone}
          duration={this.state.animationDuration - 60}
          triggerRef={this.sectionRef}
          triggerHook={0}
        >
          <div className="team-members__progress-bar" />
        </Parallax>
      </Pin>
    )
  }
  renderBio() {
    const {bio} = this.state.shownMember[0];
    if (!this.sectionRef) {
      return null
    }

    return (
      <Pin
        key={bio}
        outerClassName="team-members__content"
        innerClassName="team-members__content-inner"
        stretch={false}
        duration={this.state.animationDuration - 160}
        offset={(-(window.innerHeight / 10) - 60)}
      >
        <p className="team-members__bio">
          {bio}
        </p>
      </Pin>
    )
  }
  renderBackgroundImage() {
    const {image} = this.state.shownMember[0];
    if (!this.sectionRef) {
      return null
    }

    return (
      <div className="team-pin-wrapper">
        <Pin
          outerClassName="team-members__image-outer"
          stretch={false}
          duration={this.state.animationDuration}
        >
          <ReactCSSTransitionGroup
            component="div"
            transitionName="team-members-background-animation-fade"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            <div className="team-members__image"
              key={image}
              style={{
                backgroundImage: `url(${image})`
              }}
            />
          </ReactCSSTransitionGroup>
        </Pin>
      </div>
    )
  }
  render() {
    return (
        <div className="team-members" ref={this.setSectionRef}>
          {this.renderBackgroundImage()}
          <div className="team-members__overlay"/>
          <CenteredContainerInner className="flex-row">
            {this.renderProgressBar()}
            {this.renderSidebar()}
            {this.renderBio()}
          </CenteredContainerInner>
        </div>
    );
  }
}

export default TeamMembers;
