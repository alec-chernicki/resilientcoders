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

      <div className="get-involved-types">
        <Link
          to="/get-involved/company"
          className="get-involved-types__item p-y get-involved-types__item--company"
        >
          <h2>
            Companies
          </h2>
        </Link>
        <Link
          to="/get-involved/student"
          className="get-involved-types__item p-y get-involved-types__item--student"
        >
          <h2>
            Students
          </h2>
        </Link>
        <Link
          to="/get-involved/mentor"
          className="get-involved-types__item p-y get-involved-types__item--mentor"
        >
          <h2>
            Mentors
          </h2>
        </Link>
      </div>

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
