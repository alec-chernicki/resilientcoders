import './Bootcamp.scss';
import React from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import {Link} from 'react-router';
import BootcampPartners from './BootcampPartners/BootcampPartners';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Timeline from './Timeline/Timeline';

import Hero from '../../components/Containers/Hero/Hero';
import BootcampHeroImage from './bootcamp-hero.png';

import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';


class Bootcamp extends React.Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          image={BootcampHeroImage}
          short={true}
          titleLineOne="Resilient Bootcamp"
        >
          <div className="divider divider__red" />
          <p>
            Transforming dedication into opportunity, the starting point for our coders&#39; careers.
          </p>
        </Hero>
        <SideBySide className="bootcamp-details">
          <SideItem className="bootcamp-details__text">
            <h2>The Goal</h2>
            <div className="divider divider__red" />
            <p>
              The idea behind our Bootcamp is an audacious one: Take a small cohort of young
              people, who face more challenges than most, who have been hand-picked by our
              partners for their grit, and teach them fundamentals of web development so that
              they may have access to a real career.
            </p>
          </SideItem>
          <SideItem type="grey" className="bootcamp-details__apply-text">
            <h2>Current Bootcamp</h2>
            <p>
            Our Winter Bootcamp is in full swing, so we are no longer accepting applications. Interested in
            applying for the next one? Stop by our <a href="/get-involved/student">Community Hours</a>, meet the staff.
            Coders who want to get involved as mentors should peruse the <a href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">Google Appointment calendar</a> that features moments
            during our Bootcamp, during which we could benefit from your help as a TA. Find a slot that works for your schedule and your skill set. Book it. And send an email to Leon (@resilientcoders.org) so that we know to expect you.
            </p>
            {/*
              <p>
              Our next Bootcamp will begin in January 2017. If you’re interested in joining,
              come to our upcoming Hackathon at 31 Liverpool St in East Boston, on Friday, December 9th, from 10 to 5.
              Attending a Hackathon is the only way to apply to Bootcamp.

            </p>
            <ButtonPrimary href="http://eastiecoders.com" target="_blank" className="bootcamp-details__button">
              Sign up for the hackathon
            </ButtonPrimary>
            */}
          </SideItem>
        </SideBySide>
        <div
          className="centered-container-outer centered-container-outer__white bootcamp-timeline-section-outer">
          <div
            className="centered-container-inner centered-container-inner__grey bootcamp-timeline-section-inner">
            <div className="section-main section-tertiary section-tertiary__subtle">
              <div className="section-container-primary bootcamp-title">
                <h1>The Program</h1>
                <p>
                  Our 8 week program teaches students the fundamentals of front end web development.
                  We start with the basics and end with real world client work.
                </p>
              </div>
            </div>
            <Timeline/>
          </div>
        </div>
        <div className="bootcamp-join">
          <div className="bootcamp-join-text">
            <h1>
              Want in?
            </h1>
            <div className="divider divider__red"/>
            <p>
              We&#8217;re looking for young people from the City of Boston, who face more challenges
              than most, to join us for seven weeks, to learn the fundamentals of web
              development for free.
            </p>
          </div>
        </div>
        <SideBySide className="bootcamp-apply">
          <SideItem className="bootcamp-apply__student" type="red">
            <h1>As a student</h1>
            <p>
              Whether or not Bootcamp is right for you, there are a few different ways to join us.
            </p>
          
            <ButtonPrimary to="/get-involved/student" color="white">
              Get Involved
            </ButtonPrimary>
          </SideItem>
          <SideItem className="bootcamp-apply__mentor">
            <h1>As a mentor</h1>
            <div className="divider divider__red"/>
            <p>

            Want to get involved in Bootcamp? Check out the <a href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">Google Appointment calendar</a>,
            and book a spot that makes sense for you. Come be a TA. You can also join our "drop-in" Community Hours, Tuesdays and Thursdays
            from 3:30 to 6. We&#8217;re all about making it easy for you to join.

            </p>
            <ButtonPrimary to="/get-involved/mentor">
              Get Involved
            </ButtonPrimary>
          </SideItem>
        </SideBySide>
        <BootcampPartners />
      </RouteTransition>
    )
  }
}

export default Bootcamp
