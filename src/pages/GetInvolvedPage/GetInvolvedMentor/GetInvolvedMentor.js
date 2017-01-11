import './GetInvolvedMentor.scss';
import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner'
import EmailFormLong from '../../../components/EmailForms/EmailFormLong';

import mentorImage from './get-involved-mentor.jpg';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedMentor = (props) => {
  return (
    <RouteTransition>
      <GetInvolvedBase
        title="For mentors"
        image={mentorImage}
      >
        <CenteredContainerInner
          color="white"
          className="get-involved-base-content"
          standard={false}
        >
          <div className="get-involved-information">
            <div className="get-involved-information__text">
              <p>
                We&#39;re looking for hacktivists who share our vision of technology as an opportunity for
                real meritocracy, to join us. Share your passion.
              </p>

              <p>
              Coders who want to get involved as mentors should peruse the <a href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">Google Appointment calendar</a> that features moments
              during our Bootcamp, during which we could benefit from your help as a TA. Find a slot that works for your schedule and your skill set. Book it. And send an email to Leon (@resilientcoders.org) so that we know to expect you.              </p>

            </div>
            <div className="get-involved-information-mentor-image" />
          </div>
        </CenteredContainerInner>
        <CenteredContainerInner
          className="get-involved-additional-content"
          standard={false}
        >
          <EmailFormLong
            title="Sign Up"
            text="Enter in your information and we'll send over some details on how to get involved as
            a mentor and keep you up to date as new opportunities become available."
            formUrl={MENTOR_FORM_URL}
          />
        </CenteredContainerInner>
      </GetInvolvedBase>
    </RouteTransition>
  )
}

export default GetInvolvedMentor
