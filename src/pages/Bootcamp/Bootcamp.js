import './Bootcamp.scss';
import React, {PureComponent} from 'react';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Timeline from './Timeline/Timeline';
import Partners from '../../components/Containers/Partners/Partners';
import bootcampPartnersConfig from './bootcampPartnersConfig';
import Hero from '../../components/Containers/Hero/Hero';
import BootcampHeroImage from './bootcamp-hero.png';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import Helmet from 'react-helmet';

class Bootcamp extends PureComponent {
  render() {
    return (
      <RouteTransition>
        <Helmet title="Bootcamp" />
        <Hero
          image={BootcampHeroImage}
          short={true}
          titleLineOne="Resilient Bootcamp"
        >
          <div className="divider divider__red" />
          <p>
            Transforming dedication into opportunity, the starting point for our coders&#39; careers.
          </p>
          <ButtonPrimary to="/bootcamp/roster">
            Meet our new grads
          </ButtonPrimary>
        </Hero>
        <SideBySide>
          <SideItem type="grey" className="p-y">
            <h2>The Goal</h2>
            <div className="divider divider__red" />
            <p>
              The idea behind our Bootcamp is an audacious one: Take a small cohort of young
              people, who face more challenges than most, who have been hand-picked by our
              partners for their grit, and teach them fundamentals of web development so that
              they may have access to a real career.
            </p>
          </SideItem>
          <SideItem className="p-y pull-up-1">
            <h2>Current Bootcamp</h2>
            <p>
              Our Winter Bootcamp is in full swing, at the <a href="http://www.insightsquared.com/">Insight Squared</a> is just about finished. Interested in
              applying for the next one? Stop by our <a href="/bootcamp/roster">Community Hours</a>, meet the staff.
              Coders who want to get involved as mentors should peruse the&nbsp;
              <a href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">
                Google Appointment calendar
              </a> that features moments during our Bootcamp, during which we could benefit from your help as a TA. Find a slot that works for your schedule and your skill set. Book it. And send an email to Leon (@resilientcoders.org) so that we know to expect you.
            </p>
            <p>
              Our coders are now available for hire, interested in learning more? Check out their
              bios and portfolios on our <a href="/bootcamp/roster">roster</a> page.
            </p>
            <ButtonPrimary to="/bootcamp/roster">
              Meet our new grads
            </ButtonPrimary>
          </SideItem>
        </SideBySide>
        <CenteredContainerOuter color="white">
          <CenteredContainerInner color="white" className="text-center">
            <h1>The Program</h1>
            <p className="text-constrained">
              Our 8 week program teaches students the fundamentals of front end web development.
              We start with the basics and end with real world client work.
            </p>
          </CenteredContainerInner>
          <CenteredContainerInner
            color="grey"
            standard={false}
            className="text-center p-y"
          >
            <Timeline/>
          </CenteredContainerInner>
        </CenteredContainerOuter>
        <div className="bootcamp-join">
          <div className="bootcamp-join-text">
            <h1>
              Want in?
            </h1>
            <div className="divider divider__red"/>
            <p>
              We&#8217;re looking for young people from the City of Boston, who face more challenges
              than most, to join us for eight weeks, to learn the fundamentals of web
              development for free.
            </p>
          </div>
        </div>
        <SideBySide className="bootcamp-apply">
          <SideItem type="grey" className="p-y">
            <h2>As a student</h2>
            <p>
              Our Winter Bootcamp is in full swing, at the Insight Squared office at
              4 Copley Place. We are no longer accepting applications. Interested in applying for
              the next one? Stop by our Community Hours, meet the staff.
            </p>
            <ButtonPrimary to="/get-involved/student">
              Learn more
            </ButtonPrimary>
          </SideItem>
          <SideItem type="white" className="p-y pull-up-1">
            <h2>As a mentor</h2>
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
        <CenteredContainerOuter color="white">
          <CenteredContainerInner color="white">
            <Partners
              title="Thank you to our bootcamp partners"
              partnersConfig={bootcampPartnersConfig}
            />
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default Bootcamp
