import './GetInvolvedCompany.scss';
import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

import companyImage from '../get-involved-company.jpg';

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
        <GetInvolvedBase
          title="For companies"
          image={companyImage}
          heroContent={this.renderHeroContent()}
        >
          <CenteredContainerInner
            className="get-involved-base-content"
            standard={false}
          >
            <div className="get-involved-information">
              <div className="get-involved-information__text">
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
                <ButtonPrimary href="/lab">
                  Learn More
                </ButtonPrimary>
              </div>
              <div className="get-involved-company-lab" />
            </div>
            <div className="get-involved-company-lab" />
          </CenteredContainerInner>
          <CenteredContainerInner
            className="get-involved-additional-content"
            standard={false}
          >
            <div className="get-involved-information">
              <div className="get-involved-information__text">
                <h2>
                  Hire Our Students
                </h2>
                <p>
                  You can also hire our coders directly into your company, as interns or entry-level
                  developers. There’s no placement fee, and we continue to support our coders
                  throughout their internship. In hiring one of us, you hire all of us.
                </p>
              </div>
              <div className="get-involved-company-dunia" />
            </div>
          </CenteredContainerInner>
        </GetInvolvedBase>
      </RouteTransition>
    )
  }
}

export default GetInvolvedCompany;
