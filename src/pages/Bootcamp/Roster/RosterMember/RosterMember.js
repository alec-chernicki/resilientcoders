import styles from './RosterMember.css'
import React from 'react';
import CSSModules from 'react-css-modules';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIButton from 'UILibrary/button/UIButton';
import UILink from 'UILibrary/button/UILink';
import UIIcon from 'UILibrary/icon/UIIcon';
import UIOverlay from 'UILibrary/overlay/UIOverlay';
import UIImage from 'UILibrary/image/UIImage';
import UILayer from 'UILibrary/layer/UILayer';
import CenteredContainerOuter from '../../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../../../components/Containers/CenteredContainer/CenteredContainerInner';
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
    const sendTo = "david@resilientcoders.org"
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
    if (!resume) {
      return null;
    }

    return (
      <UILink href={resume} external={true}>
        View Resume
      </UILink>
    );
  }
  renderPortfolio() {
    const {portfolioUrl} = this.state.member;

    if (!portfolioUrl) {
      return null;
    }

    return (
      <CenteredContainerOuter color="white" className="p-y-6">
        <CenteredContainerInner
          color="white"
          flush={false}
          className="text-center"
        >
          <h1 className="m-bottom-0">
            Portfolio Website
          </h1>
          <div className="divider divider__red " />
          <a
            styleName="website"
            target="_blank"
            href={portfolioUrl}
          >
            <UIOverlay text="Visit Website">
              <div styleName="iframe-wrapper">
                <iframe
                  scrolling="no"
                  src={portfolioUrl}
                  seamless="seamless"
                  styleName="iframe"
                />
              </div>
            </UIOverlay>
          </a>
        </CenteredContainerInner>
      </CenteredContainerOuter>
    )
  }
  render() {
    const {image, name, bio} = this.state.member;

    return (
      <RouteTransition>
        <CenteredContainerOuter>
          <UILayer image={image} greyscale={false}/>
          <CenteredContainerInner className="p-top-11 p-bottom-6" flush={false}>
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
            <UIFlexRow>
              <UIFlex>
                <UIImage src={image} type="cover" />
              </UIFlex>
              <UIFlex>
                <UICard className="p-all-5">
                  <h2>
                    {name}
                  </h2>
                  {this.renderLinks()}
                  <p className="m-bottom-3">
                    {bio}
                  </p>
                  {this.renderResumeLink()}
                  <UIButton href={this.getMailToLink()}>
                    Request more information
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </CenteredContainerInner>
        </CenteredContainerOuter>
        {this.renderPortfolio()}
      </RouteTransition>
    )
  }
}

export default CSSModules(RosterMember, styles);
