import React from 'react';
import Helmet from 'react-helmet';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';

import UIButton from 'UILibrary/button/UIButton';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';
import UILayer from 'UILibrary/layer/UILayer';

import bootcampImage from './get-involved-student-bootcamp.jpg';
import communityHoursImage from './get-involved-student-hoc.jpg';
import studentImage from '../student.png';

const GetInvolvedStudent = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Join as a Student" />
      <UILayout use="tertiary" className="p-top-of-page p-bottom-6">
        <UILayer image={studentImage} />
        <UISection className="index-2 text-center">
          <h1 className="text-white">
            For students
          </h1>
          <div className="divider m-bottom-0" />
        </UISection>
      </UILayout>

      <UILayout>
        <UISection className="p-y-6">
          <UIFlexRow className="m-bottom-6 with-shadow">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Community Hours
                </h2>
                <p>
                  Every Tuesday and Thursday throughout the school year, high school students
                  from all over the Boston Public Schools system join our mentors and alumni after school, to code.
                  It's a self-led exploration, supported by our mentors and our (optional) modular curriculum.
                  It's all drop-in. Come by, once, from 3:30pm to 6pm, to 50 Milk St. Boston MA. 11th floor. Build something today.
                </p>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage type="cover" src={communityHoursImage} alt="community hours"/>
            </UIFlex>
          </UIFlexRow>

          <UIFlexRow className="with-shadow">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Bootcamp
                </h2>
                <p>
                  For young people between the ages of 17 and 27 with a high school diploma or GED, and a real
                  interest in exploring web development as a career, Bootcamp
                  might be a better fit than Community. It&#8217;s eight weeks long, daily. We recruit out of
                  our Bootcamp into Resilient Lab, our web development company.
                </p>
                <UIButton to="/bootcamp">
                  Learn more
                </UIButton>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage type="cover" src={bootcampImage} />
            </UIFlex>
          </UIFlexRow>
        </UISection>
      </UILayout>
    </RouteTransition>
  )
}

export default GetInvolvedStudent
