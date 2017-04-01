import './GetInvolved.scss';
import React from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import donateImage from './donate.jpg';
import Helmet from 'react-helmet';
import GetInvolvedTypes from './GetInvolvedTypes';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Get Involved" />

      <GetInvolvedTypes />

      <SideBySide className="p-top">
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
