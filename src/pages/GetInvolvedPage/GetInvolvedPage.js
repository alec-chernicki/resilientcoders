import './GetInvolved.scss';
import React from 'react';
import EmailFormInline from '../../components/EmailForms/EmailFormInline';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import individualImage from './step-one-vertical.png';

import RouteTransition from '../../components/RouteTransition/RouteTransition';

import Hero from '../../components/Containers/Hero/Hero';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';

import GetInvolvedHero from './get-involved-hero.jpg';
import GetInvolvedRow from './GetInvolvedRow/GetInvolvedRow';

const GetInvolvedPage = (props) => {
  return (
    <RouteTransition>
      <div className="get-involved">
        <Hero
          image={GetInvolvedHero}
          titleLineOne="Get involved"
          className="get-involved-hero"
        />
        <CenteredContainerOuter color="grey">
          <GetInvolvedRow>
            <h1>
              As an individual
            </h1>
            <div className="divider divider__red"/>
            <p>
              Come mentor with us or tech a workshop. Our coders meet daily to learn HTML,
              CSS, jQuery, JavaScript, Bootstrap, and git, from professionals. They develop
              professional and leadership skills. And they begin honing a direction for the
              ambition that they've always had.
            </p>
            <p className="form-helper">
              I'm interested in mentorship opportunities:
            </p>
            <EmailFormInline/>
            <input type="checkbox"/>
          </GetInvolvedRow>
          <div
            className="centered-container-inner centered-container-inner__white get-involved-info">
            <img src={individualImage} alt="individual working with student" className="get-involved-image"/>
            <div className="get-involved-info-description">
              <h1>
                As an individual
              </h1>
              <div className="divider divider__red"/>
              <p>
                Come mentor with us or tech a workshop. Our coders meet daily to learn HTML,
                CSS, jQuery, JavaScript, Bootstrap, and git, from professionals. They develop
                professional and leadership skills. And they begin honing a direction for the
                ambition that they've always had.
              </p>
              <p className="form-helper">
                I'm interested in mentorship opportunities:
              </p>
              <EmailFormInline/>
              <input type="checkbox"/>
            </div>
          </div>
          <div
            className="centered-container-inner centered-container-inner__white get-involved-info">
            <div className="get-involved-info-description">
              <h1>
                As a company
              </h1>
              <div className="divider divider__red"/>
              <p>
                Hire our students to crush your next project with Resilient Lab. 50% of what we
                bill will be a tax-deductable write off, and the other 50% will be billable
                hours.
              </p>
              <ButtonPrimary>
                Get a Quote
              </ButtonPrimary>
              <p className="form-helper">
                I'm interested in partnering with Resilient or would like to hire an intern:
              </p>
              <EmailFormInline/>
            </div>
            <img src={individualImage} alt="company working with student" className="get-involved-image"/>
          </div>
          <div
            className="centered-container-inner centered-container-inner__white get-involved-info">
            <img src="http://placehold.it/300x300" alt="donation sweatshirt" className="get-involved-image"/>
            <div>
              <h1>
                Donate
              </h1>
              <div className="divider divider__red"/>
              <p>
                There's a lot going on, and many opportunities for you to get involved. For any
                donation of $75 or more, we'll send you a Resilient Coders hoodie. They're
                printed here in Massachusetts by court-involved youth.
              </p>
              <a className="button" href="#">Donate $75+</a>
              <a className="button" href="#">Donate any amount</a>
            </div>
          </div>
        </CenteredContainerOuter>
      </div>
    </RouteTransition>
  )
}

export default GetInvolvedPage
