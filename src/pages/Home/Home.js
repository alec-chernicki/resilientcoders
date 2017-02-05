import './Home.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import BinaryText from '../../components/BinaryText/BinaryText';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import MicahVideo from './MicahVideo/MicahVideo';
import HomeCarousel from './PhotoCarousel/PhotoCarousel';
import Steps from './Steps/Steps';
import {Power1} from 'gsap';
import LinkPrimary from '../../components/Buttons/LinkPrimary';

import skylineForegroundImage from '../../images/skyline-foreground.svg';
import skylineBackgroundImage from '../../images/skyline-background.svg';

import Coworking from './Coworking/Coworking';

import Hero from '../../components/Containers/Hero/Hero';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';
import Parallax from '../../components/Effects/Parallax';
import Partners from '../../components/Containers/Partners/Partners';

import alumniCompaniesConfig from './alumniCompaniesConfig';

import alumniOne from '../../images/dunia.png';
import alumniTwo from '../../images/alumniTwo.png';
import alumniThree from '../../images/alumniThree.png';

import Slider from 'react-slick';

const CAROUSEL_SETTINGS = {
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      draggable: true,
      pauseOnHover: false,
    }
  }],
  dots: false,
  infinite: true,
  pauseOnHover: true,
  speed: 400,
  slidesToShow: 3,
  draggable: false,
  autoplay: true,
  autoplaySpeed: 4500,
  slidesToScroll: 1,
  centerMode: true,
  cssEase: 'ease-in-out'
};

class Home extends Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          titleLineOne="Hacking the"
          titleLineTwo="opportunity gap"
          setIsPageLoaded={this.props.setIsPageLoaded}
          isPageLoaded={this.props.isPageLoaded}
        >
          <span className="divider divider__red"></span>
          <p>
            Spreading code literacy to young people from traditionally underserved communities.
          </p>
          <ButtonPrimary to="/get-involved">
            Get Involved
          </ButtonPrimary>
        </Hero>
        <SideBySide className="home-details" animatable={true}>
          <SideItem
            type="white"
            className="p-y pull-up-1"
          >
            <h1>OUR MISSION</h1>
            <p>
              We believe in social justice through economic empowerment, and in the opportunity
              for meritocracy in tech. We think holistically about the school-to-workforce
              pipeline, offering a chaining series of programs that guide our hackers through
              the extensive journey of learning web development.
            </p>
            <p>
              This isn't about one-off camps or hackathons. This is about
              <span className="strong">
                &nbsp;meaningful change.
              </span>
            </p>
          </SideItem>
          <SideItem type="image" className="pull-up-2">
            <img src="http://placecorgi.com/260/180" />
          </SideItem>
        </SideBySide>
        <MicahVideo/>
        <CenteredContainerOuter color="white">
          <CenteredContainerInner
            color="dark-grey"
            className="text-center pull-up"
            accent={true}
          >
            <p className="text-white">
              There's more than one way to join the code literacy movement.
            </p>
            <ButtonPrimary to="/get-involved" className="center-block">
              GET INVOLVED
            </ButtonPrimary>
          </CenteredContainerInner>
          <Steps />
        </CenteredContainerOuter>
        <CenteredContainerOuter color="dark-grey">
          <CenteredContainerInner className="text-center" color="dark-grey">
            <h1>Our students</h1>
            <p className="text-constrained">
              Our students come from a variety of backgrounds, they may all have different
              perspective but one thing they don't lack is grit.
            </p>
          </CenteredContainerInner>
        </CenteredContainerOuter>
        <CenteredContainerOuter color="white" className="alumni-slider">
          <Slider className="slider" {...CAROUSEL_SETTINGS}>
            <div>
              <img src={alumniOne} height={475} />
              <div className="slider-details">
                <h2>Student Name</h2>
                <p>Student Title</p>
              </div>
            </div>
            <div>
              <img src={alumniTwo} height={475} />
              <div className="slider-details">
                <h2>Student Name</h2>
                <p>Student Title</p>
              </div>
            </div>
            <div>
              <img src={alumniThree} height={475} />
              <div className="slider-details">
                <h2>Student Name</h2>
                <p>Student Title</p>
              </div>
            </div>
            <div>
              <img src={alumniOne} height={475} />
              <div className="slider-details">
                <h2>Student Name</h2>
                <p>Student Title</p>
              </div>
            </div>
            <div>
              <img src={alumniOne} height={475} />
              <div className="slider-details">
                <h2>Student Name</h2>
                <p>Student Title</p>
              </div>
            </div>
          </Slider>
          <CenteredContainerInner color="white" className="text-center">
            <h3>Our alumni are employed by companies like:</h3>
            <Partners
              partnersConfig={alumniCompaniesConfig}
              buttonText="Hire our students"
            />
          </CenteredContainerInner>
        </CenteredContainerOuter>
        <CenteredContainerOuter color="grey" className="subscribe-section">
          <CenteredContainerInner color="transparent" className="text-center">
            <h1>Keep in Touch</h1>
            <p className="text-constrained">
              We're on a mission to make computer science a meritocracy not an ivory tower.
              Help us make Boston the most diverse and innovation tech community in the country.
            </p>
            <div className="general-subscribe-form">
              <EmailFormShort />
            </div>
          </CenteredContainerInner>
          <div className="skyline">
            <div className="foreground">
              <Parallax
                to={0}
                from={500}
                triggerHook={0.7}
                duration="70%"
                ease={Power1.easeOut}
                className="align-bottom"
              >
                <img src={skylineForegroundImage} role="presentation" />
              </Parallax>
            </div>
            <div className="background">
              <Parallax
                to={0}
                from={350}
                triggerHook={0.7}
                duration="80%"
                ease={Power1.easeOut}
                className="align-bottom"
              >
                <img src={skylineBackgroundImage} role="presentation" />
              </Parallax>
            </div>
          </div>
        </CenteredContainerOuter>
      </RouteTransition>
    );
  }
}

export default Home;
