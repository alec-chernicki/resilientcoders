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
            <h2>Relentlessly Rebuilding</h2>
            <div className="divider divider__red"/>
            <p>
              We're a digital design and development agency with a social mission unlike any
              you've seen. Our coders have been identified and trained through our
              <a href="/bootcamp" className="accent-link-underline-trigger">
                <span className="accent-link-underline">
                  &nbsp;Bootcamp
                </span>
              </a>
              , and recruited into the Lab for their aptitude and their grit. Our clients get
              an exceptional product, while also helping to launch our coders' careers.

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
              href="/quote"
              className="lab-abilities__button"
            >
              Get a quote
            </ButtonPrimary>
          </SideItem>
        </SideBySide>
        <Work/>
        <CenteredContainerOuter color="grey" className="p-y">
          <Alumni/>
          <CenteredContainerInner
            color="dark-grey"
            className="text-center pull-up-2"
            accent={true}
          >
            <p className="text-white">
              Need an estimate? Use our quote generator to see how much your project will
              cost.
            </p>
            <ButtonPrimary
              href="/quote"
              className="center-block"
            >
              Get a quote
            </ButtonPrimary>
          </CenteredContainerInner>
          <CenteredContainerInner color="white">
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
                code that goes out is vetted by a professional. We hold our hackers to
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
            </div>
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default Lab
