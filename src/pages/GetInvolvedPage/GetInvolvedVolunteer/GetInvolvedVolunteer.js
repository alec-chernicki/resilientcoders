import React from 'react';
import RouteTransition from 'components/RouteTransition/RouteTransition';
import EmailFormLong from 'components/EmailForms/EmailFormLong';
import Helmet from 'react-helmet';

import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import UILayer from 'UILibrary/layer/UILayer';
import UISkewedLayer from 'UILibrary/layer/UISkewedLayer';

import communityImage from './community.jpg';
import mentorImage from '../mentor.png';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedVolunteer = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Join as a Volunteer" />
      <UILayout className="p-top-10 p-bottom-6">
        <UILayer  image={mentorImage} />
        <UISkewedLayer className="index-1" />
        <UISection className="index-2">
          <UIFlexRow>
            <UIFlex className="p-x-6 p-top-6 m-bottom-6">
              <h1>Join as a Volunteer</h1>
              <div className="divider" />
              <p className="text-on-dark">
                There's more than one way to contribute at Resilient Coders. Our Volunteer Corps is comprised of
                three Task Forces: Mentorship, Content Production, and Talent Placement.
              </p>
            </UIFlex>
            <UIFlex>
              <EmailFormLong title="Get more information" formUrl={MENTOR_FORM_URL} />
            </UIFlex>
          </UIFlexRow>
        </UISection>
      </UILayout>

      <UILayout>
        <UISection className="p-y-6">


          <UIFlexRow className="with-shadow m-bottom-6">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Mentorship
                </h2>
                <ul>
                  <li>
                    <p>
                      - Drop-in mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                  <li>
                    <p>
                      - Bootcamp mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                  <li>
                    <p>
                      - 1-on-1 mentorship of an alumni who is working, or looking for work.
                    </p>
                  </li>
                  <li>
                    <p>
                      - One-off lightning talks, at Community Hours.
                    </p>
                  </li>
                  <li>
                    <p>
                      - Curriculum support
                    </p>
                  </li>
                </ul>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage
                type="cover"
                src={communityImage}
                alt="Resilient community"
              />
            </UIFlex>
          </UIFlexRow>




          <UIFlexRow className="with-shadow m-bottom-6">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Content Production
                </h2>
                <ul>
                  <li>
                    <p>
                      - Drop-in mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                  <li>
                    <p>
                      - Bootcamp mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                </ul>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage
                type="cover"
                src={communityImage}
                alt="Resilient community"
              />
            </UIFlex>
          </UIFlexRow>

          <UIFlexRow className="with-shadow">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Talent Placement
                </h2>
                <ul>
                  <li>
                    <p>
                      - Help students develop, hone resumes and cover letters.
                    </p>
                  </li>
                  <li>
                    <p>
                      - Join us in identifying and/or brokering relationships with potential employers.
                    </p>
                  </li>
                  <li>
                    <p>
                      - Become an active advocate for diversity in hiring.
                    </p>
                  </li>
                </ul>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage
                type="cover"
                src={communityImage}
                alt="Resilient community"
              />
            </UIFlex>
          </UIFlexRow>

        </UISection>
      </UILayout>
    </RouteTransition>
  )
}

export default GetInvolvedVolunteer
