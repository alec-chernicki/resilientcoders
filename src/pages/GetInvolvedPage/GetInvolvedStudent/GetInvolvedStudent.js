import './GetInvolvedStudent.scss';
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

import bootcampImage from './get-involved-student-bootcamp.jpg';
import communityHoursImage from './get-involved-student-hoc.jpg';

const GetInvolvedStudent = (props) => {
  return (
    <RouteTransition>
      <Helmet title="Join as a Student" />
      <UILayout use="secondary" className="p-top-10 p-bottom-6">
        <UISection>
          <UICard className="text-center">
            <h1>
              For students
            </h1>
            <div className="divider m-bottom-0" />
          </UICard>
        </UISection>
      </UILayout>

      <UILayout>
        <UISection className="p-y-6">
          <UIFlexRow className="p-bottom-6">
            <UIFlex>
              <UICard className="p-all-6">
                <h2>
                  Community Hours
                </h2>
                <p>
                  Every Tuesday and Thursday throughout the school year, high school students
                  from all over the Boston Public Schools system join our mentors and alumni after school, to code.
                  It's a self-led exploration, supported by our mentors and our (optional) modular curriculum.
                  It's all drop-in. Come by, once, from 3:30pm to 6pm, to 50 Milk St. Boston MA. 5th floor. Build something today.
                </p>
              </UICard>
            </UIFlex>
            <UIFlex>
              <UIImage type="cover" src={communityHoursImage} alt="community hours"/>
            </UIFlex>
          </UIFlexRow>
          <UIFlexRow>
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
                <p>
                  The first step is to come meet the team. Feel free to stop by our Community Hours.
                  That's Tuesdays and Thursdays, at 50 Milk St. Boston MA, 5th floor, between 3:30 and 6. <a href="mailto:leon@resilientcoders.org?subject=Mentor%20stopping%20by">Email Leon</a> if you're planning on stopping by,
                  so we know to expect you.
                </p>
                <p>We recruit into Bootcamp from our Hackathons. The next one is on April 29th from 10 to 5 at
                  31 Liverpool St in East Boston. <a href="https://docs.google.com/a/resilientcoders.org/forms/d/1QFBGAe1viFKEl-n7SbAek5XnAGQ22hTLdYoBlAXOiOM/">Sign up.</a>
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
