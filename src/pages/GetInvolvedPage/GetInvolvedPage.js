import './GetInvolved.scss';
import React from 'react';
import {Link} from 'react-router';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import individualImage from './step-one-vertical.png';

import RouteTransition from '../../components/RouteTransition/RouteTransition';

import GetInvolvedHero from './get-involved-hero.jpg';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';

import donateImage from './donate.jpg';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <div className="get-involved">
        <div className="get-involved-types">
          <Link
            to="/get-involved/company"
            className="get-involved-types__item get-involved-types__item--company"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">As a:</p>
              <h1>
                Company
              </h1>
              <div className="divider divider__red" />
            </div>
          </Link>
          <Link
            to="/get-involved/student"
            className="get-involved-types__item get-involved-types__item--student"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">As a:</p>
              <h1>
                Student
              </h1>
              <div className="divider divider__red" />
            </div>
          </Link>
          <Link
            to="/get-involved/mentor"
            className="get-involved-types__item get-involved-types__item--mentor"
          >
            <div className="get-involved-types--underlay" />
            <div className="get-involved-types--content">
              <p className="get-involed-types--content-helper">As a:</p>
              <h1>
                Mentor
              </h1>
              <div className="divider divider__red" />
            </div>
          </Link>
        </div>
      </div>
      <CenteredContainerOuter color="grey">
        <CenteredContainerInner
          color="white"
          className="get-involved-donate"
        >
          <img className="get-involved-donate-image" src={donateImage} />
          <div className="get-involved-text-container">
            <h1>
              Donate
            </h1>
            <p>
              There's a lot going on, and many opportunities for you to get involved. For any
              donation of $75 or more, we'll send you a Resilient Coders hoodie. They're printed
              right here in Massachusetts by
              <a href="#" className="accent-link-underline accent-link-underline-trigger">
                &nbsp;court-involved youth.
              </a>
            </p>
            <div className="get-involved-donate-buttons">
              <ButtonPrimary>
                Donate $75
              </ButtonPrimary>
              <ButtonPrimary>
                Donate Any Amount
              </ButtonPrimary>
            </div>
            <p className="get-involved-donate-legal">
              Resilient Coders is a 501(c)(3) organization.
            </p>
          </div>
        </CenteredContainerInner>
      </CenteredContainerOuter>
    </RouteTransition>
  )
}

export default GetInvolvedPage
