import { pick, partial } from 'underscore';
import styles from './Home.css';
import CSSModules from 'react-css-modules';
import React, {PureComponent} from 'react';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import UIButton from 'UILibrary/button/UIButton';
import Steps from './Steps/Steps';
import {Power1, Power2} from 'TweenMax';
import skylineForegroundImage from '../../images/skyline-foreground.svg';
import skylineBackgroundImage from '../../images/skyline-background.svg';
import homeImage from './home_photo.png';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Parallax from '../../components/Effects/Parallax';
import Partners from '../../components/Containers/Partners/Partners';
import alumniCompaniesConfig from './alumniCompaniesConfig';
import Helmet from 'react-helmet';
import images from 'constants/images';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import UIHero from 'UILibrary/layout/UIHero';
import UILayer from 'UILibrary/layer/UILayer';
import UIIconButton from 'UILibrary/button/UIIconButton';
import UIModal from 'UILibrary/modal/UIModal';
import UIVideoPlayer from 'UILibrary/video/UIVideoPlayer';
import UIPatternLayer from 'UILibrary/layer/UIPatternLayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';

import heroVideo from 'images/hero-video.mp4'
// import micahVideo from 'images/micah-video.mp4';
// import micahImage from './micah.jpg';

import video50x30 from 'images/50x30_web.mp4';
import image50x30 from './rene.jpg';

import rosterMembersConfig from 'pages/Bootcamp/Roster/rosterMembersConfig';
const rosterImages = rosterMembersConfig.map((member) => pick(member, 'image'));

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoOpen: false
    };

    this.setIsVideoOpen = this.setIsVideoOpen.bind(this);
  }
  setIsVideoOpen(isVideoOpen) {
    this.setState({ isVideoOpen });
  }
  renderMicahSection () {
    const { styles } = this.props;

    return (
      <UILayout>
        <UIModal
          isOpen={this.state.isVideoOpen}
          onClose={partial(this.setIsVideoOpen, false)}
        >
          <UIVideoPlayer src={video50x30} autoPlay={true} />
        </UIModal>
        <UILayer image={image50x30} dots={false} />
        <UISection className="index-1 p-y-25 p-x-6">
        <h1>
          50x30: In Pursuit of Progress
        </h1>
        <span className="divider divider__red"></span>
        <UIFlexRow align="center">
          <UIFlex basis="30%">
            <p className="text-on-dark text-constrained">
              One of the great battles of our generation is slipping by, unnoticed by too many of us:
              Equitable access to the economy. With the income gap consistently widening, and with roughly
              half of Americans not seeing a raise in almost four decades, we have hit a crisis point.
              Learn how you can join us in building the solution.
            </p>
            <UIButton
              className={styles['play-button-mobile']}
              href="https://youtu.be/GMyv3txXaLc"
              external={true}
              target="_blank"
            >
              Watch Video
            </UIButton>
          </UIFlex>
          <UIFlex className="m-left-1">
            <UIFlexRow justify="flex-end">
              <UIFlex grow={0} shrink={0}>
                <UIIconButton
                  className={styles['play-button-desktop']}
                  size="large"
                  image={images.play}
                  onClick={partial(this.setIsVideoOpen, true)}
                />
              </UIFlex>
            </UIFlexRow>
          </UIFlex>
        </UIFlexRow>

        {/*
          <h1>
            Micah's story
          </h1>
          <span className="divider divider__red"></span>
          <UIFlexRow align="center">
            <UIFlex basis="30%">
              <p className="text-on-dark text-constrained">
                Micah was a young, aspiring coder, when we met him. Watch the crowdfunding
                video with which we were able to send him and another one of our coders, Fredy
                Melo, to Startup Institute. Today, Micah is a full stack web developer at the
                Boston Globe. As he says in the clip, he's just trying to make somebody to look
                up to.
              </p>
              <UIButton
                className={styles['play-button-mobile']}
                href="https://youtu.be/JU1UunsFgpU"
                external={true}
                target="_blank"
              >
                Watch Video
              </UIButton>
            </UIFlex>
            <UIFlex className="m-left-1">
              <UIFlexRow justify="flex-end">
                <UIFlex grow={0} shrink={0}>
                  <UIIconButton
                    className={styles['play-button-desktop']}
                    size="large"
                    image={images.play}
                    onClick={partial(this.setIsVideoOpen, true)}
                  />
                </UIFlex>
              </UIFlexRow>
            </UIFlex>
          </UIFlexRow>
          */}
        </UISection>
      </UILayout>
    );
  }
  render() {
    return (
      <RouteTransition>
        <Helmet title="Resilient Coders" />
        <UIHero
          isFullHeight={true}
          titleOne="Equity in access"
          titleTwo="to the tech economy"
          text="Training people of color for high growth careers as software engineers, and connecting them with jobs"
          to="/get-involved"
          buttonText="Get Involved"
          video={heroVideo}
        />

        <UILayout>
          <UISection className="p-bottom-6">
            <UIFlexRow>
              <UIFlex className="index-10 pull-up-offset-3 hero-card-first">
                <UICard className="p-all-6 pull-up-3 with-shadow">
                  <h1>Our Mission</h1>
                  <p>
                    We believe in social justice through economic empowerment, and in the opportunity
                    for meritocracy in tech. This isn't about one-off camps or hackathons. This is about
                    <span className="strong">
                      &nbsp;meaningful change.
                    </span>
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex className="pull-up-offset-6 index-10 hero-card-second">
                <UIImage type="cover" src={homeImage} className="pull-up-6 with-shadow" />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout use="tertiary">
          <UIPatternLayer images={rosterImages} />
          <UISection>
            <UIFlexRow className="position-relative index-1">
              <UIFlex basis="50%">
                <div className="p-x-6 p-y-12 text-center">
                  <h1>Meet our students</h1>
                  <p className="text-constrained text-on-dark m-x-auto">
                    Our students come from have a variety of backgrounds and perspectives, but
                    they all share drive and passion.
                  </p>
                  <UIButton to="/bootcamp/roster">
                    See all students
                  </UIButton>
                </div>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>



        <UILayout use="secondary">
          <UISection className="text-center">
            <UICard className="p-all-6">
              <h3>Our alumni are employed by companies like:</h3>
              <Partners
                partnersConfig={alumniCompaniesConfig}
                buttonText="Hire our students"
                to="/bootcamp/roster"
              />
            </UICard>
          </UISection>
        </UILayout>

        {this.renderMicahSection()}

        <UILayout>
          <UISection>
            <UICard use="secondary" className="text-center p-all-6 pull-up-6 with-shadow">
              <p className="text-on-dark">
                There's more than one way to join the code literacy movement.
              </p>
              <UIButton to="/get-involved" className="center-block">
                GET INVOLVED
              </UIButton>
            </UICard>
          </UISection>



          <Steps />
          <UISkewedLayer use="tertiary" />
        </UILayout>

        <UILayout use="tertiary" className="p-bottom-20 p-top-20">
          <UISection className="text-center index-2">
            <h1 className="text-white">Keep in Touch</h1>
            <p className="text-constrained text-on-dark m-x-auto">
              We're on a mission to make computer science a meritocracy.
              Help us make the Boston tech community more diverse and inclusive.
            </p>
            <EmailFormShort className="m-top-3 with-shadow"/>
          </UISection>
          <div styleName="skyline">
            <Parallax
              to={0}
              from={500}
              triggerHook={0.7}
              duration="90%"
              ease={Power2.easeOut}
              className={styles['foreground']}
            >
              <img src={skylineForegroundImage} role="presentation" />
            </Parallax>
            <Parallax
              to={0}
              from={350}
              triggerHook={0.7}
              duration="90%"
              ease={Power1.easeOut}
              className={styles['background']}
            >
              <img src={skylineBackgroundImage} role="presentation" />
            </Parallax>
        </div>
        </UILayout>
      </RouteTransition>
    );
  }
}

export default CSSModules(Home, styles);
