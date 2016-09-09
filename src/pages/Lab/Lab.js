import './Lab.scss';
import React from 'react';
import Work from './Work/Work';
import Alumni from './Alumni/Alumni';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import RouteTransition from '../../components/RouteTransition/RouteTransition';

import Hero from '../../components/Containers/Hero/Hero';
import LabHeroImage from './lab-hero.png';

import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';

import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter'
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';

class Lab extends React.Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          image={LabHeroImage}
          short={true}
          titleLineOne="Resilient Lab"
        >
          <div className="divider divider__red" />
          <p>
            A digital agency that empowers young people through real world experience.
          </p>
        </Hero>
        <SideBySide className="lab-details">
          <SideItem className="lab-description">
            <h2>Your next project is a write-off</h2>
            <div className="divider divider__red"/>
            <p>
              We're a digital design and development agency with a social mission unlike any
              you've seen. Our coders have been identified and trained through our
              <a href="#" className="accent-link-underline-trigger">
                <span className="accent-link-underline">
                  &nbsp;Bootcamp
                </span>
              </a>
              , and recruited into the Lab for their aptitude and their grit. Our clients get
              an exceptional product, while also helping to launch our coders' careers.
              Half of what we bill is a tax-deductable write off as an investment
              in our students' careers.
            </p>
          </SideItem>
          <SideItem
            className="lab-abilities"
            size={10}
            type="grey"
          >
            <h3>What we do:</h3>
            <p>Front End Development</p>
            <p>UI Design and & Prototyping</p>
            <p>UX Research</p>
            <ButtonPrimary
              target="blank"
              href="http://resilientcoders.org/quote"
              className="lab-abilities__button"
            >
              Get a quote
            </ButtonPrimary>
          </SideItem>
        </SideBySide>
        <Work/>
        <Alumni/>
        <CenteredContainerOuter color="grey">
          <div className="call-to-action-container clearfix">
            <div
              className="section-main section-tertiary section-tertiary__alert call-to-action lab-cta">
              <div className="section-container-primary">
                <p>
                  Need an estimate? Use our quote generator to see how much your project will
                  cost.
                </p>
                <a
                  className="button button__slice"
                  target="blank"
                  href="http://resilientcoders.org/quote">
                  <span>GET A QUOTE</span>
                </a>
              </div>
            </div>


            <CenteredContainerInner>
              <div className="faq">
                <h2>
                  What sort of stuff can you do?
                </h2>
                <p>
                  Our young people are most comfortable with relatively simple websites, and
                  custom Wordpress theming. But our partnership with East Coast Product allows us
                  to do pretty much anything. We've teamed up to build software using React, for
                  example. Our friends at ECP delegated out to our students the work that was
                  appropriate to their skills; a set that grew over the course of the project.
                  Whether or not we're working with ECP on a particular project, every line of
                  code that goes out is vetted by a professional. We hold our youth to
                  professional standards.
                </p>
                <h2>
                  How does the money work?
                </h2>
                <p>
                  Basically, half of the money that we make on a Resilient Lab project goes to pay
                  for the wages of those who worked on it. The other half is invested in their
                  education. The idea is that a young person will be hired to build something that
                  lies just outside the realm of his expertise. He will be paired up with a more
                  senior-level person who then delegates skill-appropriate work to the young
                  person, and mentors him throughout the job. They may spend an hour learning, for
                  every hour spent working. Our quote covers the instructor's time, and the youth
                  coder's time, with the understanding that half of their time was spent learning.
                </p>
                <h2>
                  So, can I write it off my taxes as a donation?
                </h2>
                <p>
                  Some of it, yes. Your invoice will itemize out the straight cost of building
                  your project, versus the investment you're making in our coders' education.
                  Within the hourly rate that you're quoted, usually half of that is a donation,
                  and will be spent on training the coders to be ready to work on your project.
                  The other half is your payment for a service. This will vary depending on the
                  specific needs of a project. We'll be transparent about those proportions when
                  we start.
                </p>
              </div>
            </CenteredContainerInner>
            <div className="section-main section-tertiary section-tertiary__subtle">
              <div className="section-container-primary">
                <p>
                  Ready to get started?
                </p>
                <ButtonPrimary target="blank" href="http://resilientcoders.org/quote" className="lab-end-button">
                  Start your project
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default Lab
