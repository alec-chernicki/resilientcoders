import './GetInvolvedMentor.scss';
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

import communityImage from './community.jpg';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedMentor = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Join as a Volunteer" />
      <UILayout use="secondary" className="p-top-10 p-bottom-6">
        <UISection>
          <UIFlexRow>
            <UIFlex>
              <UICard className="p-x-6">
                <h1>For Volunteers:</h1>
                <div className="divider" />
                <p>
                  There's more than one way to contribute at Resilient Coders. Our Volunteer Corps is comprised of
                  three Task Forces: Mentorship, Content Production, and Talent Placement. You can <a href="https://cdn2.hubspot.net/hubfs/2253693/Docs/VolunteerCorps.pdf" alt="Resilient Coders Volunteer Corps">read about Volunteer Corps</a>, or just fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgFPrBw28g3vlDL0XMUzQ3kmwHLWVFk2YAKa7M8ChbEeyoCA/viewform">this survey</a>.
                  Once you've done that, come by.
                  We want to meet you. Our Community Hours are Tuesdays and Thursdays, at 50 Milk St. Boston MA, 5th floor, between 3:30 and 6. <a href="mailto:leon@resilientcoders.org?subject=Mentor%20stopping%20by">Email Leon</a> if you're planning on stopping by,
                  so we know to expect you.
                </p>
              </UICard>
            </UIFlex>
            <UIFlex>
              <EmailFormLong formUrl={MENTOR_FORM_URL} />
            </UIFlex>
          </UIFlexRow>
        </UISection>
      </UILayout>

      <UILayout>
        <UISection className="p-y-6">
          <UIFlexRow>
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Bootcamp
                </h2>
                <p>
                  We're always looking for hacktivists who share our vision of technology as an
                  opportunity for real meritocracy, to join us. Share your passion.

                </p>
                <p>Next Bootcamp will be at the Roxbury Innovation Center, from July 10th through September 1st. More details coming soon.
                </p>
                {/*
                  <p>
                  Coders who want to get involved as mentors should peruse our mentorhsip calendar
                  that features moments during our Bootcamp, during which we could benefit from your
                  help as a TA. Find a slot that works for your schedule and your skill set and book it.
                  And send an email to Leon (@resilientcoders.org) so that we know to expect you.
                  </p>
                  <UIButton href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">
                  Book a time to mentor
                  </UIButton>
                */}
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

export default GetInvolvedMentor
