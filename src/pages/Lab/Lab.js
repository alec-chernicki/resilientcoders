import './Lab.scss';
import React from 'react';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Hero from '../../components/Containers/Hero/Hero';
import LabHeroImage from './lab-hero.png';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter'
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';
import Helmet from 'react-helmet';

import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UILayer from 'UILibrary/layer/UILayer';

import workConfig from './workConfig';
import panelLeftImage from './panel-left.png';
import panelRightImage from './panel-right.png';

class Lab extends React.PureComponent {
  renderWork() {
    return workConfig.map((item, key) => {
      return (
        <UIFlexRow key={key} className="p-bottom-6">
          <UIFlex>
            <UIImage type="cover" src={item.image} />
          </UIFlex>
          <UIFlex>
            <UICard className="p-all-6">
              <h2>
                {item.title}
              </h2>
              <h3>
                {item.note}
              </h3>
              <p>
                {item.description}
              </p>
            </UICard>
          </UIFlex>
        </UIFlexRow>
      );
    });
  }
  render() {
    return (
      <RouteTransition>
        <Helmet title="Lab" />
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

        <CenteredContainerOuter>
          <UISection>
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="70%" className="pull-up-1 index-10">
                <UICard className="p-all-6">
                  <h2>Relentlessly Rebuilding</h2>
                  <div className="divider"/>
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
                </UICard>
              </UIFlex>
              <UIFlex basis="30%">
                <UICard use="secondary" className="p-all-4">
                  <h3 className="m-top-0">What we do:</h3>
                  <p>Front End Development</p>
                  <p>UI Design and & Prototyping</p>
                  <p>UX Research</p>
                  {/*
                  <UIButton target="_blank" href="/quote">
                    Get a quote
                  </UIButton>
                  */}
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </CenteredContainerOuter>


        <CenteredContainerOuter>
          <UISection>
            {this.renderWork()}
          </UISection>
        </CenteredContainerOuter>

        <CenteredContainerOuter color="white" className="p-top-6">
          <UIFlexRow>
            <UIFlex className="p-y-20 m-right-6">
              <UILayer image={panelLeftImage} dots={false} />
              <div className="index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Learning</h2>
              </div>
            </UIFlex>
            <UIFlex className="p-y-20">
              <UILayer image={panelRightImage} dots={false} />
              <div className="index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Building</h2>
              </div>
            </UIFlex>
          </UIFlexRow>
        </CenteredContainerOuter>

        <CenteredContainerOuter className="p-bottom-6">
          <UISection>
            <UICard use="secondary" className="text-center pull-up-2 p-y-6 index-2">
              <p className="text-white">
                Need an estimate? Use our quote generator to see how much your
                project will cost.
              </p>
              <UIButton href="/quote">
                Get a quote
              </UIButton>
            </UICard>
          </UISection>

          <UISection>
            <UICard className="p-all-6">
              <h2>
                What sort of stuff can you do?
              </h2>
              <p className="m-bottom-6">
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
            </UICard>
          </UISection>
        </CenteredContainerOuter>
      </RouteTransition>
    )
  }
}

export default Lab
