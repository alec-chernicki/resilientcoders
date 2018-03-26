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
import hireStudentsImage from './get-involved-dunia.jpg';
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
                  Whether it's a one-off project that our internal agency can build, or a full-time apprentice,
                  we can walk you through what it looks like to hire from Resilient Coders.
                </p>

                <UIButton
                  external={true}
                  href="https://www.eventbrite.com/e/resilient-coders-demo-day-tickets-43260121187">
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
                  Our Apprenticeships program is like
                  a coop, but without the constraints of the academic calendar, and with the added benefit
                  of the continued technical and non-technical support of the Resilient Coders family. All of our graduates have
                  demonstrated proficiency in JavaScript, by building games and applications, from scratch.
                  They all have experience in Node and React. Learn more from the Hiring Guide (above), or just contact us.
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


            <UIFlexRow className="with-shadow">
              <UIFlex>
                <UICard className="p-all-6">
                  <h2>
                    Hire the Lab
                  </h2>
                  <p>
                    Some of our Bootcamp
                    graduates are recruited into a paid fellowship at Resilient Lab, our digital
                    agency. There, they further develop their technical skills, as well as core
                    professional skills, while working for a client. You can help launch their careers
                    by hiring us to build your website or web application. We design and build custom Wordpress themes,
                    as well as more extensive projects involving Angular or React. This is a great option for companies
                    that want to hire our graduates on a project basis.
                  </p>
                  <UIButton to="/lab">
                    Learn more
                  </UIButton>
                </UICard>
              </UIFlex>
              <UIFlex>
                <UIImage
                  height={300}
                  type="cover"
                  src={contractLabImage}
                  alt="Contract Resilient Lab"
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
