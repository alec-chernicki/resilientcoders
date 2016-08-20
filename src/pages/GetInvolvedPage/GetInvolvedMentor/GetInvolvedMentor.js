import './GetInvolvedMentor.scss';
import React, { PropTypes } from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import GetInvolvedBase from '../GetInvolvedBase/GetInvolvedBase';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import CenteredContainerInner from '../../../components/Containers/CenteredContainer/CenteredContainerInner'

const GetInvolvedMentor = (props) => {
  return (
    <RouteTransition>
      <GetInvolvedBase>
        <CenteredContainerInner
          color="white"
          className="get-involved-base-content"
          standard={false}
        >
          <div className="get-involved-information">
            <div className="get-involved-information__text">
              <h1>
                For Mentors
              </h1>
              <p>
                We're looking for hacktivists who share our vision of technology as an opportunity for
                real meritocracy, to join us. Share your passion.
              </p>
              <p>
                We're doing things a little different for this next Bootcamp. We're now using Google
                Appointments for mentorship slots, allowing you to sign up for the sessions you want
                to join us for. All you have to do is open the calendar, skip ahead to July, pick
                the session(s) you're interested in, and sign up.
              </p>
              <ButtonPrimary
                target="blank"
                href="https://calendar.google.com/calendar/selfsched?sstoken=UUl1RTN1NjMwanR4fGRlZmF1bHR8NjRmMjJiNGYzNTc2MDMyMDVmYzdjMGIyMmNmM2EwMzE">
                Check out the calendar
              </ButtonPrimary>
            </div>
            <div className="get-involved-information-mentor-image" />
          </div>
        </CenteredContainerInner>
        <CenteredContainerInner
          color="white"
          className="get-involved-mentor-content"
        >
          <h2 className="get-involved-emphasis">
            When and where?
          </h2>
          <p>
            We'll be at the Roxbury Innovation Center in Dudley Square, from 9:30
            to 2:30 daily, July 11th through August 26th. There are three main "periods" in the day:
            9:30 to 11, 11 to 12, and 1 to 2:30. Some slots are one spot, some are two.
          </p>
          <p>
            There's no expectation of recurring commitment. Come once if that's what works for you.
            No judgment, pinkie swear. We do ask that you commit to attending any sessions you sign
            up for, since you're removing it from availability.
          </p>
          <h2 className="get-involved-emphasis">
            What's being taught?
          </h2>
          <p>
            This time around, we're focusing almost exclusively on front-end
            stuff, with a light touch on javascript and Wordpress towards the end. We chose to do
            this because we're treating our Bootcamp as training for Resilient Lab, our dev shop,
            where our guys are paid to build websites for clients.
          </p>
          <h2 className="get-involved-emphasis">
            What do "Maker" and "Instructor" mean?
          </h2>
          <p>
            Instructor means that the person to reserve
            this spot is expected to lead a session. If you're new to us, we'll provide guidance,
            and a suggested general framework. If the appointment slot isn't explicitly marked
            "instructor" than you're a essentially a TA, walking around and answering questions.
            "Maker" refers to students' self-directed learning time, during which they're working
            on a particular project. This is when we most need mentors, because it's when they're
            exploring.
          </p>
          <h2 className="get-involved-emphasis">
            What should I expect?
          </h2>
          <p>
            15 or so interested young people with little-to-no experience
            coding. You can see the last Bootcamp in action in this piece by WGBH, or, better yet,
            hear our alumni talk about their experience here.
          </p>
          <p>
            If you can't make of these windows, don't worry about it. There will be plenty of
            other opportunities to get involved.
          </p>
        </CenteredContainerInner>
      </GetInvolvedBase>
    </RouteTransition>
  )
}

export default GetInvolvedMentor
