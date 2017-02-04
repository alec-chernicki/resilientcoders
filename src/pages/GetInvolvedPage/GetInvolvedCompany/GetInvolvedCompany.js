import './GetInvolvedCompany.scss';
import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';
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
        </Hero>
        <SideBySide>
          <SideItem className="p-y pull-up-2">
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
            <ButtonPrimary href="/quote">
              Get a quote
            </ButtonPrimary>
          </SideItem>
          <SideItem type="image" className="pull-up-2">
            <img src={contractLabImage} />
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
          <SideItem type="image">
            <img src={hireStudentsImage} />
          </SideItem>
        </SideBySide>

        <CenteredContainerOuter>
          <EmailFormLong
            title="Stay informed"
            text="Be the first to know when we have new students to hire or when partnership
            opportunities become available."
            formUrl={COMPANY_FORM_URL}
          />
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default GetInvolvedCompany;
