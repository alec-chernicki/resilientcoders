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
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';

import contractLabImage from './get-involved-lab.jpg';
import hireStudentsImage from './get-involved-rizel.jpg';
import companyImage from '../company.png';

const COMPANY_FORM_URL = '/api/subscribe/company';

class GetInvolvedCompany extends React.PureComponent {
  render () {
    return (
      <RouteTransition>
        <Helmet title="Hire" />

        <UILayout className="p-top-of-page p-bottom-6">
          <UILayer image={companyImage} />
          <UISkewedLayer use="primary" className="index-1" />
          <UISection className="index-2">
            <UIFlexRow>
              <UIFlex className="p-x-6 p-top-3 m-bottom-6">
                <h1>Hire</h1>
                <div className="divider" />
                <p className="text-on-dark">
                  Committing to diversity and inclusion at your company requires more
                  than words, it requires action. We're here to make that easy for you.

                </p>

                <UIButton
                  external={true}
                  href="https://www.eventbrite.com/e/resilient-coders-demo-day-tickets-47117806628">
                  Demo Day
                </UIButton>

              </UIFlex>
              <UIFlex>
                <EmailFormLong title="Get our hiring guide" formUrl={COMPANY_FORM_URL} />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <UILayout className="p-y-6">
          <UISection>
          <UIFlexRow className="m-bottom-6 with-shadow">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Hire Our Graduates
                </h2>
                <p>
                  By the time they graduate from the program, our students will have learned full stack javascript,
                  including ES6, jQuery, React, and Node. They will have worked with MongoDB and Postgres. They will have built
                  at least one full stack application, soup to nuts. They will have procured, serviced, and invoiced their own freelance client.
                  They will have thrown 20+ repositories on GitHub, participated in Agile product sprints, and gained more industry
                  experience than most college graduates with CS degrees. Our graduates go on to work for companies including Wellington,
                  Fidelity, DigitasLBI, SapientRazorfish, the City of Boston Department of Innovation and Technology, Boston University, the Boston Globe, and
                  tech startups such as RStudio, Veson Nautical, Gravyty, Bison, and many others. Reach out to learn how they can contribute to your software engineering team.
                </p>
                {/*
                <UIButton to="/bootcamp/roster">
                  Meet our students
                </UIButton>
                */}
                <UIButton
                  external={true}
                  href="mailto:david@resilientcoders.org?subject=Hiring from RC">
                  Contact Us
                </UIButton>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage
                height={300}
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
