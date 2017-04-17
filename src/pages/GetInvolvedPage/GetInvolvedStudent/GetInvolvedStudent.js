import './GetInvolvedStudent.scss';
import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import UIButton from 'UILibrary/button/UIButton';
import SideBySide from '../../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../../components/Containers/SideBySide/SideItem/SideItem';
import Hero from '../../../components/Containers/Hero/Hero';
import studentImage from '../get-involved-student.jpg';
import bootcampImage from './get-involved-student-bootcamp.jpg';
import communityHoursImage from './get-involved-student-hoc.jpg';
import Helmet from 'react-helmet';

const GetInvolvedStudent = (props) => {
  return (
    <RouteTransition>
      <Helmet title="For Students" />
      <Hero
        titleLineOne="For students"
        image={studentImage}
        short={true}
      >
        <div className="divider divider__red" />
      </Hero>
      <SideBySide>
        <SideItem className="p-y pull-up-2">
          <h2>
            Community Hours
          </h2>
          <p>
            Every Tuesday and Thursday throughout the school year, high school students
            from all over the Boston Public Schools system join our mentors and alumni after school, to code.
            It's a self-led exploration, supported by our mentors and our (optional) modular curriculum.
            It's all drop-in. Come by, once, from 3:30pm to 6pm, to 50 Milk St. Boston MA. 5th floor. Build something today.
          </p>
        </SideItem>
        <SideItem flush={true} className="pull-up-2">
          <img src={communityHoursImage} role="presentation" />
        </SideItem>
      </SideBySide>
      <SideBySide>
        <SideItem className="p-y">
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
        </SideItem>
        <SideItem flush={true}>
          <img src={bootcampImage} role="presentation" />
        </SideItem>
      </SideBySide>
    </RouteTransition>
  )
}

export default GetInvolvedStudent
