import React from 'react';
import styles from './Lab.css';
import CSSModules from 'react-css-modules';
import UIButton from 'UILibrary/button/UIButton';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import LabHeroImage from './lab-hero.png';
import Helmet from 'react-helmet';

import UILayout from 'UILibrary/layout/UILayout';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UICard from 'UILibrary/layout/UICard';
import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UILayer from 'UILibrary/layer/UILayer';
import UIHero from 'UILibrary/layout/UIHero';

import workConfig from './workConfig';
import panelLeftImage from './panel-left.png';
import panelRightImage from './panel-right.png';

class Lab extends React.PureComponent {
  renderWork() {
    return workConfig.map((item, key) => {
      return (
        <UIFlexRow key={key} className="m-bottom-6 with-shadow">
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
        <Helmet title="Resilient Lab" />
        <UIHero
          image={LabHeroImage}
          short={true}
          titleOne="Resilient Lab"
          text="A digital agency that empowers young people through real world experience."
        />
        <UILayout>
          <UISection>
            <UIFlexRow className="p-bottom-6">
              <UIFlex basis="60%" className="pull-up-offset-3 index-10">
                <UICard className="p-all-6 full-height pull-up-3 with-shadow">
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
              <UIFlex basis="40%">
                <UICard use="secondary" className="p-all-6 with-shadow full-height">
                  <h3 className="m-top-0">What we do:</h3>
                  <p>Front End Development</p>
                  <p>UI Design and & Prototyping</p>
                  <p>UX Research</p>
                  <UIButton href="mailto:david@resilientcoders.org">
                    Email us to learn more
                  </UIButton>
                </UICard>
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>


        <UILayout>
          <UISection className="p-bottom-1">
            {this.renderWork()}
          </UISection>
        </UILayout>

        <UILayout flush={true} use="secondary" className="p-top-6 p-sm-top-0">
          <UIFlexRow>
            <UIFlex className="p-y-20 m-right-6 m-sm-right-0 m-sm-bottom-1">
              <UILayer image={panelLeftImage} dots={false} />
              <div className="position-relative index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Learning</h2>
                <div className="divider" />
              </div>
            </UIFlex>
            <UIFlex className="p-y-20">
              <UILayer image={panelRightImage} dots={false}/>
              <div className="position-relative index-1 text-center">
                <h1>50%</h1>
                <h2 className="text-on-dark">Building</h2>
                <div className="divider" />
              </div>
            </UIFlex>
          </UIFlexRow>
        </UILayout>

        <UILayout className="p-bottom-3">
          <UISection className="with-shadow pull-up-6">
            <UICard className="p-all-6">
              <h2>
                What kind of work can you do?
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
        </UILayout>
      </RouteTransition>
    )
  }
}

export default CSSModules(Lab, styles);
