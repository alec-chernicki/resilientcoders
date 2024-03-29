import styles from './RosterMember.css'
import React from 'react';
import CSSModules from 'react-css-modules';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIButton from 'UILibrary/button/UIButton';
// import UILink from 'UILibrary/button/UILink';
import UIIcon from 'UILibrary/icon/UIIcon';
import UIOverlay from 'UILibrary/overlay/UIOverlay';
import UIImage from 'UILibrary/image/UIImage';
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import RouteTransition from '../../../../components/RouteTransition/RouteTransition';
import githubLogo from '../../../../images/github.svg';
import linkedinLogo from '../../../../images/linkedin.svg';
import rosterMembersConfig from '../rosterMembersConfig';
import leftArrowImage from 'images/left-arrow.svg';

class RosterMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member: this.getMemberFromUrl()
    }

    this.getMailToLink = this.getMailToLink.bind(this);
    this.getMemberFromUrl = this.getMemberFromUrl.bind(this);
    this.renderResumeLink = this.renderResumeLink.bind(this);
  }
  getMemberFromUrl() {
    const {memberName} = this.props.params;
    const member = rosterMembersConfig.filter((item) => {
      return item.url.replace('/bootcamp/roster/', '') === memberName;
    });

    return member[0];
  }
  getMailToLink() {
    const {name} = this.state.member;
    const sendTo = "stephanie@resilientcoders.org"
    const subject = `Requesting more information about ${name}`;
    const body = `I'd like to request more information about hiring ${name}.`

    return `mailto:${sendTo}?subject=${subject}&body=${body}`;
  }
  renderLinkedin() {
    const {linkedin} = this.state.member;

    if (!linkedin) {
      return null;
    }

    return (
      <a href={linkedin} target="_blank" className="m-right-1">
        <UIIcon alt="linkedin" image={linkedinLogo} />
      </a>
    );
  }
  renderGithub() {
    const {github} = this.state.member;

    if (!github) {
      return null;
    }

    return (
      <a href={github} target="_blank">
        <UIIcon alt="github" image={githubLogo} />
      </a>
    );
  }
  renderLinks() {
    const {linkedin, github} = this.state.member;

    if (!linkedin && !github) {
      return null;
    }

    return (
      <div className="m-bottom-3">
        {this.renderLinkedin()}
        {this.renderGithub()}
      </div>
    )
  }
  renderResumeLink() {
    const {resume} = this.state.member;
    // const demoday = "https://www.eventbrite.com/e/resilient-coders-demo-day-at-workbar-tickets-36959812795";
    if (!resume) {
      return null;
    }

    return (
      /*
      <UILink
        href={resume}
        external={true}
        className="m-bottom-2"
      >
        View Resume
      </UILink>
      */

      <p><a href={resume} target="_blank">View My Resume</a></p>
    );
  }
  renderProjectLink() {
    const {project} = this.state.member;
    if (!project) {
      return null;
    }

    return (

      <p><a href={project} target="_blank">See a sample of my work</a></p>
    );
  }
  renderVideo() {
    const {video} = this.state.member;
    if (!video) {
      return null;
    }

    return (

      <p><a href={video} target="_blank">Short video of me walking you through my work</a></p>
    );
  }
  renderPortfolio() {
    const {portfolioUrl} = this.state.member;

    if (!portfolioUrl) {
      return null;
    }

    return (
      <UILayout className="p-top-6 p-bottom-6">
        <UISection className="text-center">
          <h1 className="m-bottom-0 text-darkest">
            Portfolio Website
          </h1>
          <div className="divider divider__red " />
          <a
            styleName="website"
            target="_blank"
            href={portfolioUrl}
          >
            <UIOverlay text="Visit Website" />
            <div styleName="iframe-wrapper" className="with-shadow">
              <iframe
                scrolling="no"
                src={portfolioUrl}
                seamless="seamless"
                styleName="iframe"
              />
            </div>
          </a>
        </UISection>
      </UILayout>
    )
  }
  render() {
    const {image, name, bio} = this.state.member;

    return (
      <RouteTransition>
        <UILayout>
          <UISkewedLayer className="index-2" />
          <UILayer image={image} dots={false} className="index-1" />
          <UISection className="p-top-of-page p-bottom-6 index-2">
            <UIButton
              to="/bootcamp/roster"
              type="link"
              use="tertiary"
              className="m-bottom-1"
            >
              <UIIcon
                image={leftArrowImage}
                align="text-bottom"
              />
              <span>
                Back to all students
              </span>
            </UIButton>
            <UIFlexRow className="with-shadow">
              <UIFlex>
                <UIImage src={image} type="cover" />
              </UIFlex>
              <UIFlex>
                <UICard className="p-all-6">
                  <h2>
                    {name}
                  </h2>
                  {this.renderLinks()}
                  <p className="m-bottom-3">
                    {bio}
                  </p>
                  {this.renderResumeLink()}
                  {this.renderProjectLink()}
                  {this.renderVideo()}
                  <UIButton href={this.getMailToLink()}>
                    Request more info
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
        {this.renderPortfolio()}

        <UILayout>
          <UISection className="text-center p-all-6">
            <h2>
              Want to see more students?
            </h2>
            <p className="text-constrained m-x-auto">
              Our students come from have a variety of backgrounds and
              perspectives, but they all share drive and passion.
            </p>
            <UIButton to="/bootcamp/roster">
              View all students
            </UIButton>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(RosterMember, styles);
