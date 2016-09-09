import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner';

import studentImage from '../get-involved-student.jpg';

const GetInvolvedStudent = (props) => {
  return (
    <RouteTransition>
      <GetInvolvedBase
        title="For students"
        image={studentImage}
      >
        <CenteredContainerInner
          className="get-involved-base-content"
        >
          <h2>
            Coworking
          </h2>
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
