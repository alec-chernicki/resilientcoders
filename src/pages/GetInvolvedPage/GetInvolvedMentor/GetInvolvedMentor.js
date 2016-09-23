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
                We're looking for hacktivists who share our vision of technology as an opportunity for
                real meritocracy, to join us. Share your passion.
              </p>

              <p>
                This fall, we'll be at 50 Milk St., 5th floor, on Tuesdays and Thursdays from 3:30 to 6. We don&#39;t ask you to make a commitment up front. Come once. Hang out with us. If you think you might stop by, throw us a note at david@resilientcoders.org so that we know to expect you.
              </p>
              <p>
                More information regarding our upcoming Hackathons and winter Bootcamp coming later in the fall. Until then, football, foliage, apple picking, and coding.
              </p>
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
