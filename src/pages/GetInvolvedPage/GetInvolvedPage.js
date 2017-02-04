import './GetInvolved.scss';
import React from 'react';
import {Link} from 'react-router';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import individualImage from './step-one-vertical.png';

import RouteTransition from '../../components/RouteTransition/RouteTransition';

import GetInvolvedHero from './get-involved-hero.jpg';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import Hero from '../../components/Containers/Hero/Hero';

import donateImage from './donate.jpg';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <Hero
        short={true}
        titleLineOne="Get Involved"
      >
        <div className="divider divider__red" />
        <p>
          There's numerous ways to get involved
        </p>
      </Hero>
      <SideBySide>
        <SideItem type="image" className="pull-up-2" grow={1} shrink={2} size={33} >
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
        <SideItem type="image" className="pull-up-2 m-x" grow={2} size={33} >
          <Link
            to="/get-involved/student"
            className="get-involved-types__item p-y get-involved-types__item--company"
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
        <SideItem type="image" className="pull-up-2" grow={1} shrink={2} size={33} >
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
        <SideItem type="image">
          <img src={donateImage} />
        </SideItem>
        <SideItem className="p-y">
          <h2>
            Donate
          </h2>
          <p>
            There's a lot going on, and many opportunities for you to get involved. For any
            donation of $75 or more, we'll send you a Resilient Coders hoodie. They're printed
            right here in Massachusetts by court-involved youth.
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
