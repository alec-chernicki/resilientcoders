import './GetInvolved.scss';
import React from 'react';
import {Link} from 'react-router';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import heroImage from '../../images/hero-image.png';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import Hero from '../../components/Containers/Hero/Hero';
import donateImage from './donate.jpg';
import Helmet from 'react-helmet';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Get Involved" />
      <Hero
        short={true}
        titleLineOne="Get Involved"
        image={heroImage}
        centered={true}
      >
        <div className="divider divider__red" />
        <p>
          Whether you're a company or an individual, there's numerous ways to join the code literacy movement.
        </p>
      </Hero>
      <SideBySide className="get-involved-types">
        <SideItem flush={true} className="pull-up-2" grow={1} shrink={2} size={33} >
          <Link
            to="/get-involved/company"
            className="get-involved-types__item p-y get-involved-types__item--company"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">For:</p>
              <h2>
                Companies
              </h2>
              <div className="divider divider__red" />
            </div>
          </Link>
        </SideItem>
        <SideItem flush={true} className="pull-up-2 m-x" grow={2} size={33} >
          <Link
            to="/get-involved/student"
            className="get-involved-types__item p-y get-involved-types__item--student"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">For:</p>
              <h2>
                Students
              </h2>
              <div className="divider divider__red" />
            </div>
          </Link>
        </SideItem>
        <SideItem flush={true} className="pull-up-2" grow={1} shrink={2} size={33} >
          <Link
            to="/get-involved/mentor"
            className="get-involved-types__item p-y get-involved-types__item--mentor"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">For:</p>
              <h2>
                Mentors
              </h2>
              <div className="divider divider__red" />
            </div>
          </Link>
        </SideItem>
      </SideBySide>
      <SideBySide>
        <SideItem flush={true}>
          <img src={donateImage} alt="A group of coders"/>
        </SideItem>
        <SideItem className="p-y">
          <h2>
            Donate
          </h2>
          <p>
            Your support allows us to spread code literacy to communities traditionally underrepresented in technology.
          </p>
          <div className="get-involved-donate-buttons">
            <ButtonPrimary target="_blank" href="https://www.paypal.me/resilientcoders">
              Donate Any Amount
            </ButtonPrimary>
          </div>
          <p className="get-involved-donate-legal">
            Resilient Coders is a 501(c)(3) organization.
          </p>
        </SideItem>
      </SideBySide>
    </RouteTransition>
  )
}

export default GetInvolvedPage
