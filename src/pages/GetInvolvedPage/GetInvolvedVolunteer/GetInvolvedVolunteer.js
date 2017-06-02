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
import UIButton from 'UILibrary/button/UIButton';

import communityImage from './community.jpg';
import mentorImage from '../mentor.png';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedVolunteer = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Join as a Volunteer" />
      <UILayout className="p-top-of-page p-bottom-6">
        <UILayer  image={mentorImage} />
        <UISkewedLayer className="index-1" />
        <UISection className="index-2">
          <UIFlexRow>
            <UIFlex className="p-x-6 p-top-3 m-bottom-6">
              <h1>Join as a Volunteer</h1>
              <div className="divider" />
              <p className="text-on-dark">
                There's more than one way to contribute at Resilient Coders,
                become a member of our Volunteer Corps program.
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
          <UICard className="p-all-6 text-center m-bottom-6 with-shadow">
            <h2>Volunteer Corps</h2>
            <p className="text-constrained m-x-auto">
              Our Volunteer Corps is comprised of three Task Forces: Mentorship,
              Content Production, and Talent Placement. You can &nbsp;
              <a
                href="https://cdn2.hubspot.net/hubfs/2253693/Docs/VolunteerCorps.pdf"
                alt="Resilient Coders Volunteer Corps"
              >
                read about Volunteer Corps.
              </a>
              &nbsp;Once you've signed up, drop by, we want to meet you. Our Community
              Hours are Tuesdays and Thursdays, at
              50 Milk St. Boston MA, 5th floor, between 3:30 and 6 &nbsp;
              <a href="mailto:leon@resilientcoders.org?subject=Mentor%20stopping%20by">
                Email Leon
              </a>
              &nbsp; if you're planning on stopping by, so we know to expect you.
            </p>
            <UIButton
              target="_blank"
              external={true}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgFPrBw28g3vlDL0XMUzQ3kmwHLWVFk2YAKa7M8ChbEeyoCA/viewform"
            >
              Sign up to become a volunteer
            </UIButton>
          </UICard>

          <UIFlexRow className="with-shadow m-bottom-6">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Mentorship
                </h2>
                <ul className="m-bottom-6">
                  <li>
                    <p>
                      &#183; Drop-in mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; Bootcamp mentorship at Community Hours on Tuesdays and Thursdays.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; 1-on-1 mentorship of an alumni who is working, or looking for work.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; One-off lightning talks, at Community Hours.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; Curriculum support
                    </p>
                  </li>
                </ul>

                <h2>
                  Content Production
                </h2>
                <ul className="m-bottom-6">
                  <li>
                    <p>
                      &#183; Technical guest blogging
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; PR, helping us attract press
                    </p>
                  </li>
                </ul>

                <h2>
                  Talent Placement
                </h2>
                <ul className="m-bottom-6">
                  <li>
                    <p>
                      &#183; Help students develop, hone resumes and cover letters.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; Join us in identifying and/or brokering relationships with potential employers.
                    </p>
                  </li>
                  <li>
                    <p>
                      &#183; Become an active advocate for diversity in hiring.
                    </p>
                  </li>
                </ul>

                <UIButton
                  target="_blank"
                  external={true}
                  href="https://cdn2.hubspot.net/hubfs/2253693/Docs/VolunteerCorps.pdf"
                >
                  Read our volunteer guide
                </UIButton>
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
