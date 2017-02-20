import './GetInvolvedStudent.scss';
import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
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
            It's all drop-in. Come by, once, from 3:30pm to 6pm, to 50 Milk St. Boston MA. Fifth floor. Build something today.
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
          <ButtonPrimary to="/bootcamp">
            Learn more
          </ButtonPrimary>
        </SideItem>
        <SideItem flush={true}>
          <img src={bootcampImage} role="presentation" />
        </SideItem>
      </SideBySide>
    </RouteTransition>
  )
}

export default GetInvolvedStudent
