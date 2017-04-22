import React from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import EmailFormLong from 'components/EmailForms/EmailFormLong';
import Helmet from 'react-helmet';

import UIButton from 'UILibrary/button/UIButton'
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';

import contractLabImage from './get-involved-lab.jpg';
import hireStudentsImage from './get-involved-dunia.jpg';

const COMPANY_FORM_URL = '/api/subscribe/company';

class GetInvolvedCompany extends React.PureComponent {
  render () {
    return (
      <RouteTransition>
        <Helmet title="Join as a Company" />

        <UILayout use="secondary" className="p-top-10 p-bottom-6">
          <UISection>
            <UIFlexRow>
              <UIFlex>
                <UICard className="p-x-6">
                  <h1>For Companies:</h1>
                  <div className="divider" />
                  <p>
                    Committing to diversity and inclusion at your company requires more
                    than words, it requires action. From recuitment to hiring, we're here to help
                    at every step of the process.
                  </p>
                  <p>
                    Be the first to know when we have new students to hire or when partnership
                    opportunities become available.
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex>
                <EmailFormLong formUrl={COMPANY_FORM_URL} />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout className="p-y-6">
          <UISection>
            <UIFlexRow className="m-bottom-6">
              <UIFlex>
                <UICard className="p-all-6">
                  <h2>
                    Contract Our Students
                  </h2>
                  <p>
                    Some of our Bootcamp
                    graduates are recruited into a paid apprenticeship at Resilient Lab, our digital
                    agency. There, they further develop their technical skills, as well as core
                    professional skills, while working for a client. You can help launch their careers
                    by hiring us to build your website.
                  </p>
                  <UIButton to="/lab">
                    Learn more
                  </UIButton>
                </UICard>
              </UIFlex>
              <UIFlex>
                <UIImage
                  type="cover"
                  src={contractLabImage}
                  alt="Contract Resilient Lab"
                />
              </UIFlex>
            </UIFlexRow>

            <UIFlexRow>
              <UIFlex>
                <UICard className="p-all-6">
                  <h2>
                    Hire Our Students
                  </h2>
                  <p>
                    You can also hire our coders directly into your company, as interns or entry-level
                    developers. Our students are guaranteed to have a junior level degree of experience
                    in front end development. There’s no placement fee, and we continue to support the
                    learning of our coders throughout their internship or career. In hiring one of us,
                    you hire all of us.
                  </p>
                  <UIButton to="/bootcamp/roster">
                    Meet our students
                  </UIButton>
                </UICard>
              </UIFlex>
              <UIFlex>
                <UIImage
                  type="cover"
                  src={hireStudentsImage}
                  alt="Hire a Resilient Coder"
                />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>
      </RouteTransition>
    )
  }
}

export default GetInvolvedCompany;
