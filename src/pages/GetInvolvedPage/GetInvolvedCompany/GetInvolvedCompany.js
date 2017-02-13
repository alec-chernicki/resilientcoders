import './GetInvolvedCompany.scss';
import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter';
import SideBySide from '../../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../../components/Containers/SideBySide/SideItem/SideItem';
import EmailFormLong from '../../../components/EmailForms/EmailFormLong';

import companyImage from '../get-involved-company.jpg';
import Hero from '../../../components/Containers/Hero/Hero';
import contractLabImage from './get-involved-lab.jpg';
import hireStudentsImage from './get-involved-dunia.jpg';

const COMPANY_FORM_URL = '/api/subscribe/company';

class GetInvolvedCompany extends React.Component {
  renderHeroContent() {
    return (
      <p>
        Looking for talent? There are two ways to hire our coders.
      </p>
    )
  }
  render () {
    return (
      <RouteTransition>
        <Hero
          image={companyImage}
          titleLineOne="For companies"
          short={true}
        >
          <div className="divider divider__red" />
          <p>
            Looking for talent? There are two ways to hire our coders.
          </p>
        </Hero>

        <SideBySide color="white">
          <SideItem className="p-y">
            <h2>
              Stay informed
            </h2>
            <p>
              Be the first to know when we have new students to hire or when partnership
              opportunities become available.
            </p>
          </SideItem>
          <SideItem className="pull-up-3" flush={true}>
            <EmailFormLong
              formUrl={COMPANY_FORM_URL}
            />
          </SideItem>
        </SideBySide>

        <SideBySide className="p-top">
          <SideItem className="p-y">
            <h2>
              Contract Lab
            </h2>
            <p>
              Some of our Bootcamp
              graduates are recruited into a paid apprenticeship at Resilient Lab, our digital
              agency. There, they further develop their technical skills, as well as core
              professional skills, while working for a client. You can help launch their careers
              by hiring us to build your website.
            </p>
            <ButtonPrimary to="/lab">
              Learn more
            </ButtonPrimary>
          </SideItem>
          <SideItem flush={true}>
            <img src={contractLabImage} role="presentation" />
          </SideItem>
        </SideBySide>

        <SideBySide>
          <SideItem className="p-y">
            <h2>
              Hire Our Students
            </h2>
            <p>
              You can also hire our coders directly into your company, as interns or entry-level
              developers. There’s no placement fee, and we continue to support our coders
              throughout their internship. In hiring one of us, you hire all of us.
            </p>
          </SideItem>
          <SideItem flush={true}>
            <img src={hireStudentsImage} role="presentation" />
          </SideItem>
        </SideBySide>
      </RouteTransition>
    )
  }
}

export default GetInvolvedCompany;
