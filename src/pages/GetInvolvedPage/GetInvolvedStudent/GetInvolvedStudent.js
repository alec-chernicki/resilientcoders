import './GetInvolvedStudent.scss';
import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';

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
          standard={false}
        >
          <div className="get-involved-information">
            <div className="get-involved-information__text">
              <h2>
                Coworking
              </h2>
              <p>
                Every Tuesday and Thursday throughout the school year, high school students
                from all over the Boston Public Schools system join our mentors and alumni after school, to code.
                It&#8217;s a self-led exploration, supported by our mentors and our (optional) modular curriculum.
                It&#8217;s all drop-in. Come by, once, to 50 Milk St. Boston MA. Fifth floor. Build something today.
              </p>

            </div>
            <div className="get-involved-student" />
          </div>
          <div className="get-involved-student" />
        </CenteredContainerInner>
        <CenteredContainerInner
          className="get-involved-additional-content"
          standard={false}
        >
          <div className="get-involved-information">
            <div className="get-involved-information__text">
              <h2>
                Bootcamp
              </h2>
              <p>
                For young people between the ages of 17 and 27 with a high school diploma or GED, and a real
                interest in exploring web development as a career, Bootcamp
                might be a better fit than Coworking. It&#8217;s seven weeks long, daily. We recruit out of
                our Bootcamp into Resilient Lab, our web development company.
              </p>
              <ButtonPrimary to="/bootcamp">
                Learn more
              </ButtonPrimary>
            </div>
            <div className="get-involved-student-bootcamp" />
          </div>
          <div className="get-involved-student-bootcamp" />
        </CenteredContainerInner>
      </GetInvolvedBase>
    </RouteTransition>
  )
}

export default GetInvolvedStudent
