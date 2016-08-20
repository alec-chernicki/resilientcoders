import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

const GetInvolvedStudent = (props) => {
  return (
    <RouteTransition>
      <GetInvolvedBase>
        <CenteredContainerInner
          className="get-involved-base-content"
        >
          <h1>
            For Students
          </h1>
          <p>
            We're looking for hacktivists who share our vision of technology as an opportunity for
            real meritocracy, to join us. Share your passion.
          </p>
        </CenteredContainerInner>
      </GetInvolvedBase>
    </RouteTransition>
  )
}

export default GetInvolvedStudent
