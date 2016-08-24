import './Home.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import BinaryText from '../../components/BinaryText/BinaryText';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import MicahVideo from './MicahVideo/MicahVideo';
import HomeCarousel from './PhotoCarousel/PhotoCarousel';
import Steps from './Steps/Steps';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import Hero from '../../components/Containers/Hero/Hero';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';


class Home extends Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          titleLineOne="Hacking the"
          titleLineTwo="opportunity gap"
        >
          <span className="divider divider__red"></span>
          <p>Spreading code literacy to young people from traditionally underserved communities.</p>
          <ButtonPrimary to="/get-involved">
            Get Involved
          </ButtonPrimary>
        </Hero>
        <SideBySide>
          <SideItem
            type="white"
            className="home-text"
          >
            <h1>OUR MISSION</h1>
            <p>
              We believe in social justice through economic empowerment, and in the opportunity for meritocracy in tech. We think holistically about the
              school-to-workforce pipeline, offering a chaining series of programs that guide our hackers through the extensive journey of learning web development.
            </p>
            <p>
              This isn't about one-off camps or hackathons. This is about meaningful change.
            </p>
          </SideItem>
          <SideItem
            type="image"
            className="home-photo"
          >
            <HomeCarousel/>
          </SideItem>
        </SideBySide>
        <MicahVideo/>
        <CenteredContainerOuter color="grey">
          <CenteredContainerInner color="white" standard={false}>
            <div className="call-to-action-container clearfix">
              <div className="section-main section-tertiary section-tertiary__alert call-to-action">
                <div className="section-container-primary">
                  <p>There's more than one way to join the code literacy movement.</p>
                  <Link to="/get-involved" className="button button__slice">
                    <span>GET INVOLVED</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tiered-program">
              <h1>AN END TO END SOLUTION</h1>
              <p>In order to effectively educate and employ our students we’ve developed a funnel with overlapping means of engagement.</p>
              <span className="divider divider__red"/>
              <Steps/>
            </div>
            <div
              className="section-main section-tertiary section-tertiary__subtle">
              <div className="section-container-primary">
                <p>Join the movement, drop us a note at:&nbsp;
                  <a
                    className="accent-link-underline accent-link-underline-trigger"
                    href="mailto:david@resilientcoders.org?Subject=Getting involved with Resilient Coders" target="_top">
                    david@resilientcoders.org
                  </a>
                </p>
              </div>
            </div>
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    );
  }
}

export default Home;
